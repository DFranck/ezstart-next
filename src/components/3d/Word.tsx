// src/components/3d/Word.tsx
'use client';

import Letter from './Letter';

// import Letter from './Letter';

type WordProps = {
  text: string;
  position?: [number, number, number];
  size?: number; // Utiliser size au lieu de fontSize
  color?: string;
  letterSpacing?: number; // Espacement entre les lettres
};

export default function Word({
  text,
  position = [0, 0, 0],
  size = 2, // Taille des lettres
  color = 'white',
  letterSpacing = 4, // Valeur par défaut de l'espacement entre les lettres
}: WordProps) {
  const totalWidth = (text.length - 1) * letterSpacing;
  console.log(text);

  return (
    <>
      {text.split('').map((char, index) => (
        <Letter
          key={index}
          letter={char}
          position={[
            position[0] - totalWidth / 2 + index * letterSpacing,
            position[1],
            position[2],
          ]}
          size={size} // Utiliser size au lieu de fontSize
          color={color}
        />
      ))}
    </>
  );
}
