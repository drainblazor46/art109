// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene


//~~~~~~~Import Three.js (also linked to as import map in HTML)~~~~~~
import * as THREE from '../three/build/three.module.js';

// Import add-ons
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


// ~~~~~~~~~~~~~~~~Create scene here~~~~~~~~~~~~~~~~

let scene, camera, renderer, cube;

function init() {

scene = new THREE.Scene();

const light = new THREE.DirectionalLight(0xffffff, 3);
light.position.set(1,1,3);
scene.add(light);

const helper = new THREE.DirectionalLight(light, 5);
scene.add(helper);
camera = new THREE.PerspectiveCamera
(75, 
    window.innerWidth / window.innerHeight, 
    0.1, 
    1000);

renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.CapsuleGeometry( 2, 2, 2 );
// const material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );

// const texture = new THREE.TextureLoader().load('textures/Ice_Displacement.jpg');
// const material = new THREE.MeshBasicMaterial( { map: texture } );
// cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

camera.position.z = 5; 
}

function animate() {
    requestAnimationFrame(animate);

    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    // renderer.setsize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();

// ~~~~~~~~~~~~~~~~ Initiate add-ons ~~~~~~~~~~~~~~~~
const controls = new OrbitControls(camera, renderer.domElement);
const loader = new GLTFLoader(); // to load 3d models



loader.load('assets/necklace4.gltf'), function (gltf) {
    const necklace = gltf.scene;
    scene.add(necklace);
    necklace.scale.set(2, 2, 2);
}

// →→→→→→ Follow next steps in tutorial: 
// // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene


