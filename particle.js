class Particle {
    constructor(x, y, r) {
        var options = {
            isStatic: false,
            'restitution': 0.5
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x, y, this.r, options);
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
    }

    display() {
        var particlePos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(particlePos.x, particlePos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}