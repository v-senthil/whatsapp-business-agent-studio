# Connector auth: mTLS (bank example)

Mutual TLS is the auth mode banks, payment networks, and healthcare vendors use when they need cryptographic assurance that only your servers can talk to their API. Instead of a shared secret, both sides present certificates during the TLS handshake and verify each other.

If your vendor's onboarding documents say things like "you will exchange a client certificate", "provide us a CSR", or "we will countersign your certificate", you need mTLS auth.

## When to use mTLS

- The vendor issued you a client certificate (`.pem`, `.crt`, `.cer`, or `.p12`), and possibly a matching private key.
- Their API rejects connections that only present an API key or OAuth token; the TLS handshake itself is the auth.
- They gave you a base URL that returns a client-certificate error when opened in a plain browser.

If those apply, use mTLS. Otherwise use [API key](./connector-auth-api-key-stripe.md) or [OAuth](./connector-auth-oauth-salesforce.md).

## What you need from the vendor

Three or four files, depending on the vendor:

1. **Client certificate** (PEM). Sometimes called "public certificate" or "signed certificate". Text starts with `-----BEGIN CERTIFICATE-----`.
2. **Client private key** (PEM). The matching key you (or a CSR you signed) sent to the vendor. Text starts with `-----BEGIN PRIVATE KEY-----` or `-----BEGIN RSA PRIVATE KEY-----`. Guard this like a password.
3. **CA certificate chain** (PEM, optional). The vendor's CA bundle if their certificate is not signed by a public root. Text starts with `-----BEGIN CERTIFICATE-----` and often contains multiple certs concatenated.
4. **Passphrase** (optional). If the private key was encrypted, you also need the passphrase that decrypts it. Ask the vendor how they intended for you to store it.

If the vendor sent you a `.p12` or `.pfx` bundle, split it into cert + key with:

```
openssl pkcs12 -in bundle.p12 -nokeys -out client.crt.pem
openssl pkcs12 -in bundle.p12 -nocerts -out client.key.pem -nodes
```

Store both files somewhere secure temporarily; you will paste them into the studio in a moment, and then you should delete the local copies.

## Wire it into the studio

Open **Connectors > New** and fill in:

- **Name**: `AcmeBank`
- **Description**: `Fetches account balances and initiates transfers.`
- **Base URL**: whatever the vendor gave you, for example `https://api.acmebank.example.com/v1`
- **Auth type**: **mTLS**
- **Client certificate**: paste the full PEM including `-----BEGIN` and `-----END` lines
- **Client key**: paste the full PEM including `-----BEGIN` and `-----END` lines
- **CA certificate** (optional): paste the vendor's CA bundle if given
- **Fingerprint** (optional): the SHA-256 fingerprint of the client cert, if you want the studio to double-check its own cert on load. Get it with `openssl x509 -noout -fingerprint -sha256 -in client.crt.pem`.
- **Subject** (optional): the certificate's Subject DN. Useful when you rotate and want to confirm the studio is using the new cert.
- **Expires at** (optional): expiration date of the client cert. The studio shows a warning when this is within 30 days.

Save. The Health card should say **Connected**. If it says **Error**, the most common cause is the private key not matching the certificate. See troubleshooting below.

## Certificate rotation

Client certificates expire, usually every 12 or 24 months. Rotation is a coordinated dance with the vendor.

1. Generate a new key and CSR:
   ```
   openssl req -new -newkey rsa:2048 -nodes -keyout client-new.key.pem -out client-new.csr
   ```
2. Send the CSR to the vendor. They sign it and return a new client certificate.
3. Open the connector in the studio.
4. Click **Rotate credentials**.
5. Paste the new certificate and the new private key.
6. Update the **Fingerprint**, **Subject**, and **Expires at** fields.
7. Save. The next tool call uses the new certificate.
8. Confirm a real tool call succeeds with the new certificate.
9. Delete the old key file from your local machine.

Do not rotate the certificate right before a critical business event. Vendors sometimes take a business day to activate a new cert on their side.

## Troubleshooting

**"tls: private key does not match public key" on save.** The client cert and client key files are from different rotations. Only the pair issued together will validate. Confirm by running `openssl x509 -noout -modulus -in client.crt.pem | openssl md5` and `openssl rsa -noout -modulus -in client.key.pem | openssl md5`. Both should print the same MD5.

**"tls: unknown authority" or "x509: certificate signed by unknown authority".** The vendor's server certificate is signed by an internal CA that your system does not trust. Paste the vendor's CA bundle into the CA certificate field.

**"remote error: tls: bad certificate" from the server.** The vendor did not accept your client certificate. Either the certificate you registered on their side is different from what the studio is presenting (rotation mismatch), or they revoked your certificate. Contact the vendor's integration team with your certificate's fingerprint so they can check what they have on file.

**Cert appears fine but every tool call times out.** The base URL is probably wrong, or the vendor requires a specific TLS version or cipher suite that Node's TLS defaults do not include. Ask the vendor for their expected TLS handshake profile.

**"expires_at" warning shows even though the cert is fresh.** You typed the wrong date in the field. This field is metadata, not read from the cert; correct the value manually.

## What the browser sees

Nothing. Certificates and keys are stored server-side, in the studio's session store, encrypted at rest by the session secret. The browser only sees a "mTLS configured" flag. When a tool runs, the TLS handshake happens between the studio's Node process and the vendor. The certificate never crosses to the browser or into an agent response.

## Export considerations

By default the config export strips certificates and keys. If you check **Include credentials** during export, the certs and keys are included in the JSON as base64. That file is a compromise of your bank integration if it leaks. Only do this for encrypted-at-rest backups.

## Adapting to other vendors

- **US healthcare (X12 EDI)**: mTLS is standard. Vendors sometimes require a specific `Subject CN` or `Subject OU` that they issue; the DN must match exactly what they registered.
- **Card networks (Visa DPS, Mastercard MDES)**: mTLS plus a signed JWT in the request body. Configure mTLS in the studio; the JWT signing lives in your tool's request definition, not in the connector.
- **UK Open Banking**: FAPI-compliant mTLS with an eIDAS certificate. The certificate itself is standard; the request body signing (JWS) is not currently supported by the studio's connector shell. Talk to your vendor about a proxy that handles JWS.
- **Government APIs (e.g. IRS ACA)**: they issue you a certificate with a specific validity window and often require a re-issuance every year even if your key has not been compromised. Set a calendar reminder 60 days out.
