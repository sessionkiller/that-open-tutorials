import * as THREE from "three";
import setUpScene from "../helpers/setUpScene";

const container = document.getElementById("container");

const { components, scene } = setUpScene(container);

//Adiing 3D Cube
const boxMaterial = new THREE.MeshStandardMaterial({ color: "#6528D7" });
const boxGeometry = new THREE.BoxGeometry(3, 3, 3);
const cube = new THREE.Mesh(boxGeometry, boxMaterial);
cube.position.set(0, 1.5, 0);
scene.add(cube);

// components.dispose();
