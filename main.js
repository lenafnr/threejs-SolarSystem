import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';


// 1. create the scene
const scene = new THREE.Scene({antialias: true});
 
// 2. Add cameras
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 8;

// Create and add stars
const cubeTextureLoader = new THREE.CubeTextureLoader();
scene.background = cubeTextureLoader.load([
    './textures/stars-texture.jpg',
    './textures/stars-texture.jpg',
    './textures/stars-texture.jpg',
    './textures/stars-texture.jpg',
    './textures/stars-texture.jpg',
    './textures/stars-texture.jpg'
]);

const textureLoader = new THREE.TextureLoader();

// 3. Create and add a sphere object
const geometry = new THREE.SphereGeometry(1, 50, 50);
const texture = new THREE.TextureLoader().load('./textures/euvi_aia304_2012_carrington_print.jpg' );
const material = new THREE.MeshBasicMaterial({map: texture});
const sun = new THREE.Mesh(geometry, material);
sun.position.set(0, 0, 0);

const geometry2 = new THREE.SphereGeometry(0.1, 50, 50);
const texture2 = new THREE.TextureLoader().load('./textures/mercury-texture.avif' );
const material2 = new THREE.MeshStandardMaterial( { map:texture2 } );
const mercure = new THREE.Mesh(geometry2, material2);
mercure.position.copy(sun.position);
mercure.position.x += 1.5;

const geometry3 = new THREE.SphereGeometry(0.15, 50, 50);
const texture3 = new THREE.TextureLoader().load('./textures/venus-texture.jpg' );
const material3 = new THREE.MeshStandardMaterial( { map:texture3 } );
const venus = new THREE.Mesh(geometry3, material3);
venus.position.copy(sun.position);
venus.position.x += 1.8;

const geometry4 = new THREE.SphereGeometry(0.16, 50, 50);
const texture4 = new THREE.TextureLoader().load('./textures/earth-texture.jpg' );
const material4 = new THREE.MeshStandardMaterial( { map:texture4 } );
const earth = new THREE.Mesh(geometry4, material4);
earth.position.copy(sun.position);
earth.position.x += 2.2;

const geometry5 = new THREE.SphereGeometry(0.13, 50, 50);
const texture5 = new THREE.TextureLoader().load('./textures/mars-texture.webp' );
const material5 = new THREE.MeshStandardMaterial( { map:texture5 } );
const mars = new THREE.Mesh(geometry5, material5);
mars.position.copy(sun.position);
mars.position.x += 2.6;

const geometry6 = new THREE.SphereGeometry(0.35, 50, 50);
const texture6 = new THREE.TextureLoader().load('./textures/jupyter-texture.jpg' );
const material6 = new THREE.MeshStandardMaterial( { map:texture6 } );
const jupiter = new THREE.Mesh(geometry6, material6);
jupiter.position.copy(sun.position);
jupiter.position.x += 4;

const geometry7 = new THREE.SphereGeometry(0.28, 50, 50);
const texture7 = new THREE.TextureLoader().load('./textures/saturn-texture.jpg' );
const material7 = new THREE.MeshStandardMaterial( { map:texture7 } );
const saturn = new THREE.Mesh(geometry7, material7);
saturn.position.copy(sun.position);
saturn.position.x += 5.05;

const geometry8 = new THREE.SphereGeometry(0.23, 50, 50);
const texture8 = new THREE.TextureLoader().load('./textures/uranus-texture.jpg' );
const material8 = new THREE.MeshStandardMaterial( { map:texture8 } );
const uranus = new THREE.Mesh(geometry8, material8);
uranus.position.copy(sun.position);
uranus.position.x += 5.8;

const geometry9 = new THREE.SphereGeometry(0.19, 50, 50);
const texture9 = new THREE.TextureLoader().load('./textures/neptune-texture.jpg');
const material9 = new THREE.MeshStandardMaterial( {map:texture9});
const neptune = new THREE.Mesh(geometry9, material9);
neptune.position.copy(sun.position);
neptune.position.x += 6.5;

