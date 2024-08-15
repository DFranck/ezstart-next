import { PerspectiveCamera as DreiPerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { PerspectiveCamera as ThreePerspectiveCamera, Vector3 } from 'three';

const Camera2 = () => {
  const ref = useRef<ThreePerspectiveCamera>(null);

  useFrame(({ mouse }) => {
    if (!ref.current) return;
    ref.current.position.x = mouse.x;
    ref.current.position.y = mouse.y;

    const horizon = new Vector3(0, ref.current.position.y, -1);
    ref.current.lookAt(horizon);
  });

  return (
    <DreiPerspectiveCamera
      makeDefault
      ref={ref}
      fov={50}
      position={[0, 1.5, 2.9]}
    />
  );
};

export default Camera2;
