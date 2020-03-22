var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

var angleInput = document.getElementById("angle")
var leftInclinaisonInput = document.getElementById("left-inclinaison")
var rightInclinaisonInput = document.getElementById("right-inclinaison")
var maxLegthInput = document.getElementById("max-length")
var imperfectionInput =  document.getElementById("imperfection")

var canvas = document.createElement("canvas")
document.body.appendChild(canvas)
var ctx = canvas.getContext('2d')

function random(seed){
    var x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

function loadConfig() {
	tree.angle = Math.PI * Number(angleInput.value)
	tree.rightReductionFactor = Number(rightInclinaisonInput.value)
	tree.leftReductionFactor = Number(leftInclinaisonInput.value)
	tree.maxBranchSize = Number(maxLegthInput.value)
	tree.imperfection = Number(imperfectionInput.value)
}

function setup() {
	canvas.id = "canvas";
	canvas.width = width;
	canvas.height = height;

	ctx.translate(width / 2, height * 0.7)
	ctx.rotate(Math.PI)
}



function draw(){
	setup();
	loadConfig();
	trunk=new Branch(0,0,100,Math.PI/2,1,tree.startColor[0],tree.startColor[1],tree.startColor[2]);
	trunk.draw();
	trunk.grow();
}

draw()

angleInput.addEventListener('input', draw)
maxLegthInput.addEventListener('input', draw)
leftInclinaisonInput.addEventListener('input', draw)
rightInclinaisonInput.addEventListener('input', draw)
imperfectionInput.addEventListener('input', draw)
