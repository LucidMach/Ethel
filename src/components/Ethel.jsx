import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

export function Model({ stage }) {
  const mesh = useRef();
  const { nodes, materials } = useGLTF("/Ethel.glb");

  useFrame((state) => {
    // console.log(mesh.current.position);
    state.camera.lookAt(mesh.current.position);
    if (stage === 0) {
      state.camera.position.lerp(new Vector3(0, 1, 7), 0.01);
    }
    if (stage === 1) {
      state.camera.position.lerp(new Vector3(0, -4, 5), 0.01);
    }
    if (stage === 2) {
      state.camera.position.lerp(new Vector3(0, -1.5, 6), 0.01);
    }
    if (stage === 3) {
      state.camera.position.lerp(new Vector3(-5, 1, 7), 0.01);
    }
    if (stage === 4) {
      state.camera.position.lerp(new Vector3(0, -4, 5), 0.01);
      mesh.current.rotation.set(0, mesh.current.rotation.y + 0.01, 0);
    }
  });

  return (
    <group ref={mesh} dispose={null}>
      <group
        position={[0, 0, 0]}
        rotation={[3.14 / 8, 0, 0]}
        scale={[4.865, 3.034, 2.261]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials["GogoYellow.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_1.geometry}
          material={materials["ˀlack.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_2.geometry}
          material={materials["Material.093"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_3.geometry}
          material={materials["Material.094"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_4.geometry}
          material={materials["Material.095"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_5.geometry}
          material={materials["Material.096"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_6.geometry}
          material={materials["Material.097"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_7.geometry}
          material={materials["Material.098"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_8.geometry}
          material={materials["Material.099"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_9.geometry}
          material={materials["Material.100"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_10.geometry}
          material={materials["Material.103"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_11.geometry}
          material={materials["Material.104"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_12.geometry}
          material={materials["Material.105"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_13.geometry}
          material={materials["Material.106"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_14.geometry}
          material={materials["Material.107"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_15.geometry}
          material={materials["Material.108"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_16.geometry}
          material={materials["Material.109"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_17.geometry}
          material={materials["Material.110"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_18.geometry}
          material={materials["Material.113"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_19.geometry}
          material={materials["Material.114"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_20.geometry}
          material={materials["Material.115"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_21.geometry}
          material={materials["Material.116"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_22.geometry}
          material={materials["Material.117"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_23.geometry}
          material={materials["Material.118"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_24.geometry}
          material={materials["Material.119"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_25.geometry}
          material={materials["Material.120"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_26.geometry}
          material={materials["Material.121"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Ethel.glb");
