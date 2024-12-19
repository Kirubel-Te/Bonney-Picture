let typewritter = (element,text,speed) => {
    let index = 0;
     function type(){
        if(index < text.length){
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type,speed);
        }
    }
    type();
}

const element = document.getElementById("description");
const Text = "Photographer . Video Editor . Cinematographer"
const delay = 100;

typewritter(element,Text,delay);
const navbar = document.getElementById('nav-bar');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const triggerHeight = window.innerHeight - 550;
  
    if (scrollY >= triggerHeight) {
    navbar.style.backgroundColor = '#1c1c1c';
    } else {
    navbar.style.backgroundColor = 'transparent';
    }
})

$(document).ready(function () {
    $('.menu a').on('click', function (e) {
        e.preventDefault();

        const target = $($(this).attr('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 800);
        }
    });
    $(".scroll-button button").on("click", function(e) {
        e.preventDefault(e);

        const target1 = $($(this).attr('href'));
        if(target1.length){
            $('html,body').animate({
                scrollTop: target1.offset().top
            },800);
        }
    })
});