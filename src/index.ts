import { Application, Loader, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

Loader.shared.add({url:"gato.png", name:"mygato"});
Loader.shared.onComplete(()=>{
	const clampy: Sprite = Sprite.from("mygato");

	console.log("hola mundo");
	
	//clampy.anchor.set(0.5);
	
	clampy.x = 0;
	clampy.y = 0;
	
	app.stage.addChild(clampy);
});
Loader.shared.load();