declare module 'qrcode' {
  interface QRCodeOptions {
    width?: number;
    margin?: number;
    scale?: number;
    color?: {
      dark?: string;
      light?: string;
    };
    errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H';
    type?: 'svg' | 'png';
  }

  export function toDataURL(
    text: string,
    options?: QRCodeOptions,
  ): Promise<string>;

  export function toString(
    text: string,
    options?: QRCodeOptions,
  ): Promise<string>;
}
