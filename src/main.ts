import * as THREE from 'three';

const scene : THREE.Scene = new THREE.Scene();
const camera : THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
  75, window.innerWidth / window.innerHeight, 0.1, 1000
);
const renderer :THREE.WebGLRenderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry : THREE.BoxGeometry = new THREE.BoxGeometry();
const edge : THREE.EdgesGeometry = new THREE.EdgesGeometry(geometry);
const line : THREE.LineSegments = new THREE.LineSegments(edge);


const cube : THREE.Mesh = new THREE.Mesh(
  geometry,

  new THREE.MeshBasicMaterial({ color: 0x0000FF })
);
//scene.add(cube);

camera.position.z = 2;


//cube.rotation.x = 120;
cube.rotation.y = 120;
cube.rotation.z = 120;
scene.add(line);
renderer.render(scene,camera);


//animate();