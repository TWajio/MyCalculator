const input = document.getElementById('text');
let buttons = document.querySelectorAll('button');

let string = "";
let display = "";
let result = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == "="){
            result = eval(string);
            updateDisplay();
        }
        else if(e.target.innerHTML == "AC"){
            string = "";
            display = "";
            result = "";
            updateDisplay();
        }
        else if (e.target.dataset.func === "exp") {
            string += "*10**";
            display += "×10^";
            updateDisplay();
        }
        else if (e.target.innerHTML == 'X') {
            string += "*";
            display += "×";
            updateDisplay();
        }
        else if (e.target.innerHTML == 'Del') {
            string = string.slice(0, -1);
            display = display.slice(0, -1);
            updateDisplay();
        }
        else{
            string += e.target.innerHTML;
            display += e.target.innerHTML;
            updateDisplay();  
        }
        
    })
})
function updateDisplay() {
    input.innerHTML = `
        <div class="expression">${display}</div>
        <div class="result">${result}</div>
    `;
}