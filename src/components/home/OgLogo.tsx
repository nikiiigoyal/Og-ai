/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three'

export default function OgLogo () {
    const containerRef = useRef<HTMLDivElement>(null);
  // Fix: Add proper type for Three.js Group
    const oShapeRef = useRef<THREE.Group>(null);
  const gShapeRef = useRef<THREE.Group>(null);
    const [isHovered ,setIsHovered] = useState(false)
   useEffect(() => {
    if (!containerRef.current) return;
  // Scene
    const scene = new THREE.Scene();
 
    // camera

    const camera = new THREE.PerspectiveCamera (50,                             
    window.innerWidth / window.innerHeight,  
    0.1,                            
    100)
    camera.position.z = 8; 
    
    // renderer
    const renderer = new THREE.WebGLRenderer({
        antialias : true,
        alpha: true
    })
    // creating material
     const createGlassMaterial = () => {
      return new THREE.MeshPhongMaterial({
        color: 0xD896F0,      // Purple-pink color
        shininess: 100,       // Glossy
        transparent: true,
        opacity: 0.95,
        side: THREE.DoubleSide
      });
    };
    //    creating shapes
const createGShape = () => {
const gGroup = new THREE.Group();
const material = createGlassMaterial();

const ringGeometry = new THREE.TorusGeometry(
     1.5,              // Radius of the ring
    0.35,             // Thickness of the tube
    32,               // Segments around tube (smoothness)
    100,              // Segments around ring
  Math.PI * 1.5     // How much of the circle (1.5 = 270 degrees = C shape)
)
const ring = new THREE.Mesh(ringGeometry,material)
gGroup.add(ring);
const lineGeometry = new THREE.CylinderGeometry(
    0.35,0.35,1.2,32

)
const line = new THREE.Mesh(lineGeometry,material)
line.rotation.z = Math.PI / 2
line.position.set(0.9,-1.5, 0)
gGroup.add(line)
return gGroup;
}
//  CREATE TWO G SHAPES and ADD TO SCENE
    // First G (rotated to look like O)
    const oShape = createGShape();
    oShape.position.x = -2.5;  // Position on LEFT
    oShape.rotation.z = Math.PI / 4;  // Rotate to hide the line
    scene.add(oShape);  // IMPORTANT: Add to scene
    oShapeRef.current = oShape;
    

    // Second G (looks like actual G)
    const gShape = createGShape();
    gShape.position.x = 2.5;  // Position on RIGHT
    scene.add(gShape);  // IMPORTANT: Add to scene
    gShapeRef.current = gShape;
   
    // renderloop
    const renderloop =  () => {
        requestAnimationFrame(renderloop)
renderer.render(scene,camera)
    }
    renderloop();

    return () => {
        if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    }

   },[isHovered])


    
    return (
        <div ref={containerRef}
        style={{
        width: '100%',
        height: '600px',
       
        
       
      }}>

        </div>
    )
}