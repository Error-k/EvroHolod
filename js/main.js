$.noConflict();
jQuery(document).ready(function($) {
var h_hght = 50;
var h_mrg = 0;   
$(function(){   
    var elem = $('.navbar__main');
    var top = $(this).scrollTop();
     
    if(top > h_hght){
        elem.css('top', h_mrg);
    }           
     
    $(window).scroll(function(){
        top = $(this).scrollTop();
         
        if (top+h_mrg < h_hght) {
            elem.css('top', (h_hght-top));
        } else {
            elem.css('top', h_mrg);
        }
    });
});
$(document).ready(function() { 
    var button = $('.button-up'); 
    $(window).scroll (function () {
        if ($(this).scrollTop () > 300) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });  
    button.on('click', function(){
        $('body, html').animate({
            scrollTop: 0
        }, 500);
    return false;
});      
});
});

// var nav__tel1 = document.querySelector('#nav__tel1');
// var nav__tel2 = document.querySelector('#nav__tel2');
// var nav__mail = document.querySelector('#nav__mail');

// const media575 = window.matchMedia('(max-width: 767.98px)');
// if (media575.matches) {
//     nav__tel1.innerHTML = '<i class="fas fa-phone-volume fa-lg" style="font-size: 20px; height: 30px; width: 30px; padding-top: 7px;"></i>';
//     nav__tel2.innerHTML = '<i class="fas fa-mobile-alt fa-lg" style="font-size: 20px; height: 30px; width: 30px; padding-top: 7px;"></i></i>';
//     nav__mail.innerHTML = '<i class="fas fa-envelope fa-lg" style="font-size: 20px; height: 30px; width: 30px; padding-top: 7px;"></i>';
// } else {
//     nav__tel1.innerHTML = '<i class="fas fa-phone-volume"></i>';
//     nav__tel2.innerHTML = '<i class="fas fa-mobile-alt"></i>';
//     nav__mail.innerHTML = '<i class="fas fa-envelope"></i>';
// }

var animAboutUs = anime({
    targets: '.about-us',
    translateY: -500,
    opacity: 1,
    autoplay: false,
    easing: 'spring(1, 80, 100, 0)'
});
var animObjects = anime({
    targets: '.objects',
    translateY: -500,
    opacity: 1,
    autoplay: false,
    easing: 'spring(1, 80, 100, 0)'
});
var animClients = anime({
    targets: '.clients',
    translateY: -500,
    opacity: 1,
    autoplay: false,
    easing: 'spring(1, 80, 100, 0)'
});
// var servBut1 = document.querySelector('#servBut1');
// var servBut2 = document.querySelector('#servBut2');
// var servBut3 = document.querySelector('#servBut3');
// var servBut4 = document.querySelector('#servBut4');

// const media991 = window.matchMedia('(max-width: 991.98px)');
// if(media991.matches) {
//     servBut1.innerHTML = '<i class="fas fa-fan"></i> Подбор и поставка оборудования';
//     servBut2.innerHTML = '<i class="fas fa-toolbox"></i> Монтаж оборудования';
//     servBut3.innerHTML = '<i class="fas fa-tools"></i> Сборка холодильных камер';
//     servBut4.innerHTML = '<i class="fas fa-tools"></i> Сервисное обслуживание';
// } else {
//     servBut1.innerHTML = '<i class="fas fa-fan"></i> Подбор и поставка холодильного оборудования';
//     servBut2.innerHTML = '<i class="fas fa-toolbox"></i> Монтаж торгового и промышленного холодильного оборудования';
//     servBut3.innerHTML = '<i class="fas fa-tools"></i> Сборка холодильных камер';
//     servBut4.innerHTML = '<i class="fas fa-tools"></i> Сервисное обслуживание холодильного оборудования';
// };
var animServices = anime({
    targets: '.services',
    translateY: -200,
    opacity: 1,
    autoplay: false,
    easing: 'spring(1, 80, 70, 0)'
});
document.addEventListener('scroll', function() {
    animServices.seek(window.pageYOffset * 1.8);
    animAboutUs.seek(window.pageYOffset * 1.2);
    animObjects.seek(window.pageYOffset * 0.9);
    animClients.seek(window.pageYOffset * 0.9);
});

var obj1 = document.querySelector('#card1');
var obj2 = document.querySelector('#card2');
var obj3 = document.querySelector('#card3');
var obj4 = document.querySelector('#card4');


var animObjIn1 = anime({
    targets: '#card-body1',
    translateY: 100,
    opacity: 1,
    autoplay: false,
    easing: 'spring(1, 80, 100, 0)'
});
var animObjOut1 = anime({
    targets: '#card-body1',
    opacity: 0,
    autoplay: false,
    easing: 'spring(1, 80, 100, 0)'
});
obj1.addEventListener('mouseenter', function() {
    animObjIn1.play();
});
obj1.addEventListener('mouseleave', function() {
    animObjOut1.play();
});
var animObjIn2 = anime({
    targets: '#card-body2',
    translateY: 100,
    opacity: 1,
    autoplay: false,
    easing: 'spring(1, 80, 100, 0)'
});
var animObjOut2 = anime({
    targets: '#card-body2',
    opacity: 0,
    autoplay: false,
    easing: 'spring(1, 80, 100, 0)'
});
obj2.addEventListener('mouseenter', function() {
    animObjIn2.play();
});
obj2.addEventListener('mouseleave', function() {
    animObjOut2.play();
});
var animObjIn3 = anime({
    targets: '#card-body3',
    translateY: 100,
    opacity: 1,
    autoplay: false,
    easing: 'spring(1, 80, 100, 0)'
});
var animObjOut3 = anime({
    targets: '#card-body3',
    opacity: 0,
    autoplay: false,
    easing: 'spring(1, 80, 100, 0)'
});
obj3.addEventListener('mouseenter', function() {
    animObjIn3.play();
});
obj3.addEventListener('mouseleave', function() {
    animObjOut3.play();
});
var animObjIn4 = anime({
    targets: '#card-body4',
    translateY: 100,
    opacity: 1,
    autoplay: false,
    easing: 'spring(1, 80, 100, 0)'
});
var animObjOut4 = anime({
    targets: '#card-body4',
    opacity: 0,
    autoplay: false,
    easing: 'spring(1, 80, 100, 0)'
});
obj4.addEventListener('mouseenter', function() {
    animObjIn4.play();
});
obj4.addEventListener('mouseleave', function() {
    animObjOut4.play();
});
