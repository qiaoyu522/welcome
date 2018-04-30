var diam1=0;
  var  alpha1=200;
  var  alpha2=0;
function setup() {
	createCanvas(500, 500); 
}
function draw() { 
  background("white");
    fill(212,230,241);
    ellipse(250,250,diam1,diam1);
    diam1 =diam1+5;
    fill(241,148,138,alpha1);
    alpha1 = alpha1;
    noStroke();
    textSize(50);
    textFont("Georgia");
    textStyle(ITALIC);
    text('WELCOME',100,250);
    fill(241,148,138,alpha2);
    alpha2 = alpha2;
    textSize(27);
    textFont("Georgia");
    textStyle(ITALIC);
    text('THANK YOU FOR COMING',75,250);
    
    stroke(253,254,254,100);
    strokeWeight(5);
    line(10,10,490,10);
    line(490,10,490,490);
    line(10,490,490,490);
    line(10,10,10,490);
    stroke(253,254,254,100);
    strokeWeight(2);
    line(100,260,360,260);
    line(100,265,360,265);
    line(10,10,250,190);
    line(490,10,250,190);
    fill("white");
    stroke(253,237,236,50);
    strokeWeight(2);
    rect(230,180,40,20);
    fill(231,176,160);
    stroke(253,237,236,100);
    strokeWeight(2);
    ellipse(mouseX+20,mouseY+20,15,15);
    textSize(10);
    textFont("Georgia");
    textStyle(ITALIC);
    text('to YOU',440,480);
}

function mousePressed(){
   alpha1= alpha1-20;
    if (alpha1>0){alpha2=0;
                 }else{alpha2 = 200;}
    }
