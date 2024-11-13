import Image from 'next/image';
import { useState } from 'react';

interface ProcessedImage {
  img: string;
  hash: string;
  similarityScore?: number;
  qualityScore?: number;
  dimensions: {
    width: number;
    height: number;
  };
}

const ImageProcessor = () => {
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [processedImages, setProcessedImages] = useState<ProcessedImage[]>([]);
  const [similarImages, setSimilarImages] = useState<ProcessedImage[]>([]);
  const [lowQualityImages, setLowQualityImages] = useState<ProcessedImage[]>(
    [],
  );
  const [smallSizeImages, setSmallSizeImages] = useState<ProcessedImage[]>([]);
  console.log(similarImages, lowQualityImages, smallSizeImages);
  // Define the thresholds
  const similarityThreshold = 0.8; // Similarity score must be lower than this value to be considered similar
  const qualityThreshold = 50; // Quality score must be lower than this to be considered low quality
  const sizeThreshold = 800; // Images smaller than this value in width or height are considered small

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const uploadedImages = Array.from(event.target.files);
      setImages(uploadedImages);

      // Generate image previews
      const previews = uploadedImages.map((image) =>
        URL.createObjectURL(image),
      );
      setImagePreviews(previews);
    }
  };

  const processImages = async () => {
    const base64Images = await Promise.all(
      images.map(async (image) => {
        const imgBuffer = await image.arrayBuffer();
        return Buffer.from(imgBuffer).toString('base64');
      }),
    );

    const response = await fetch('/api/process-images', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ images: base64Images }),
    });

    if (!response.ok) {
      console.error(
        'Erreur lors du traitement des images:',
        response.statusText,
      );
      return;
    }

    const data = await response.json();
    setProcessedImages(data.results);
    categorizeImages(data.results);
  };

  const categorizeImages = (images: ProcessedImage[]) => {
    const similar: ProcessedImage[] = [];
    const lowQuality: ProcessedImage[] = [];
    const smallSize: ProcessedImage[] = [];

    images.forEach((img) => {
      // Ensure that similarityScore, qualityScore, and dimensions exist
      if (
        img.similarityScore !== undefined &&
        img.similarityScore < similarityThreshold
      ) {
        similar.push(img);
      }

      if (
        img.qualityScore !== undefined &&
        img.qualityScore < qualityThreshold
      ) {
        lowQuality.push(img);
      }

      if (
        img.dimensions &&
        (img.dimensions.width < sizeThreshold ||
          img.dimensions.height < sizeThreshold)
      ) {
        smallSize.push(img);
      }
    });

    setSimilarImages(similar);
    setLowQualityImages(lowQuality);
    setSmallSizeImages(smallSize);
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageUpload}
      />
      <button onClick={processImages}>Process Images</button>

      {imagePreviews.length > 0 && (
        <div className="bg-red-500 flex flex-wrap">
          {imagePreviews.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Preview ${index}`}
              width={100}
              height={100}
              className="h-20 w-20 cursor-pointer hover:scale-150 object-cover"
            />
          ))}
        </div>
      )}

      {processedImages.length > 0 && (
        <div>
          <h3>Processed Images:</h3>
          {processedImages.map((data, index) => (
            <div key={index}>
              <p>Image: {data.img}</p>
              <p>Hash: {data.hash}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageProcessor;
