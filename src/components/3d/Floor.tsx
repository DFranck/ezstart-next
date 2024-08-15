const Floor = () => {
  // const { y, x } = useControls({
  //   x: {
  //     value: 0,
  //     step: 0.01,
  //     max: 10,
  //     min: -10,
  //   },
  //   y: {
  //     value: 0,
  //     step: 0.01,
  //     max: 10,
  //     min: -10,
  //   },
  // });
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} scale={200} position-y={-3.1}>
      <planeGeometry />
      <meshBasicMaterial />
    </mesh>
  );
};

export default Floor;
