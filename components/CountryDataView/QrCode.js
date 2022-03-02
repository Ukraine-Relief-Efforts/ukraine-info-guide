import { useRef, useEffect } from "react";
import qrcode from "qrcode";

const QrCode = ({ url }) => {
  const ref = useRef();

  useEffect(() => {
    if (!ref.current)
      return;

    qrcode.toCanvas(
      ref.current,
      url,
      {
        margin: 1,
        scale: 3,
      },
      (error) => error && console.log("Error generating QR code:", error),
    );
  }, [ref]);

  return (
    <canvas ref={ref} />
  );
}

export default QrCode;
