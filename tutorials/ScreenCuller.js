import * as THREE from "three";
import * as OBC from "openbim-components";
import setUpScene from "../helpers/setUpScene";

// Creating scene
const container = document.getElementById("container");

const { components, scene } = setUpScene(container);

// Creating Screen Culler for optimization

const culler = new OBC.ScreenCuller(components);
culler.renderDebugFrame = true;
const debugFrame = culler.renderer.domElement;
document.body.appendChild(debugFrame);
debugFrame.style.position = "fixed";
debugFrame.style.left = "0";
debugFrame.style.bottom = "0";
debugFrame.style.visibility = "collapse";

// Adding a lot of 3D Objects
function getRandomNumber(limit) {
  return Math.random() * limit;
}

const cubes = [];
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshLambertMaterial({ color: "#6528D7" });

function resetCubes() {
  for (const cube of cubes) {
    cube.removeFromParent();
  }
  cubes.length = 0;
}

function regenerateCubes() {
  resetCubes();
  for (let i = 0; i < 300; i++) {
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = getRandomNumber(10);
    cube.position.y = getRandomNumber(10);
    cube.position.z = getRandomNumber(10);
    cube.updateMatrix();
    scene.add(cube);
    culler.add(cube);
    cubes.push(cube);
  }
}

regenerateCubes();

// Updating the view when the camera stops moving
culler.needsUpdate = true;
components.camera.controls.addEventListener("controlend", () => {
  culler.needsUpdate = true;
});
