let toggleMenu = document.querySelector(".toggleMenu");
let navBar = document.querySelector(".navBar");

toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("active");
    navBar.classList.toggle("active");
});

window.addEventListener("scroll", function(){
    navBar.classList.remove("active");
}); 




//Jquery Code
$(document).ready(function(){


    // Show Move Top Button
    $(window).scroll(()=>{
        if($(this).scrollTop() > 150){
            $(".moveTopBtn").addClass("active");
        }else{
            $(".moveTopBtn").removeClass("active");
        }
    });

    $(".moveTopBtn").click(()=>{
       $(window).scrollTop(0); 
    });

    // Skills filling Button
    $(window).scroll(()=>{
        if($(this).scrollTop() > 650){
            $(".skill-frame").addClass("active");
        }else{
            $(".skill-frame").removeClass("active");
        }
    });






});
