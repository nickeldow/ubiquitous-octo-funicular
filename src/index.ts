import { Application, Container, Loader, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});
window.addEventListener("resize",()=>{
	const scaleX = window.innerWidth / app.screen.width;
	const scaleY = window.innerHeight / app.screen.height;
	const scale= Math.min(scaleX,scaleY);
	
	const gamewidth = Math.round(app.screen.width * scale);
	const gameheight = Math.round(app.screen.height*scale);
	
	
	const MarginHorizontal = Math.floor((window.innerWidth-gamewidth) / 2);
	const MarginVertical= Math.floor((window.innerHeight-gamewidth) / 2);


	app.view.style.width = gamewidth + "px";
	app.view.style.height = gameheight + "px";

	app.view.style.marginLeft = MarginHorizontal + "px";
	app.view.style.marginRight = MarginHorizontal + "px";

	app.view.style.marginTop= MarginVertical+"px";
	app.view.style.marginBottom= MarginVertical+"px";
})
window.dispatchEvent(new Event("resize"));

Loader.shared.add({url:"gato.png", name:"mygato"});
Loader.shared.add({url:"valla.png", name:"fence"});
Loader.shared.add({url:"sello.png", name:"sello"});
Loader.shared.add({url:"marco.png", name:"marco"});
Loader.shared.onComplete.add(()=>{
	const gato: Sprite = Sprite.from("mygato");
	const valla: Sprite= Sprite.from("fence");
	const marco: Sprite = Sprite.from("marco");
	const sello: Sprite = Sprite.from("sello");


	sello.scale.set(0.3);
	sello.position.set(400,300);
	const todo:Container = new Container();

	app.stage.addChild(marco);
	app.stage.addChild(sello);
	const gatoconvalla: Container = new Container();
	gato.x = 200;
	gato.y = 100;

	gato.scale.x=0.5;
	gato.scale.y=0.5;

	valla.scale.set(0.5);
	valla.position.set(200,350);
	valla.angle=-90;

	gatoconvalla.addChild(gato);
	gatoconvalla.addChild(valla);
	gatoconvalla.position.set(50,70);
	gatoconvalla.scale.set(0.7);
	todo.addChild(gatoconvalla);
	todo.addChild(marco);
	todo.addChild(sello);
	app.stage.addChild(todo);
});
Loader.shared.load();