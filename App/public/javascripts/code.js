//Renderer creates the canvas and WebGL context for the app which need a camera and scene passed to it in order to be drawn on
var renderer = new THREE.WebGLRenderer({canvas: document.getElementById('c'), antialias: true});
//Why can't I access and change the canvas' background color'
// document.body.appendChild(renderer.domElement);
// console.log(renderer.domElement);
renderer.setClearColor(0x00ff00);
renderer.setPixelRatio(window.devicePixelRation);
renderer.setSize(window.innerWidth, window.innerHeight);

//Camera there different kinds of caremars                                        near  far for clipping
var camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 0.1, 3000); 
//camera.position.set(0, 0, 0);

//Scene
var scene = new THREE.Scene();

//Light
var light = new THREE.AmbientLight(0xffffff, 0.5);//this light illuminates the entire scene
scene.add(light);
var pointLight = new THREE.PointLight(0xffffff, 0.5);//this light shines from a single point
scene.add(pointLight);

//Geometry + mesh
var geometry = new THREE.BoxGeometry(100, 100, 100);
//var material = new THREE.MeshBasicMaterial(); this material does not respond to light
var material = new THREE.MeshLambertMaterial({color: 0xF3FFE2});
var mesh = new THREE.Mesh(geometry, material);
//NOTE camera position is set to (0, 0, 0) by default; geo will not be scene unless position is reset as shown below:
mesh.position.set(0, 0, -1000);

scene.add(mesh);

requestAnimationFrame(render);

function render(){
  mesh.rotation.x += 0.1;
  mesh.rotation.y += 0.1;
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
