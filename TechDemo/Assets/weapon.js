#pragma strict

private var tr : Transform;
public var offset : Vector3 = Vector3.zero;;
public var parent : Transform;
public var modelrotation : Quaternion;
public var smoothVel : Vector3 = Vector3.zero;
public var smoothTime : float;

function Start () {
	tr = transform;
	parent = Camera.main.transform;
	modelrotation = Quaternion.AngleAxis(90, Vector3.right);
}

function Update () {
	tr.position = Vector3.SmoothDamp( tr.position, parent.position + parent.forward * offset.z + parent.up * offset.y + parent.right * offset.x , smoothVel , smoothTime );
	
	tr.rotation = parent.rotation * modelrotation;
}


public function fire ( vel : Vector3, dec : float, ls : float ) {
//vel : Vector3, dec : float, ls : float
	//velocity = vel;
	//decay = dec;
	//lifespan = ls;
}