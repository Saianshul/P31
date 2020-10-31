class Plinko {
    constructor(x, y, r) {
        var options = {
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world, this.body);
    }

    display() {
        var plinkoPos = this.body.position;
        push();
        translate(plinkoPos.x, plinkoPos.y);
        fill(255, 255, 255);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r);
        pop();
    }
}