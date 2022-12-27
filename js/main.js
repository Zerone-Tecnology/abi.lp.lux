var phoneMask = IMask(
    document.getElementById('imask_phone_number'), {
      mask: '+{7}(700)000-00-00'
});
var phoneMask = IMask(
    document.getElementById('imask_phone_number2'), {
      mask: '+{7}(700)000-00-00'
});


let smeta_btn = document.getElementById("rashitat_smetu");
let smeta_modal = document.getElementById("smeta_modal_overlay");
let close_modal_btn = document.getElementById("close_modal_btn");
// let modal_overlay = document.getElementById("smeta_modal_overlay");
// modal_overlay.onclick = function(){
//     smeta_modal.style.display = "none";
// }
smeta_btn.onclick = function(){
    smeta_modal.style.display = "block";
}
close_modal_btn.onclick = function(){
    smeta_modal.style.display = "none";
}
let burger_btn = document.getElementById("burger_menu");
let menu = document.getElementById("menu");
let mobile_nav = document.getElementById("mobile_nav");
let menu_close_btn = document.getElementById("menu_close_btn");
burger_btn.onclick = function(){
    menu.style.display = "block";
    mobile_nav.style.display = "block";
}
menu_close_btn.onclick = function(){
    menu.style.display = "none";
    mobile_nav.style.display = "none";
}
