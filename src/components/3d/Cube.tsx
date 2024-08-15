'use client';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Mesh } from 'three';
const Cube = () => {
  const [hover, setHover] = useState(false);
  const boxRef = useRef<Mesh>(null);
  useFrame(() => {
    if (!boxRef.current) return;
    boxRef.current.position.y = Math.sin(Date.now() * 0.001) * 2;
    boxRef.current.rotation.y = Date.now() * 0.001;
  });
  return (
    <mesh
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      ref={boxRef}
    >
      <boxGeometry />
      <meshBasicMaterial color={hover ? 'hotpink' : 'orange'} />
    </mesh>
  );
};

export default Cube;
