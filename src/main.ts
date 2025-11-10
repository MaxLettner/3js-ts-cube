import * as THREE from 'three';

const scene : THREE.Scene = new THREE.Scene();
const renderer :THREE.WebGLRenderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const aspect : number = window.innerWidth / window.innerHeight;
const size :number = 1;

const camera : THREE.OrthographicCamera = new THREE.OrthographicCamera(
  -size * aspect,  //l
  size * aspect,   //r
  size,            //o
  -size,           //u
  0.1,             
  1000             
);


const geometry : THREE.BoxGeometry = new THREE.BoxGeometry(); //creates a cube-like structure
const edge : THREE.EdgesGeometry = new THREE.EdgesGeometry(geometry); //gets the edges of this cube
const line : THREE.LineSegments = new THREE.LineSegments(edge); // draws lines on that edges

scene.add(line);

camera.position.set(2, 1, 2);
camera.lookAt(0, 0, 0);

renderer.render(scene,camera);