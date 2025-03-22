/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import { useEffect, useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  useTexture,
  Environment,
  Lightformer,
} from "@react-three/drei";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
  RigidBodyProps,
} from "@react-three/rapier";
import * as THREE from "three";

// Use strings for static assets to avoid import errors with Next.js
const CARD_GLB_PATH = '/models/card.glb';
const LANYARD_PATH = '/lanyard.png';

interface LanyardProps {
  position?: [number, number, number];
  gravity?: [number, number, number];
  fov?: number;
  transparent?: boolean;
}

export default function Lanyard({
  position = [0, 0, 30],
  gravity = [0, -40, 0],
  fov = 20,
  transparent = true,
}: LanyardProps) {
  return (
    <div className="relative z-0 w-full h-screen flex justify-center items-center transform scale-100 origin-center">
      <Canvas
        camera={{ position, fov }}
        gl={{ alpha: transparent }}
        onCreated={({ gl }) =>
          gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)
        }
      >
        <ambientLight intensity={Math.PI} />
        <Physics gravity={gravity} timeStep={1 / 60}>
          <Band />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer
            intensity={2}
            color="white"
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={10}
            color="white"
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}

interface BandProps {
  maxSpeed?: number;
  minSpeed?: number;
  width?: number;
}

function Band({ maxSpeed = 50, minSpeed = 0, width = 0.2 }: BandProps) {
  console.log("Band component rendering");
  
  // Using typed refs for better type safety
  const fixed = useRef<any>(null);
  const j1 = useRef<any>(null);
  const j2 = useRef<any>(null);
  const j3 = useRef<any>(null);
  const card = useRef<any>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Create a normal three.js line points
  const [curvePoints, setCurvePoints] = useState<THREE.Vector3[]>([
    new THREE.Vector3(0, 4, 0),
    new THREE.Vector3(0.5, 4, 0),
    new THREE.Vector3(1, 4, 0),
    new THREE.Vector3(1.5, 4, 0),
  ]);

  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const dir = new THREE.Vector3();

  const segmentProps: any = {
    type: "dynamic" as RigidBodyProps["type"],
    canSleep: true,
    colliders: false,
    angularDamping: 4,
    linearDamping: 4,
  };

  // Use string paths instead of imports for 3D assets
  const { nodes, materials } = useGLTF(CARD_GLB_PATH) as any;
  const texture = useTexture(LANYARD_PATH);
  
  // Configure texture
  useEffect(() => {
    if (texture) {
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(4, 1);
      texture.needsUpdate = true;
    }
  }, [texture]);
  
  // Create a curve with proper initial positions
  const [curve] = useState(() => {
    console.log("Creating curve with initial positions");
    const newCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(1.5, 4, 0), // j3 initial position
      new THREE.Vector3(1, 4, 0),   // j2 initial position
      new THREE.Vector3(0.5, 4, 0), // j1 initial position
      new THREE.Vector3(0, 4, 0),   // fixed initial position
    ]);
    newCurve.curveType = "chordal";
    return newCurve;
  });
  
  const [dragged, drag] = useState<false | THREE.Vector3>(false);
  const [hovered, hover] = useState(false);
  const [isSmall, setIsSmall] = useState(false);

  // Create the tube geometry for the lanyard band
  const tubularSegments = 64;
  const tubeGeometry = useMemo(() => {
    return new THREE.BufferGeometry();
  }, []);
  
  // Update tube geometry based on curve points
  useEffect(() => {
    if (curvePoints.length < 2) return;
    
    const tempCurve = new THREE.CatmullRomCurve3(curvePoints);
    tempCurve.curveType = "chordal";
    
    // Create a tube geometry along the curve
    const tube = new THREE.TubeGeometry(
      tempCurve,
      tubularSegments,
      width / 2, // tube radius
      8, // radial segments
      false // closed
    );
    
    // Copy attributes from tube to our buffer geometry
    tubeGeometry.setAttribute('position', tube.getAttribute('position'));
    tubeGeometry.setAttribute('normal', tube.getAttribute('normal'));
    tubeGeometry.setAttribute('uv', tube.getAttribute('uv'));
    tubeGeometry.setIndex(tube.getIndex());
    tubeGeometry.computeBoundingSphere();
    
  }, [curvePoints, tubeGeometry, width]);

  // Setup window size handler
  useEffect(() => {
    const handleResize = (): void => {
      setIsSmall(window.innerWidth < 1024);
    };
    
    // Initial check
    if (typeof window !== "undefined") {
      setIsSmall(window.innerWidth < 1024);
      console.log("Window width:", window.innerWidth, "isSmall:", isSmall);
    }

    window.addEventListener("resize", handleResize);
    return (): void => window.removeEventListener("resize", handleResize);
  }, [isSmall]);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.45, 0],
  ]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? "grabbing" : "grab";
      return () => {
        document.body.style.cursor = "auto";
      };
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged && typeof dragged !== "boolean") {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }
    
    if (fixed.current && j1.current && j2.current && j3.current) {
      [j1, j2].forEach((ref) => {
        if (!ref.current.lerped)
          ref.current.lerped = new THREE.Vector3().copy(
            ref.current.translation()
          );
        const clampedDistance = Math.max(
          0.1,
          Math.min(1, ref.current.lerped.distanceTo(ref.current.translation()))
        );
        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
        );
      });
      
      // Update curve points based on the physics simulation
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());
      
      // Get more points from the curve for smoother rendering
      try {
        const newPoints = curve.getPoints(tubularSegments);
        setCurvePoints(newPoints);
        
        ang.copy(card.current.angvel());
        rot.copy(card.current.rotation());
        card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
      } catch (error) {
        console.error("Error updating curve points:", error);
      }
    }
  });

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody
          ref={fixed}
          {...segmentProps}
          type={"fixed" as RigidBodyProps["type"]}
        />
        <RigidBody
          position={[0.5, 0, 0]}
          ref={j1}
          {...segmentProps}
          type={"dynamic" as RigidBodyProps["type"]}
        >
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[1, 0, 0]}
          ref={j2}
          {...segmentProps}
          type={"dynamic" as RigidBodyProps["type"]}
        >
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[1.5, 0, 0]}
          ref={j3}
          {...segmentProps}
          type={"dynamic" as RigidBodyProps["type"]}
        >
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[2, 0, 0]}
          ref={card}
          {...segmentProps}
          type={
            dragged
              ? ("kinematicPosition" as RigidBodyProps["type"])
              : ("dynamic" as RigidBodyProps["type"])
          }
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e: any) => {
              e.target.releasePointerCapture(e.pointerId);
              drag(false);
            }}
            onPointerDown={(e: any) => {
              e.target.setPointerCapture(e.pointerId);
              drag(
                new THREE.Vector3()
                  .copy(e.point)
                  .sub(vec.copy(card.current.translation()))
              );
            }}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                map={materials.base.map}
                map-anisotropy={16}
                clearcoat={1}
                clearcoatRoughness={0.15}
                roughness={0.9}
                metalness={0.8}
              />
            </mesh>
            <mesh
              geometry={nodes.clip.geometry}
              material={materials.metal}
              material-roughness={0.3}
            />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      
      {/* Custom textured tube for the lanyard band */}
      <mesh ref={meshRef} renderOrder={10}>
        <primitive object={tubeGeometry} attach="geometry" />
        <meshStandardMaterial 
          attach="material" 
          map={texture} 
          transparent={true} 
          side={THREE.DoubleSide}
          depthTest={false}
        />
      </mesh>
    </>
  );
}
