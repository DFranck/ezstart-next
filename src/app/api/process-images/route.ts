import crypto from 'crypto';
import { NextResponse } from 'next/server';
import sharp from 'sharp';

export async function POST(request: Request) {
  console.log('API: Process images');
  const { images } = await request.json();

  if (!images || !Array.isArray(images)) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 },
    );
  }

  const processedImages = await Promise.all(
    images.map(async (image: string, index: number) => {
      try {
        const buffer = Buffer.from(image, 'base64');

        // Convertir l'image en format WebP (par exemple)
        const webpImage = await sharp(buffer)
          .resize(800) // Redimensionner à 800px de large (optionnel)
          .webp()
          .toBuffer();

        const hash = crypto
          .createHash('md5')
          .update(new Uint8Array(webpImage))
          .digest('hex');
        const metadata = await sharp(webpImage).metadata();

        return {
          img: `Image ${index + 1}`,
          hash,
          metadata,
        };
      } catch (error) {
        console.error(
          `Erreur lors du traitement de l'image ${index + 1}`,
          error,
        );
        return { error: `Failed to process image ${index + 1}` };
      }
    }),
  );

  return NextResponse.json({ results: processedImages });
}
