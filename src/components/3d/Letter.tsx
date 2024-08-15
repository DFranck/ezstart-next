// src/components/3d/Letter.tsx
'use client';

import { Text, Text3D } from '@react-three/drei';
import font from '../../../public/fonts/Inter_Regular.json';
type LetterProps = {
  letter: string;
  position: [number, number, number];
  size?: number;
  color?: string;
  depth?: number;
  anchorX?: 'center' | 'left' | 'right' | number;
  anchorY?:
    | 'middle'
    | 'top'
    | 'top-baseline'
    | 'bottom-baseline'
    | 'bottom'
    | number;
};

export default function Letter({
  letter,
  position,
  size = 2,
  color = 'white',
  depth = 0.5,
  anchorX = 'center',
  anchorY = 'middle',
  ...props
}: LetterProps) {
  return (
    <>
      <Text
        position={position}
        fontSize={size}
        color={color}
        anchorX={anchorX}
        anchorY={anchorY}
        {...props}
      >
        {letter}
      </Text>
      <Text3D
        font={font}
        position={position}
        size={size}
        height={depth} // Définir la profondeur
        curveSegments={12} // Optionnel, pour la qualité des courbes
        bevelEnabled={true} // Optionnel, pour ajouter un biseau
        bevelThickness={0.02} // Optionnel, épaisseur du biseau
        bevelSize={0.05} // Optionnel, taille du biseau
        bevelOffset={0} // Optionnel, décalage du biseau
        bevelSegments={3} // Optionnel, segments du biseau
        {...props}
      >
        <meshStandardMaterial color={color} />
        {letter}
      </Text3D>
    </>
  );
}
