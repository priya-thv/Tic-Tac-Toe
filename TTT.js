
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#btn");
let newbtn = document.querySelector("#newbtn");
let msgc = document.querySelector(".msgcontainer");
let msg = document.querySelector(".msg");
let draw1 = document.querySelector(".draw");
let nmsgc = document.querySelector(".nmsgcontainer");
let newbtn1 = document.querySelector("#newbtn1");
let turno = true;

const winpatterns = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

let count = 0;
let c = false;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (box.innerText === "") { // Check if the box is empty before making a move
            if (turno) {
                box.innerText = "O";
                turno = false;
                box.style.color = "black";
            } else {
                box.innerText = "X";
                turno = true;
                box.style.color = "blue";
            }
            box.disabled = true;
            count++;
            checkwinner();
        }
    });
});

const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const disablebox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const showwinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgc.classList.remove("hide");
    disablebox();
}
const showdraw = () => {
    draw1.innerText = "The match got no winner";
    nmsgc.classList.remove("hide");
    disablebox();
}
// ... your existing code ...

const checkwinner = () => {
    for (let pattern of winpatterns) {
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;

        if (p1 !== "" && p2 !== "" && p3 !== "") {
            if (p1 === p2 && p2 === p3) {
                console.log("winner", p1);
                c = true;
                showwinner(p1);
                return; // exit the function if there's a winner
            }
        }
    }

    if (count === 9 && !c) {
        draw();
    }
};

// ... your existing code ...


const draw = () => {
    console.log("Draw");
    draw1.innerText = "Draw";
    nmsgc.classList.remove("hide");
    disablebox();
}

const resetgame = () => {
    turno = true;
    enableboxes();
    msgc.classList.add("hide");
    count = 0; // Reset the count to 0
    c = false; // Reset the winner flag to false
    for (let box of boxes) {
        box.innerText = ""; // Clear the text in each box
    }
};


const restartGame = () => {
    turno = true;
    enableboxes();
    nmsgc.classList.add("hide");
}

newbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
newbtn1.addEventListener("click", restartGame);

let moonbtn=document.querySelector(".moonbtn");
let body=document.querySelector("body");
let theme="light";

moonbtn.addEventListener("click", () => {
    if (theme === "light") {
        theme = "black";
        body.style.backgroundColor = "black";
        body.style.color="white";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        theme = "light";
        body.style.backgroundColor = "pink";
        body.classList.remove("dark");
        body.classList.add("light");
    }
});
