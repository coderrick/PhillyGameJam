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
// var material = new THREE.MeshLambertMaterial({
//     color: 0xF3FFE2,
//     map: new THREE.TextureLoader().load('images/chaos-sonic-adventure.jpg')
// });
var material = new THREE.ShaderMaterial({
    vertexShader: document.getElementById('vertexShader').textContent,
    fragmentShader: document.getElementById('fragmentShader').textContent
});
var mesh = new THREE.Mesh(geometry, material);
//NOTE camera position is set to (0, 0, 0) by default; geo will not be scene unless position is reset as shown below:
mesh.position.set(0, 0, -1000);
scene.add(mesh);

//Initializing basic geometry and pushing vertices to it.
var geometry2 = new THREE.Geometry();
geometry2.vertices.push(
    new THREE.Vector3(-50, 50, 0),
    new THREE.Vector3(-50, -50, 0),
    new THREE.Vector3(50, -50, 0)
);
geometry2.faces.push(new THREE.Face3(0, 1, 2));
var material2 = new THREE.MeshLambertMaterial({color: 0xF3FFE2});
var mesh2 = new THREE.Mesh(geometry2, material2);
mesh2.position.set(300, 0, -1000);
scene.add(mesh2);

//This is a basic geo as well 
//However the Buffered Geometry is best used for shapes that will stay static and gives a huge performance boost because of it.
/*
var geometry3 = new THREE.BufferGeometry();
var vertices = new Float32Array([
    new THREE.Vector3(-50, 50, 0),
    new THREE.Vector3(-50, -50, 0),
    new THREE.Vector3(50, -50, 0)
]);
geometry3.addAttribute('position', new THREE.BufferAttribute(vertices, 3));
var material3 = new THREE.MeshLambertMaterial({color: 0xF3FFE2});
var mesh3 = new THREE.Mesh(geometry3, material2);
mesh2.position.set(300, 0, -1000);
scene.add(mesh3);
*/

//Font Geometry
// var fontGeometry = new THREE.TextGeometry('score', {});


requestAnimationFrame(render);

function render(){
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
//camera rotation test
  camera.rotation.y += 0.01;
//   mesh2.rotation.x += 0.01;
//   mesh2.rotation.y += 0.01;

  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
