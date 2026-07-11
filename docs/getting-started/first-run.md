# First run

Boot the app locally and confirm it can reach Meta. This page is for people running the app on their own machine. If someone else hosts it for you, skip to [Signing in](sign-in.md).

## What you'll do

- Clone the repository and install dependencies.
- Configure `.env.local`.
- Start the dev server on port 3000.
- Sign in with your access token.

## Step-by-step

1. Clone the repository and change into it.

   ```bash
   git clone <your fork or upstream remote>
   cd WABIZAgent
   ```

2. Install dependencies.

   ```bash
   npm install
   ```

3. Copy `.env.example` to `.env.local` and edit the values.

   ```bash
   cp .env.example .env.local
   ```

   Set `SESSION_SECRET` to a random 32-character string. Generate one with:

   ```bash
   openssl rand -hex 32
   ```

   Leave `META_API_BASE` and `GRAPH_API_BASE` at their defaults unless Meta has moved the endpoints. See [Prerequisites](prerequisites.md) for the full list.

4. Start the dev server.

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000). You will be redirected to the login screen.

6. Paste your access token. If verification succeeds you land on the home page.

## Available scripts

- `npm run dev`, dev server on port 3000.
- `npm run build`, production build. If the build fails the first time with a `PageNotFoundError: /_document` message, just re-run it; it is a transient framework issue.
- `npm run typecheck`, TypeScript check without emitting files.
- `npm run deploy:start` or `sh start.sh`, one-shot install plus build plus start for AppSail.

## Troubleshooting

- **`npm run build` fails with `PageNotFoundError: /_document`**, this is a known transient. Re-run `npm run build` and it will succeed.
- **Session secret rejected**, generate a longer one with `openssl rand -hex 32`.
- **Login fails with an authentication error**, review the scopes listed in [Generating an access token](access-token.md).

## Where to go next

- [Signing in](sign-in.md) for a walk through the login screen.
- [Picking a business and phone](pick-business-and-phone.md) to reach the dashboard.
