var demo = new CANNON.Demo();
var size = 1;

demo.addScene(function(app){

    // Create world
    var world = new CANNON.World();
    app.setWorld(world);
    world.gravity.set(0,0,-20);
    world.broadphase = new CANNON.NaiveBroadphase();

    // ground plane
    var groundShape = new CANNON.Plane(new CANNON.Vec3(0,0,1));
    var groundBody = new CANNON.RigidBody(0,groundShape);
    world.add(groundBody);
    app.addVisual(groundBody);

    // Sphere
    var sphere = new CANNON.Sphere(size);
    var sphereBody = new CANNON.RigidBody(30,sphere);
    var pos = new CANNON.Vec3(0,0,size);
    sphereBody.position.set(0,0,size*6);
    world.add(sphereBody);
    app.addVisual(sphereBody);
    
    // Add collide event
    sphereBody.addEventListener("collide",function(e){
	alert("The sphere just collided with the ground!");
	sphereBody.velocity.set(0,0,0);
    });
    
  });

demo.start();