scene.add(sun);
sun.add(mercure);
sun.add(venus);
sun.add(earth);
sun.add(mars);
sun.add(jupiter);
sun.add(saturn);
sun.add(uranus);
sun.add(neptune);

const mercureObj = new THREE.Object3D(); 
mercureObj.add(mercure);
scene.add(mercureObj);

const venusObj = new THREE.Object3D(); 
venusObj.add(venus);
scene.add(venusObj);

const earthObj = new THREE.Object3D(); 
earthObj.add(earth);
scene.add(earthObj);
earth.castShadow = true;
earth.receiveShadow = true;

const marsObj = new THREE.Object3D(); 
marsObj.add(mars);
scene.add(marsObj);

const jupiterObj = new THREE.Object3D(); 
jupiterObj.add(jupiter);
scene.add(jupiterObj);

const saturnObj = new THREE.Object3D(); 
saturnObj.add(saturn);
scene.add(saturnObj);

const uranusObj = new THREE.Object3D(); 
uranusObj.add(uranus);
scene.add(uranusObj);

const neptuneObj = new THREE.Object3D(); 
neptuneObj.add(neptune);
scene.add(neptuneObj);

mercure.castShadow = false;
venus.castShadow = false;
earth.castShadow = false;
mars.castShadow = false;
jupiter.castShadow = false;
saturn.castShadow = false;
uranus.castShadow = false;
neptune.castShadow = false;

mercure.receiveShadow = true;
venus.receiveShadow = true;
earth.receiveShadow = true;
mars.receiveShadow = true;
jupiter.receiveShadow = true;
saturn.receiveShadow = true;
uranus.receiveShadow = true;
neptune.receiveShadow = true;

// 4. Add lighting
const sunLight = new THREE.PointLight(0xffffff, 50, 150);
sunLight.position.set(0, 0, 0);
sunLight.castShadow = true;
scene.add(sunLight);

const ambientLight = new THREE.AmbientLight(0x333333, 3);
scene.add(ambientLight);

sunLight.shadow.mapSize.width = 2048;
sunLight.shadow.mapSize.height = 2048;
sunLight.shadow.camera.near = 0.5;
sunLight.shadow.camera.far = 50;
sunLight.shadow.radius = 8;

//add font 
const loader = new FontLoader();
loader.load('./fonts/Space_Matic_Regular.json', (font) => {
    const textGeometry = new TextGeometry('SOLAR SYSTEM', {
        font: font,
        height: 0.01,
        curveSegments: 12,
        bevelEnabled: false,
        bevelThickness: 0.005,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 4,
    });

    textGeometry.computeBoundingBox();
    textGeometry.center();
    
    const textMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xffffff,  
        metalness: 0.3,
        roughness: 0.5
    });    const textMesh = new THREE.Mesh(textGeometry, textMaterial);

    textMesh.position.set(0, 100, -1000);

    textMesh.castShadow = true;
    textMesh.receiveShadow = true;

    scene.add(textMesh);
});


// 5.Set up the renderer
const renderer = new THREE.WebGLRenderer({antialias:true})
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}
addEventListener('resize', onWindowResize)

const controls = new OrbitControls(camera, renderer.domElement); //to move the scene

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// 6. Animate the scene

function animate() {
    requestAnimationFrame(animate);

    sun.rotation.y -= 0.002;
    mercure.rotation.y -= 0.1;
    venus.rotation.y += 0.0004; 
    earth.rotation.y -= 0.05;
    mars.rotation.y -= 0.03;
    jupiter.rotation.y -= 0.1;
    saturn.rotation.y -= 0.09;
    uranus.rotation.y -= 0.07;
    neptune.rotation.y -= 0.06;

    mercureObj.rotation.y -= 0.08;
    venusObj.rotation.y -= 0.02;
    earthObj.rotation.y -= 0.01;
    marsObj.rotation.y -= 0.005;
    jupiterObj.rotation.y -= 0.0016;
    saturnObj.rotation.y -= 0.0006;
    uranusObj.rotation.y -= 0.0002;
    neptuneObj.rotation.y -= 0.0001;

    controls.update();

    renderer.render(scene, camera);
}

animate();


