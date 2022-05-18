const btns = document.querySelectorAll(".num, .operator, .punct");
const display = document.querySelector(".screen");
const clearBtn = document.querySelector(".clear");
const resultBtn = document.querySelector(".result");



for(let i=0; i<btns.length; i++){
    btns[i].addEventListener('click', (e)=>{
        display.value += e.target.value;
    })
};

clearBtn.addEventListener('click', ()=>{
    display.value = '';
});

resultBtn.addEventListener('click', ()=>{
    display.value = eval(display.value);
});

