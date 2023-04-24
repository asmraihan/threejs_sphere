import {  OrbitControls, Sphere } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import { TextureLoader } from "three";





function Box(props) {
  const texture = useLoader(TextureLoader,('/textures/NormalMap.png'))
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  useFrame((state, delta) => (ref.current.rotation.z += delta)+(ref.current.rotation.x += delta))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh {...props} ref={ref}>
      <sphereGeometry args={[2, 100, 100]} />
      <meshStandardMaterial 
     
      roughness={0.2}
      metalness={0.7}
      // roughnessMap={texture}
      normalMap={texture}
      color={"#292929"}
      attach={"material"}
      distort={0.5}
      speed={0.5}/>
    </mesh>
  )
}

export default function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight  color="#39b5fb" position={[-1.02, -1.3, -1.1]} intensity={6.8} />
      <pointLight color="#ae2aff" position={[1.1, 1, -0.31]} intensity={10} />
      <Box />
      <OrbitControls />
    </Canvas>
  )
}








/* const SphereModel = () => {
  const texture = useLoader(TextureLoader,('/textures/NormalMap.png'))
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={2} />
      <pointLight  color="#39b5fb" position={[1, 1.1, -0.31]} intensity={30} />
      <pointLight color="#ae2aff" position={[-1.3, -1.02, -1.1]} intensity={5} />
     <mesh rotation-x={1}>
     <Sphere args={[1, 100, 200]} scale={2}>
      
        <meshStandardMaterial
          roughness={0.2}
          metalness={0.7}
          // roughnessMap={texture}
          normalMap={texture}
          color={"#292929"}
          attach={"material"}
          distort={0}
          speed={0.5}
        />
      </Sphere>
     </mesh>
    </Canvas>
  );
};

export default SphereModel; */
