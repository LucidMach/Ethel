import { useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Group, Vector3, type Object3DEventMap } from "three";
import type { GLTF } from "three-stdlib";

interface props {
  stage: number;
}

type GLTFResult = GLTF & {
  nodes: {
    Plane001: THREE.Mesh;
    Plane001_1: THREE.Mesh;
    Plane001_2: THREE.Mesh;
    Plane001_3: THREE.Mesh;
    Plane001_4: THREE.Mesh;
    Plane001_5: THREE.Mesh;
    Plane001_6: THREE.Mesh;
    Plane001_7: THREE.Mesh;
    Plane001_8: THREE.Mesh;
    Plane001_9: THREE.Mesh;
    Plane001_10: THREE.Mesh;
    Plane001_11: THREE.Mesh;
    Plane001_12: THREE.Mesh;
    Plane001_13: THREE.Mesh;
    Plane001_14: THREE.Mesh;
    Plane001_15: THREE.Mesh;
    Plane001_16: THREE.Mesh;
    Plane001_17: THREE.Mesh;
    Plane001_18: THREE.Mesh;
    Plane001_19: THREE.Mesh;
    Plane001_20: THREE.Mesh;
    Plane001_21: THREE.Mesh;
    Plane001_22: THREE.Mesh;
    Plane001_23: THREE.Mesh;
    Plane001_24: THREE.Mesh;
    Plane001_25: THREE.Mesh;
    Plane001_26: THREE.Mesh;
  };
  materials: {
    ["GogoYellow.001"]: THREE.MeshPhysicalMaterial;
    ["ˀlack.001"]: THREE.MeshStandardMaterial;
    ["Material.093"]: THREE.MeshStandardMaterial;
    ["Material.094"]: THREE.MeshStandardMaterial;
    ["Material.095"]: THREE.MeshStandardMaterial;
    ["Material.096"]: THREE.MeshStandardMaterial;
    ["Material.097"]: THREE.MeshStandardMaterial;
    ["Material.098"]: THREE.MeshStandardMaterial;
    ["Material.099"]: THREE.MeshStandardMaterial;
    ["Material.100"]: THREE.MeshStandardMaterial;
    ["Material.103"]: THREE.MeshStandardMaterial;
    ["Material.104"]: THREE.MeshStandardMaterial;
    ["Material.105"]: THREE.MeshStandardMaterial;
    ["Material.106"]: THREE.MeshStandardMaterial;
    ["Material.107"]: THREE.MeshStandardMaterial;
    ["Material.108"]: THREE.MeshStandardMaterial;
    ["Material.109"]: THREE.MeshStandardMaterial;
    ["Material.110"]: THREE.MeshStandardMaterial;
    ["Material.113"]: THREE.MeshStandardMaterial;
    ["Material.114"]: THREE.MeshStandardMaterial;
    ["Material.115"]: THREE.MeshStandardMaterial;
    ["Material.116"]: THREE.MeshStandardMaterial;
    ["Material.117"]: THREE.MeshStandardMaterial;
    ["Material.118"]: THREE.MeshStandardMaterial;
    ["Material.119"]: THREE.MeshStandardMaterial;
    ["Material.120"]: THREE.MeshStandardMaterial;
    ["Material.121"]: THREE.MeshStandardMaterial;
  };
};

const Model: React.FC<props> = ({ stage }) => {
  const mesh = useRef<Group<Object3DEventMap>>(null);
  const { nodes, materials } = useGLTF("/Ethel.glb") as GLTFResult;

  const ang0 = useMemo(() => new Vector3(0, 1, 7), []);
  const ang1 = useMemo(() => new Vector3(0, -4, 5), []);
  const ang2 = useMemo(() => new Vector3(0, -9, 6), []);
  const ang3 = useMemo(() => new Vector3(-5, 1, 7), []);
  const ang4 = useMemo(() => new Vector3(0, -2, 6), []);

  useFrame(({ camera, pointer }) => {
    if (mesh.current) {
      // console.log(mesh.current.position);
      camera.lookAt(mesh.current.position);

      if (stage === 0) {
        camera.position.lerp(ang0, 0.02);
      }
      if (stage === 1) {
        camera.position.lerp(ang1, 0.02);
      }
      if (stage === 2) {
        camera.position.lerp(ang2, 0.02);
      }
      if (stage === 3) {
        camera.position.lerp(ang3, 0.02);
      }
      if (stage === 4) {
        mesh.current.rotation.set(
          -pointer.y / 2,
          mesh.current.rotation.y + 0.02,
          // 0,
          0
        );
      }
      if (stage === 5) {
        camera.position.lerp(ang4, 0.02);
        mesh.current.lookAt(pointer.x, pointer.y, 1);
      }
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
};

useGLTF.preload("/Ethel.glb");
export default Model;
