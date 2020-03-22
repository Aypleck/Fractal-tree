var tree = {
	angle: Math.PI * 0.1,

	size: 100,
	maxBranchSize: 10,
	leftReductionFactor: 0.8,
	rightReductionFactor: 0.8,

	seed: (Math.random() + 0.1) * 10,
	imperfection: 2,

	startColor: [140, 70, 20],
	endColor: [0, 255, 0],


	getColorStep: function(index) {
		diff = this.endColor[index] - this.startColor[index];
		return diff / this.maxBranchNbr;
	},

	get maxBranchNbr() {
		reductionFactor = (this.leftReductionFactor < this.rightReductionFactor ? this.rightReductionFactor : this.leftReductionFactor);
		maxBranchNbr = 0;
		for (var size = this.size; size > this.maxBranchSize; size *= reductionFactor) {
			maxBranchNbr++;
		}
		return maxBranchNbr;
	}
}