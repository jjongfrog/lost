// aurora.js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let circles = [];
let mouseX = 0;
let mouseY = 0;
let hue = 0;
let lastFrameTime = 0;
let isMouseMoving = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

window.addEventListener('mousemove', (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
  hue = (Math.atan2(mouseY - canvas.height / 2, mouseX - canvas.width / 2) + Math.PI) / (Math.PI * 2) * 360;
  isMouseMoving = true;
});

class Circle {
  constructor(x, y, size, hue, opacity) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.hue = hue;
    this.opacity = opacity;
    this.angle = Math.random() * Math.PI * 2;
    this.speed = Math.random() * 1.5 + 0.5;
    this.rate = Math.random() * 20 + 20;
  }

  draw() {
    ctx.globalAlpha = this.opacity;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = `hsl(${this.hue}, 100%, 50%)`;
    ctx.fill();
  }

  update(time) {
    this.angle += this.speed / 55;
    this.size -= 0.02;
    this.x += Math.sin(this.angle) * this.rate / 100;
    this.y += Math.cos(this.angle) * this.rate / 100;
    this.opacity -= 0.5;

    if (!isMouseMoving && time - lastFrameTime > 1000 / 60) {
      this.opacity -= 0.002;
    }
  }
}

function createCircle() {
  circles.push(new Circle(mouseX, mouseY, 20, hue, 0.5));
}

function animate(time) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  createCircle();

  for (let i = 0; i < circles.length; i++) {
    circles[i].draw();
    circles[i].update(time);

    if (circles[i].opacity <= 0) {
      circles.splice(i, 1);
    }
  }

  lastFrameTime = time;
  isMouseMoving = false;
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
