class Branch {
	constructor(x, y, length, angle, level, r, g, b) {
		this.startx = x;
		this.starty = y;
		this.length = length;
		this.angle = angle;
		this.level = level;

		//Colors
		this.r = r;
		this.g = g;
		this.b = b;
		this.nextr = this.r + tree.getColorStep(0);
		this.nextg = this.g + tree.getColorStep(1);
		this.nextb = this.b + tree.getColorStep(2);

		//Coordinates
		this.endx = this.startx + Math.cos(this.angle) * this.length;
		this.endy = this.starty + Math.sin(this.angle) * this.length;

		//Angles
		this.leftAngle = this.angle - tree.angle - (0.5 - random(tree.seed + this.endx + this.endy + 1)) * tree.imperfection
		this.rightAngle = this.angle + tree.angle - (0.5 - random(tree.seed + this.endx + this.endy - 1)) * tree.imperfection

		this.leftChild;
		this.rightChild;
	}

	//Draw the branch on the canvas
	draw() {
		ctx.beginPath()
		ctx.lineWidth = 1 / this.level * 10
		ctx.strokeStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
		ctx.moveTo(this.startx, this.starty);
		ctx.lineTo(this.endx, this.endy);
		ctx.stroke()
	}

	//The recursive function that makes two child branches and make them grow
	grow() {
		if (this.length > tree.maxBranchSize) {
			this.leftChild = new Branch(this.endx, this.endy, this.length * tree.leftReductionFactor, this.leftAngle, this.level + 1, this.nextr, this.nextg, this.nextb)
			this.leftChild.draw()
			this.leftChild.grow()

			this.rightChild = new Branch(this.endx, this.endy, this.length * tree.rightReductionFactor, this.rightAngle, this.level + 1, this.nextr, this.nextg, this.nextb)
			this.rightChild.draw()
			this.rightChild.grow()
		}
	}

}