let no = prompt("Please enter the number of buttons");
let min = 1; 
let winningButton;
let max= parseInt(no);
winningButton = Math.floor(Math.random() * (max - min)) + min;
console.log(winningButton);
const onClick = function() {
    if (winningButton == this.id) {
        alert("Castigator!")
    } else {
        alert("Necastigator!");
    }
}
for(let i = 1; i <= no; ++i) {
    const newBtn = document.createElement('button');
    newBtn.innerText=i;
    newBtn.className="btn btn-success";
    newBtn.style="margin-right: 16px";
    document.querySelector('#button-container').appendChild(newBtn);
    newBtn.id = i;
    newBtn.addEventListener('click', onClick);
}
