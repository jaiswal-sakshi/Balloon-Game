
// const canvas = document.getElementById("gameCanvas");
// const ctx = canvas.getContext("2d");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// let balloon = {
//   x: canvas.width / 2,
//   y: canvas.height - 200,
//   radius: 30,
//   inflateCount: 0,
//   isFloating: false,
//   isBurst: false,
//   dx: 0,
//   dy: 0
// };

// const pumpBtn = document.getElementById("pumpBtn");
// const MAX_INFLATE = 3;
// const FLOAT_DURATION = 5000; // 5 seconds

// let autoBurstTimer = null;

// pumpBtn.addEventListener("click", () => {
//   if (balloon.isBurst || balloon.isFloating) return;

//   balloon.inflateCount++;
//   balloon.radius += 10;
//   balloon.y -= 15;

//   if (balloon.inflateCount >= MAX_INFLATE) {
//     startFloating();
//   }
// });

// function startFloating() {
//   balloon.isFloating = true;
//   balloon.dx = (Math.random() * 2 - 1) * 3;
//   balloon.dy = (Math.random() * -1 - 1) * 3;
//   pumpBtn.style.display = "none";

//   // Start auto-burst after 5 seconds
//   autoBurstTimer = setTimeout(() => {
//     if (!balloon.isBurst) {
//       balloon.isBurst = true;
//     }
//   }, FLOAT_DURATION);
// }

// canvas.addEventListener("click", (e) => {
//   if (balloon.isFloating && !balloon.isBurst) {
//     const dist = Math.sqrt(
//       (e.clientX - balloon.x) ** 2 + (e.clientY - balloon.y) ** 2
//     );
//     if (dist <= balloon.radius) {
//       balloon.isBurst = true;
//       clearTimeout(autoBurstTimer); // stop auto burst
//       setTimeout(() => {
//         alert("🎈 POP! You burst it!");
//         location.reload();
//       }, 300);
//     }
//   }
// });

// function drawBalloon() {
//   if (balloon.isBurst) {
//     ctx.fillStyle = "red";
//     ctx.font = "bold 40px Arial";
//     ctx.fillText("💥 POP!", balloon.x - 40, balloon.y);
//     return;
//   }

//   ctx.beginPath();
//   ctx.moveTo(balloon.x, balloon.y + balloon.radius);
//   ctx.lineTo(balloon.x, balloon.y + balloon.radius + 50);
//   ctx.strokeStyle = "#444";
//   ctx.lineWidth = 2;
//   ctx.stroke();
//   ctx.closePath();

//   ctx.beginPath();
//   ctx.arc(balloon.x, balloon.y, balloon.radius, 0, Math.PI * 2);
//   ctx.fillStyle = "#ff3b3b";
//   ctx.fill();
//   ctx.closePath();
// }

// function update() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   if (balloon.isFloating && !balloon.isBurst) {
//     balloon.x += balloon.dx;
//     balloon.y += balloon.dy;

//     if (balloon.x <= balloon.radius || balloon.x >= canvas.width - balloon.radius) {
//       balloon.dx *= -1;
//     }
//     if (balloon.y <= balloon.radius || balloon.y >= canvas.height - balloon.radius) {
//       balloon.dy *= -1;
//     }
//   }

//   drawBalloon();
//   requestAnimationFrame(update);
// }

// update();

// window.onload = function () {
//   const pumpBtn = document.getElementById("pumpBtn");
//   const balloon = document.getElementById("balloon");

//   pumpBtn.addEventListener("mousedown", function () {
//     pumpBtn.style.bottom = "10%"; // move down
//   });

//   pumpBtn.addEventListener("mouseup", function () {
//     pumpBtn.style.bottom = "20%"; // move back to original
//   });

//   // optional: handle mouseup outside the image
//   document.addEventListener("mouseup", function () {
//     pumpBtn.style.bottom = "20%";
//   });
// };



/*window.onload = function () {
  const pumpBtn = document.getElementById("pumpBtn");
  const balloon = document.getElementById("balloon");

  let size = 100; // starting size in pixels
  let burst = false;

  pumpBtn.addEventListener("mousedown", function () {
    if (burst) return;

    pumpBtn.style.bottom = "10%";

    size += 10;
    balloon.style.width = `${size}px`;

    if (size >= 200) {
      balloon.src = "./Graphics/burst.png"; // add this image in your Graphics folder
      burst = true;
    }
  });

  pumpBtn.addEventListener("mouseup", function () {
    pumpBtn.style.bottom = "20%";
  });

  document.addEventListener("mouseup", function () {
    pumpBtn.style.bottom = "20%";
  });
};
*/





/*
window.onload = function () {
  const pumpBtn = document.getElementById("pumpBtn");
  const balloon = document.getElementById("balloon");

  let size = 20;
  let burst = false;
  let floatingStarted = false;




  pumpBtn.addEventListener("mousedown", function () {
    if (burst || floatingStarted) return;

    pumpBtn.style.bottom = "10%";

    size += 20;
    balloon.style.width = `${size}px`;
    balloon.style.right = `${(400 - size) / 2}px`; // Adjust the right position to keep it centered

    if (size >= 100) {
      // balloon.style.animation= "float 1s ease-in-out infinite";
      balloon.style.animation = "floatUpLeft 3s linear forwards";
      floatingStarted = true;
      
      setTimeout(() => {
        if (!burst) {
          balloon.style.animation = "pop 0.3s forwards";
          setTimeout(() => {
            balloon.style.zIndex = "0";
            balloon.style.opacity = "0";
          }, 300);
          burst = true;
        }
      }, 3000);
    }
  });

  pumpBtn.addEventListener("mouseup", function () {
    pumpBtn.style.bottom = "20%";
  });

  document.addEventListener("mouseup", function () {
    pumpBtn.style.bottom = "20%";
  });
};
*/

