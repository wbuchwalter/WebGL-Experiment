let THREE = require('three');

export default class Engine {


	start(){
		console.log('engine starting');
		
		this.renderer = new THREE.WebGLRenderer();
		this.objectStore = [];

		this.setupScene();
		this.setupCamera();
		
		this.renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild( this.renderer.domElement );

		this.render();
	}

	setupCamera() {
		this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
		this.camera.position.z = 5;
	}

	setupScene() {
		this.scene = new THREE.Scene();
		this.addCubeToScene(0,0, 0x00ff00);
		this.addCubeToScene(2,0, 0xff00f0);
		
	}

	addCubeToScene(x, y, color) {
		var geometry = new THREE.BoxGeometry( 1, 1, 1 );
		var material = new THREE.MeshBasicMaterial( { color: color } );
		var cube = new THREE.Mesh( geometry, material );
		this.scene.add( cube );
		this.objectStore.push(cube);
		cube.position.x += x;
		cube.position.y += y;
	}

	render() {
		requestAnimationFrame( () => { this.render() } );
		this.animateScene();		
		this.renderer.render( this.scene, this.camera );
	}

	
	animateScene() {

		for (let object of this.objectStore) {
			object.rotation.x += 0.01;
			object.rotation.y += 0.02;
		}

	}

}
