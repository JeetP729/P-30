class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.Visiblity = 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image = loadImage("block (1).png");
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      console.log(this.body.speed);
      var pos= this.body.position;
      if(this.body.speed<3){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.widht)
        
      }
      else{
        World.remove(world,this.body);
        push();
        this.Visiblity = this.Visiblity -5;
        tint(255,this.Visiblity);
        image(this.image,this.body.position.x,this.body.position.y,this.widht)
        pop();
      }
    }
}