var Application = function() {
	this.scene = null;
	this.camera = null;
	this.renderer = null;

	this.Init = function(width, height) {
		this.scene = new THREE.Scene();
		this.camera = new THREE.OrthographicCamera(-width / 2, width / 2, height / 2, -height / 2, 1, 1000);
		//this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setSize(width, height);
		document.body.appendChild(this.renderer.domElement);
	}

	this.Render = function() {
		window.requestAnimationFrame(this.Render);
		this.renderer.render(this.scene, this.camera);
	}
}
