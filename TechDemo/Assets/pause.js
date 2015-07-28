#pragma strict

public var paused;

function Start () {
	paused=false;
	GameObject.Find("Menu").guiTexture.enabled=false;
}

function Update () {
	var firstPersonControllerCamera = gameObject.Find("First Person Controller").GetComponent(MouseLook);
 	var mainCamera = gameObject.Find("Main Camera").GetComponent(MouseLook);

	if(Input.GetKeyDown("p")) {
		paused=!paused;
		if(paused) {
			Time.timeScale = 0;
			GameObject.Find("Menu").guiTexture.enabled=true;
			firstPersonControllerCamera.enabled = false;
			mainCamera.enabled = false;
		} else {
			Time.timeScale = 1;
			GameObject.Find("Menu").guiTexture.enabled=false;
			firstPersonControllerCamera.enabled = true;
			mainCamera.enabled = true;
		}
	}
}

function OnMouseOver () {
    print("hi");
}