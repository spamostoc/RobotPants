#pragma strict

public var hp : float;

function Start () {
	print("This script works");
	hp = 100;
}

function Update () {
	
}

function OnCollisionEnter () {
	Debug.Log("collision detected");
}

public function hit (dmg : float) {
	var newPos;
	hp -= dmg;
		print(hp);
	if( hp <= 0 ) {
		newPos = this.transform.position + Vector3.up * 10;
		Instantiate(GameObject.Find("dummy"),newPos,this.transform.rotation);
		Destroy(this.gameObject);
	}
}