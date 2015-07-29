#pragma strict

private var tr : Transform;
public var offset : Vector3 = Vector3.zero;;
public var parent : Transform;

function Start () {
	tr = transform;
	parent = Camera.main.transform;
}

function Update () {
	tr.position = parent.position + offset + parent.forward * 5;
}


public function fire ( vel : Vector3, dec : float, ls : float ) {
//vel : Vector3, dec : float, ls : float
	//velocity = vel;
	//decay = dec;
	//lifespan = ls;
}