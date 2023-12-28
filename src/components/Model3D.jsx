import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model3D = () => {

  const mountRef = useRef(null);

  useEffect(() => {
    //Data from the canvas
    const currentRef = mountRef.current;
    const { clientWidth: width, clientHeight: height } = currentRef;

    //Scene, camera, renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(25, width / height, 0.1, 100);
    scene.add(camera);

    scene.background = new THREE.Color('#ffffff')

    camera.position.set(40, 20, 0);
    camera.lookAt(new THREE.Vector3());

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    currentRef.appendChild(renderer.domElement);

    //OrbitControls
    const orbitControls = new OrbitControls(camera, renderer.domElement);
    orbitControls.enableDamping = true;
    orbitControls.autoRotate = true
    orbitControls.autoRotateSpeed = 10
    orbitControls.enableZoom = false;
    orbitControls.enablePan = false;
    orbitControls.enableRotate = true;


    //Resize canvas
    const resize = () => {
      renderer.setSize(currentRef.clientWidth, currentRef.clientHeight);
      camera.aspect = currentRef.clientWidth / currentRef.clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", resize);

    // env map

    // const cubeTextureLoader = new THREE.CubeTextureLoader()
    // const evp = cubeTextureLoader.load([
    //   "/envMap/px.jpg",
    //   "/envMap/nx.jpg",
    //   "/envMap/py.jpg",
    //   "/envMap/ny.jpg",
    //   "/envMap/pz.jpg",
    //   "/envMap/nz.jpg",
    // ]);

    // Loader

    const sneaker = new THREE.Group()

    const gltfLoader = new GLTFLoader()
    gltfLoader.load('/sneakers/scene.gltf', (gltf) => {
      // Procesa el modelo glTF cargado aquí
      // gltf.scene.traverse((child) => {
      //   if (child.isMesh) {
      //     child.material.envMap = evp;
      //   }
      // });

      while (gltf.scene.children.length) {
        gltf.scene.children[0].scale.set(60, 60, 60)
        sneaker.add(gltf.scene.children[0])
      }
      console.log(gltf)

      scene.add(sneaker)
    })

    //Animate the scene
    const animate = () => {
      orbitControls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Light

    const ambientalLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientalLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    return () => {
      window.removeEventListener("resize", resize);
      currentRef.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      className='Contenedor3D'
      ref={mountRef}
      style={{ width: "100%", height: "100%" }}
    ></div>
  );
}

export default Model3D