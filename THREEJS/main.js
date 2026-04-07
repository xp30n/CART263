// Importing a library reference
import * as THREE from 'three';

const scene = new THREE.Scene();

// A: The Geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);

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

// TURN ON AXES HELPER
// https://threejs.org/docs/?q=Axes#AxesHelper
const axesHelper = new THREE.AxesHelper(1);
scene.add(axesHelper);

// Move it
axesHelper.position.x = -1;
axesHelper.position.y = -1;
// ! Materials are used to put a color on each visible pixel of the geometries

const material = new THREE.MeshBasicMaterial();

const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    material
)

sphere.position.x = -1.5;

const plane = new THREE.Mesh (
    new THREE.PlaneGeometry(1, 1),
    material
)

const torus = new THREE.Mesh (
    new THREE.TorusGeometry(0.5, 0.3, 16, 32),
    material
)

torus.position.x = -1.5;

scene.add(sphere, plane, torus)

// Renderer
renderer.render(scene, camera);
