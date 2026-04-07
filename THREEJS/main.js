import * as THREE from 'three';

const scene = new THREE.Scene();

// A: The Geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);

// B: The Material
const material = new THREE.MeshBasicMaterial({color: 0x800080});

// C: Put Together
const mesh = new THREE.Mesh(geometry, material);

// D: ADD TO THE SCENE
scene.add(mesh);

const sizes = {
    width: 800,
    height: 600,
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
scene.add(camera);

// Access the canvas
const canvas = document.querySelector('canvas#three-ex');

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

// Gives it the size
renderer.setSize(sizes.width, sizes.height);

// Move camera
camera.position.z = 3;


// Renderer
renderer.render(scene, camera);
