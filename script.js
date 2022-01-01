let main = document.querySelector(`.container`);
let n = 10;
for (let i = 0 ; i < n*n ; i++) {
    let div = document.createElement(`div`);
    main.appendChild(div);
    div.classList.add("disable");
    div.setAttribute(`data-id` , i)
}

function random() {
    const karimi = document.querySelector(`[data-id="${getRandomInt(99)}"]`);
    karimi.style.backgroundColor = `rgb(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)})`;
    setTimeout (function() {
        karimi.style.backgroundColor = ``;
    } , getRandomInt(1900))
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

setInterval(random, getRandomInt(2500));
 
