class Paper{
    constructor(x,y){
     var options = {
         isStatic:false,
         restitution:0.3,
         friction:0.5,
         density:1.2
     }   
    this.x = x;
    this.y = y;
    this.radius = 20; 
    this.body = Bodies.circle(this.x,this.y,this.radius,options);
    
     World.add(world,this.body);
    }
   display(){
    var angle = this.body.angle;
    push()   
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
    fill("blue");
    ellipseMode(RADIUS);
    ellipse(0,0,this.radius,this.radius);
    pop();  
     }


}