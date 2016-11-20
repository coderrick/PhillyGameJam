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

//Scene
var scene = new THREE.Scene();

renderer.render(scene, camera);