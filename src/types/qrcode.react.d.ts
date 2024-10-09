declare module 'qrcode.react' {
  import { ComponentType } from 'react';

  interface QRCodeProps {
    value: string;
    size?: number;
    bgColor?: string;
    fgColor?: string;
    level?: 'L' | 'M' | 'Q' | 'H';
    includeMargin?: boolean;
  }

  const QRCode: ComponentType<QRCodeProps>;
  export default QRCode;
}
