const Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint,
  Composite = Matter.Composite;

let mConstraint;
// create an engine
const engine = Engine.create();

// create a renderer
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: window.innerWidth,
    height: window.innerHeight,
    background: "transparent",
    wireframes: false
  }
});

// create two boxes and a ground
function createCat() {
  let cat = Bodies.rectangle(Math.random() * window.innerWidth, 0, 70, 60, {
    render: {
      sprite: {
        texture: "./img/cat.png",
        xScale: 0.1,
        yScale: 0.1
      }
    },
    restitution: 1,
    friction: 0
  });

  Composite.add(engine.world, [cat]);
}
const button = document.querySelector(".btn");
button.addEventListener("click", createCat);
const buttonRect = button.getBoundingClientRect();
const shadowButton = Bodies.rectangle(
  buttonRect.left + buttonRect.width / 2 + 2.5,
  buttonRect.top + buttonRect.height / 2,
  buttonRect.width + 5,
  buttonRect.height,
  {
    isStatic: true,
    render: {
      visible: false
    }
  }
);

const ground = Bodies.rectangle(
  window.innerWidth / 2,
  window.innerHeight + 55,
  window.innerWidth,
  100,
  {
    isStatic: true,
    render: {
      visible: false
    }
  }
);

const canvasMouse = Mouse.create(render.element);
const options = {
  mouse: canvasMouse
};
mConstraint = MouseConstraint.create(engine, options);
mConstraint.constraint.render.visible = false;
console.log(mConstraint);

// add all of the bodies to the world
Composite.add(engine.world, [ground, shadowButton, mConstraint]);

// run the renderer
Render.run(render);

// create runner
const runner = Runner.create();

// run the engine
Runner.run(runner, engine);
