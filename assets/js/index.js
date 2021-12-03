let estrella = document.getElementById("estrella");
let luna = document.getElementById("luna");
let montanaTrasera = document.getElementById('montanaTrasera');
let text = document.getElementById("text");
let btn = document.getElementById("btn");
let montanaFrente = document.getElementById('montanaFrente');
let header = document.querySelector('header')

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    estrella.style.left = value * 0.25 + 'px';
    luna.style.top = value * 1.05 + 'px';
    montanaTrasera.style.top = value * 0.5 + 'px';
    montanaFrente.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px'
});