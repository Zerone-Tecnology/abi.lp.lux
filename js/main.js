document.addEventListener('DOMContentLoaded', function(){
    var phoneMask = IMask(
        document.getElementById('imask_phone_number'), {
          mask: '+{7}(700)000-00-00'
    });
    document.getElementById("rashitat_smetu").onclick= function(){
        var phoneMask = IMask(
            document.getElementById('imask_phone_number2'), {
              mask: '+{7}(700)000-00-00'
        });
    }
    
    
    let burger_btn = document.getElementById("burger_menu");
    let menu = document.getElementById("menu");
    let mobile_nav = document.getElementById("mobile_nav");
    let menu_close_btn = document.getElementById("menu_close_btn");
    burger_btn.onclick = function(){
        menu.style.display = "block";
        menu.style.width = "-webkit-fill-available";
        mobile_nav.style.display = "block";
    }
    menu_close_btn.onclick = function(){
        menu.style.display = "none";
        mobile_nav.style.display = "none";
    }

    
    setTimeout(() => AOS.init(), 600);
});    
