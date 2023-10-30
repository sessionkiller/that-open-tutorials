import * as OBC from "openbim-components";

function setUpScene(container) {
  const components = new OBC.Components();
  components.scene = new OBC.SimpleScene(components);
  components.renderer = new OBC.SimpleRenderer(components, container);
  components.camera = new OBC.SimpleCamera(components);
  components.raycaster = new OBC.SimpleRaycaster(components);

  components.init();

  const scene = components.scene.get();

  // Camera
  components.camera.controls.setLookAt(10, 10, 10, 0, 0, 0);

  //Grid
  const grid = new OBC.SimpleGrid(components);

  //Lighting
  components.scene.setup();

  return { components, scene };
}

export default setUpScene;
