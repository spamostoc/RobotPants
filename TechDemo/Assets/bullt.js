#pragma strict

private var tr : Transform;
public var velocity : Vector3 = Vector3.zero;;
public var decay : float;
public var lifespan : float = -100;

function Start () {
	tr = transform;
}

function Update () {
	tr.position += velocity;
	if(velocity.magnitude - decay > 0) {
		velocity = velocity.normalized * (velocity.magnitude - decay);
	} else {
		velocity = Vector3.zero;
	}
	if(lifespan != -100) {
		lifespan -= Time.deltaTime;
		if(lifespan < 0) {
			Destroy(this.gameObject);
		}
	}
}

function OnCollisionEnter (col: Collision) {
	var hitTarget : targetDummy;
	velocity = Vector3.zero;
	hitTarget = col.gameObject.GetComponent("targetDummy");
	
	if( hitTarget != null) {
		hitTarget.hit(5.0f);
	}
}

public function fire ( vel : Vector3, dec : float, ls : float ) {
//vel : Vector3, dec : float, ls : float
	velocity = vel;
	decay = dec;
	lifespan = ls;
}