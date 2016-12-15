var MyApp = function() {
	this.application = null;

	this.walls = [];

	this.Init = function(width, height) {
		this.application = new Application();
		this.application.Init(width, height);

		// Construct walls
		this.walls[0] = new AAObject({
			"Position": new THREE.Vector3(0, 0, 0),
			"Size": new THREE.Vector2(700, 500),
			"Mesh": new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({
				color: 0xffffff
			}))
		});
		this.application.scene.add(this.this.walls[0]);
		this.walls[1] = new AAObject({
			"Position": new THREE.Vector3(0, 0, 0),
			"Size": new THREE.Vector2(700, 500),
			"Mesh": new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({
				color: 0xffffff
			}))
		});
		this.application.scene.add(this.this.walls[1]);
		this.walls[2] = new AAObject({
			"Position": new THREE.Vector3(0, 0, 0),
			"Size": new THREE.Vector2(700, 500),
			"Mesh": new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({
				color: 0xffffff
			}))
		});
		this.application.scene.add(this.this.walls[2]);
		this.walls[3] = new AAObject({
			"Position": new THREE.Vector3(0, 0, 0),
			"Size": new THREE.Vector2(700, 500),
			"Mesh": new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({
				color: 0xffffff
			}))
		});
		this.application.scene.add(this.this.walls[3]);
	}

	this.Update = function() {

	}

	this.Render = function() {
		this.application.renderer.setClearColor(0x000000, 1);

		this.application.camera.position.z = 5;
		this.application.Render();
	}
}
