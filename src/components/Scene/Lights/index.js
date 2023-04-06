import React from "react";
import { useResource } from "react-three-fiber";

export default () => {
  const FakeSphere = () => (
    <mesh>
      <sphereBufferGeometry attach="geometry" args={[0.001, 50, 50]} />
      <meshBasicMaterial attach="material" color={0xfff1ef} />
    </mesh>
  );

  const [ref, pLight1] = useResource();
  const [ref2, pLight2] = useResource();
  const [ref3, pLight3] = useResource();
  const [ref4, pLight4] = useResource();

  return (
    <group>
      <FakeSphere />
      <ambientLight ref={ref2} position={[0, 4, 0]} intensity={0.3} />

      <directionalLight intensity={0.5} position={[0, 0, 0]} color={0xffffff} />

      <pointLight
        ref={ref}
        intensity={0.25}
        position={[-5, 4, -5]}
        color={0xffbe0b}
      >
        {pLight1 && <pointLightHelper args={[pLight1]} />}
      </pointLight>

      <pointLight
        ref={ref2}
        intensity={0.25}
        position={[5, 4, 5]}
        color={0xffbe0b}
      >
        {pLight2 && <pointLightHelper args={[pLight2]} />}
      </pointLight>

      <pointLight
        ref={ref3}
        intensity={1}
        position={[-5, 5, 5]}
        color={0xffbe0b}
      >
        {pLight3 && <pointLightHelper args={[pLight3]} />}
      </pointLight>

      <pointLight
        ref={ref4}
        intensity={1}
        position={[5, 5, -5]}
        color={0xffbe0b}
      >
        {pLight4 && <pointLightHelper args={[pLight4]} />}
      </pointLight>
    </group>
  );
};
