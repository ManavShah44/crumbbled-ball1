class Ball{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.x=x
        this.y=y
        this.r=radius
        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body)


    }
    display(){
        var paperPosition=this.body.position
        push()
        
        ellipseMode(RADIUS)
        strokeWeight(3)
        fill(255,0,255)
        ellipse(paperPosition.x,paperPosition.y,this.r,this.r)
        pop()

    }

}