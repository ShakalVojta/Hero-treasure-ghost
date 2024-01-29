const hero = document.querySelector(".hero");
hero.style.top = "500px";
hero.style.left = "100px";

const ghost = document.querySelector(".ghost");
ghost.style.top = "200px";
ghost.style.left = "600px";

const treasure = document.querySelector(".treasure");
treasure.style.top = "0px";
treasure.style.left = "400px";

const step = 100;
window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
    case "w":
    case 'W':
      moveHero(0, -step);
      break;
    case "ArrowDown":
    case "s":
    case 'S':
      moveHero(0, step);
      break;
    case "ArrowLeft":
    case "a":
    case 'A':
      moveHero(-step, 0);
      break;
    case "ArrowRight":
    case "d":
    case 'D':
      moveHero(step, 0);
      break;
    default:
      break;
  }
  if (
    hero.style.top === treasure.style.top &&
    hero.style.left === treasure.style.left
  ) {
    setTimeout(() => {
      alert("You win :)!");
      hero.style.top = "500px";
      hero.style.left = "100px";
    }, 50);
  } else if (
    hero.style.top === ghost.style.top &&
    hero.style.left === ghost.style.left
  ) {
    setTimeout(() => {
      alert("You lost :(!");
      hero.style.top = "500px";
      hero.style.left = "100px";
      ghost.style.top = "200px";
      ghost.style.left = "600px";
    }, 50);
  }

  function moveHero(deltaX, deltaY) {
    const currentTop = parseInt(hero.style.top) || 0;
    const currentLeft = parseInt(hero.style.left) || 0;

    const newTop = currentTop + deltaY;
    const newLeft = currentLeft + deltaX;

    if (newTop >= 0 && newTop <= 500 && newLeft >= 0 && newLeft <= 700) {
      hero.style.top = newTop + "px";
      hero.style.left = newLeft + "px";
    }
  }
});

function moveGhost() {
    const ghostTop = parseInt(ghost.style.top) || 0;
    const ghostLeft = parseInt(ghost.style.left) || 0;

    const heroTop = parseInt(hero.style.top) || 0;
    const heroLeft = parseInt(hero.style.left) || 0;

    const deltaTop = heroTop - ghostTop;
    const deltaLeft = heroLeft - ghostLeft;

    if (Math.random() > 0.5) {
        ghost.style.left = (ghostLeft + Math.sign(deltaLeft) * step) + 'px';
    } else {
        ghost.style.top = (ghostTop + Math.sign(deltaTop) * step) + 'px';
    }

    if (
        hero.style.top === ghost.style.top &&
        hero.style.left === ghost.style.left
      ) {
        setTimeout(() => {
          alert("You lost :(!");
          hero.style.top = "500px";
          hero.style.left = "100px";
          ghost.style.top = "200px";
          ghost.style.left = "600px";
        }, 50);
      }
}
setInterval(moveGhost, 200);