window.onload = function () {
  const pumpBtn = document.getElementById("pumpBtn");

  let size = 20;
  let lsize = 20;
  let burst = false;
  let floatingStarted = false;
  let pumpCount = 0;
  let currentBalloon = null;
  let currentLetter = null;

  const balloonImages = [
    "./Graphics/Symbol 100001.png",
    "./Graphics/Symbol 100002.png",
    "./Graphics/Symbol 100003.png",
    "./Graphics/Symbol 100004.png",
    "./Graphics/Symbol 100005.png",
    "./Graphics/Symbol 100006.png",
    "./Graphics/Symbol 100007.png",
    "./Graphics/Symbol 100008.png",
    "./Graphics/Symbol 100009.png",
    "./Graphics/Symbol 1000010.png",
  ];

  const letterImages = [
    "./Graphics/Symbol 10001.png",
    "./Graphics/Symbol 10002.png",
    "./Graphics/Symbol 10003.png",
    "./Graphics/Symbol 10004.png",
    "./Graphics/Symbol 10005.png",
    "./Graphics/Symbol 10006.png",
    "./Graphics/Symbol 10007.png",
    "./Graphics/Symbol 10008.png",
    "./Graphics/Symbol 10009.png",
    "./Graphics/Symbol 10010.png",
    "./Graphics/Symbol 10011.png",
    "./Graphics/Symbol 10020.png",
    "./Graphics/Symbol 10013.png",
    "./Graphics/Symbol 10014.png",
    "./Graphics/Symbol 10015.png",
    "./Graphics/Symbol 10016.png",
    "./Graphics/Symbol 10017.png",
    "./Graphics/Symbol 10018.png",
    "./Graphics/Symbol 10019.png",
    "./Graphics/Symbol 10020.png",
    "./Graphics/Symbol 10021.png",
    "./Graphics/Symbol 10022.png",
    "./Graphics/Symbol 10023.png",
    "./Graphics/Symbol 10024.png",
    "./Graphics/Symbol 10020.png",
    "./Graphics/Symbol 10026.png",
  ];

  let balloonIndex = 0;

  function getRandomLetterImage() {
    return letterImages[Math.floor(Math.random() * letterImages.length)];
  }

  function createBalloon() {
    if (currentBalloon) currentBalloon.remove();
    if (currentLetter) currentLetter.remove();

    // Create balloon
    const balloon = document.createElement("img");
    balloon.src = balloonImages[balloonIndex % balloonImages.length];
    balloon.className = "balloon";
    balloon.style.position = "fixed";
    balloon.style.left = "1182px";
    balloon.style.bottom = "30%";
    balloon.style.transform = "translateX(-50%)"; // center horizontally
    balloon.style.width = "20px";
    balloon.style.opacity = "1";
    document.body.appendChild(balloon);
    currentBalloon = balloon;

    // Create letter image
    const letter = document.createElement("img");
    letter.src = getRandomLetterImage();
    letter.className = "letter";
    letter.style.width = "20px"; // Start with same size as balloon
    letter.style.left = "1182px";
    letter.style.bottom = "31%";

    document.body.appendChild(letter);
    currentLetter = letter;

    updateLetterPosition();

    size = 20;
    lsize = 20;
    burst = false;
    floatingStarted = false;
    pumpCount = 0;
    balloonIndex++;

    updateLetterPosition();
  }

  function updateLetterPosition() {
    if (!currentBalloon || !currentLetter) return;

    const balloonRect = currentBalloon.getBoundingClientRect();
    const letterSize = lsize * 0.6;

    currentLetter.style.width = `${letterSize}px`;
    currentLetter.style.height = "auto";
    // currentLetter.style.left = `${balloonRect.left + balloonRect.width / 2}px`;
    // currentLetter.style.top = `${balloonRect.top + balloonRect.height / 2 - letterSize * 0.8}px`;
    currentLetter.style.transform = "translateX(-50%)";
  }


  createBalloon();

  pumpBtn.addEventListener("mousedown", function () {
    if (burst || floatingStarted || !currentBalloon) return;

    pumpBtn.style.bottom = "10%";
    pumpCount++;
    size += 20;
    lsize += 20;

    currentBalloon.style.width = `${size}px`;
    updateLetterPosition();

    if (pumpCount >= 3) {
      currentBalloon.style.animation = "floatUpLeft 3s linear forwards";
      currentLetter.style.animation = "floatUpLeft 3s linear forwards";
      floatingStarted = true;

      setTimeout(() => {
        if (!burst) {
          currentBalloon.style.animation = "pop 0.3s forwards";
          currentLetter.style.animation = "pop 0.3s forwards";

          setTimeout(() => {
            currentBalloon.style.opacity = "0";
            currentLetter.style.opacity = "0";
            createBalloon();
          }, 300);

          burst = true;
        }
      }, 3000);
    }
  });

  pumpBtn.addEventListener("mouseup", () => pumpBtn.style.bottom = "20%");
  document.addEventListener("mouseup", () => pumpBtn.style.bottom = "20%");
};
