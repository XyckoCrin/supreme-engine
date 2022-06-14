class Overworld {
	constructor(config) {
		this.element = config.element;
		this.canvas = this.element.querySelector(".game-canvas");
		this.ctx = this.canvas.getContext("2d");
	}
	
	init() {
		const image = new Image();
		image.onload = () => {
			this.ctx.drawImage(image,0,0)
		};
		image.src = "/images/maps/DemoMap.png";
		
		//place some game objects here
		const hero = new GameObject({
			x: 5,
			y: 6,
		})
		const hero1 = new GameObject({
			x: 7,
			y: 9,
		})

		
	}
	
}