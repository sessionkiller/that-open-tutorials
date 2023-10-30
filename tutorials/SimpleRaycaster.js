import * as THREE from "three";
import setUpScene from "../helpers/setUpScene";

// Creating scene
const container = document.getElementById("container");

const { components, scene } = setUpScene(container);

// Adding cubes
const cubeMaterial = new THREE.MeshStandardMaterial({ color: "#6528D7" });
const greenMaterial = new THREE.MeshStandardMaterial({ color: "#BCF124" });
const boxGeometry = new THREE.BoxGeometry(3, 3, 3);
const cube1 = new THREE.Mesh(boxGeometry, cubeMaterial);
const cube2 = new THREE.Mesh(boxGeometry, cubeMaterial);
const cube3 = new THREE.Mesh(boxGeometry, cubeMaterial);
scene.add(cube1, cube2, cube3);
const cubes = [cube1, cube2, cube3];

cube2.position.x = 5;
cube3.position.x = -5;

// Spinning up the cubes
const oneDegree = Math.PI / 180;
function rotateCubes() {
  cube1.rotation.x += oneDegree;
  cube1.rotation.y += oneDegree;
  cube2.rotation.x += oneDegree;
  cube2.rotation.z += oneDegree;
  cube3.rotation.y += oneDegree;
  cube3.rotation.z += oneDegree;
}
components.renderer.onBeforeUpdate.add(rotateCubes);

// Casting rays around
let previousSelection;
window.onmousemove = () => {
  const result = components.raycaster.castRay(cubes);
  if (previousSelection) {
    previousSelection.material = cubeMaterial;
  }
  if (!result) {
    return;
  }
  result.object.material = greenMaterial;
  previousSelection = result.object;
};
