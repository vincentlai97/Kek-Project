var AAObject = function(args) {
	this.position = args["Position"] || new THREE.Vector3(0, 0, 5);
	this.size = args["Size"] || new THREE.Vector2(1, 1);
	this.mesh = args["Mesh"] || null;
    this.mesh.translation = this.position;
    this.mesh.scale.x = this.size.x;
    this.mesh.scale.y = this.size.y;
	this.collider = new THREE.Box2(
		new THREE.Vector2(this.position.x - this.size.x / 2, this.position.y - this.size.y / 2),
		new THREE.Vector2(this.position.x + this.size.x / 2, this.position.y + this.size.y / 2)
	);
}
