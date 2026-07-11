import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          background: "linear-gradient(135deg, #25D366 0%, #0F7A6A 100%)",
          borderRadius: 40,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 34,
            left: 28,
            width: 124,
            height: 96,
            background: "#ffffff",
            borderRadius: 28,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              background: "linear-gradient(135deg, #128C7E 0%, #075E54 100%)",
              transform: "rotate(45deg)",
              borderRadius: 14,
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            left: 34,
            top: 108,
            width: 46,
            height: 46,
            background: "#ffffff",
            transform: "rotate(28deg)",
            borderTopLeftRadius: 12,
            borderTopRightRadius: 6,
            borderBottomLeftRadius: 6,
          }}
        />
      </div>
    ),
    { ...size },
  );
}
