import Image from 'next/image';
import QRCode from 'qrcode';
import { useEffect, useState } from 'react';

const QRCodeGenerator = () => {
  const [inputText, setInputText] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [size, setSize] = useState(200);
  const [bgColor, setBgColor] = useState('#ffffff');
  const [fgColor, setFgColor] = useState('#000000');
  const [errorCorrectionLevel, setErrorCorrectionLevel] = useState<
    'L' | 'M' | 'Q' | 'H'
  >('M');
  const [format, setFormat] = useState<'png' | 'svg'>('png');
  const [isClient, setIsClient] = useState(false); // Ajout de ce state

  useEffect(() => {
    setIsClient(true); // On indique que le composant est maintenant rendu côté client
  }, []);

  useEffect(() => {
    if (inputText) {
      const options = {
        width: size,
        color: {
          dark: fgColor,
          light: bgColor,
        },
        errorCorrectionLevel,
      };

      if (format === 'png') {
        QRCode.toDataURL(inputText, options)
          .then((url: string) => setQrCodeUrl(url))
          .catch((err: Error) => console.error(err));
      } else if (format === 'svg') {
        QRCode.toString(inputText, { ...options, type: 'svg' })
          .then((url: string) => {
            const blob = new Blob([url], { type: 'image/svg+xml' });
            const svgUrl = URL.createObjectURL(blob);
            setQrCodeUrl(svgUrl);
          })
          .catch((err: Error) => console.error(err));
      }
    }
  }, [inputText, size, bgColor, fgColor, errorCorrectionLevel, format]);

  const downloadQRCode = () => {
    const link = document.createElement('a');
    link.href = qrCodeUrl;
    link.download = `qrcode.${format}`;
    link.click();
  };

  if (!isClient) return null; // N'affiche rien tant que le composant n'est pas rendu côté client

  return (
    <div className="flex flex-col items-center space-y-6 md:p-8 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">QR Code Generator</h1>

      <input
        type="text"
        placeholder="Enter text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="p-2 border rounded-md w-full max-w-md"
      />

      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Size max 1000</label>
          <input
            type="number"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            min={50}
            max={1000}
            className="p-2 border rounded-md"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-1">Error Correction Level</label>
          <select
            value={errorCorrectionLevel}
            onChange={(e) =>
              setErrorCorrectionLevel(e.target.value as 'L' | 'M' | 'Q' | 'H')
            }
            className="p-2 border rounded-md"
          >
            <option value="L">Low (L)</option>
            <option value="M">Medium (M)</option>
            <option value="Q">Quartile (Q)</option>
            <option value="H">High (H)</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-1">Foreground Color</label>
          <input
            type="color"
            value={fgColor}
            onChange={(e) => setFgColor(e.target.value)}
            className="bg-transparent w-full h-10"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-1">Background Color</label>
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
            className="bg-transparent w-full h-10"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-1">Format</label>
          <select
            value={format}
            onChange={(e) => setFormat(e.target.value as 'png' | 'svg')}
            className="p-2 border rounded-md"
          >
            <option value="png">PNG</option>
            <option value="svg">SVG</option>
          </select>
        </div>
      </div>

      {qrCodeUrl && (
        <div className="flex flex-col items-center space-y-4 ">
          {format === 'png' ? (
            <Image
              src={qrCodeUrl}
              alt="QR Code"
              className=" max-w-full"
              width={size}
              height={size}
              aria-label="QR Code"
            />
          ) : (
            <object
              data={qrCodeUrl}
              type="image/svg+xml"
              className=" max-w-full"
              aria-label="QR Code"
            />
          )}
          <button
            onClick={downloadQRCode}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Download QR Code
          </button>
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;
