class PlayerArcher{
    constructor(x,y,w,h){
        var options = {
          isStatic:true
        }
          this.image = loadImage("assets/playerArcher.png");
          this.w = w;
          this.h = h;
          this.body = Bodies.rectangle(x,y,this.w,this.h,options);
          World.add(world,this.body)
          Matter.Body.setAngle(this.body, -PI / 2);
        }

     display(){

         var pos = this.body.position;
         var angle = this.body.angle;
         push();
         translate(pos.x,pos.y);
         rotate(angle);
         imageMode(CENTER);
         image(this.image,0,0,this.w,this.h);
         pop();
        
        
        if(keyIsDown(UP_ARROW) && angle > -1.8){
        angle -= 0.01;
        Matter.Body.setAngle(this.body,angle);
       }

      if(keyIsDown(DOWN_ARROW) && angle < -1.2){
        angle += 0.01;
        Matter.Body.setAngle(this.body,angle);
    }
     }   
}