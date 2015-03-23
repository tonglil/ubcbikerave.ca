$(document).ready(function() {
    $('.rave').each(function(){
        var letters = $(this).text().split('');
        $(this).text('');
        for(var i = 0; i < 4; i++){
            if(i == 1){
                $(this).append('<span class="colorBlue">' + letters[i] + '</span>');
            }
            else if(i == 2){
                $(this).append('<span class="colorWhite">' + letters[i] + '</span>');
            }
            else if(i == 3){
                $(this).append('<span class="colorYellow">' + letters[i] + '</span>');
            }
            else{
                $(this).append('<span class="colorRed">' + letters[i] + '</span>');
            }
        }
    });

    setInterval(function() {
        var reds = $(".rave .colorBlue");
        $(".rave .colorWhite").attr("class","colorBlue");
        reds.attr("class","colorWhite");
        var greens = $(".rave .colorWhite");
        $(".rave .colorYellow").attr("class","colorWhite");
        greens.attr("class","colorYellow");
        var blues = $(".rave .colorYellow");
        $(".rave .colorRed").attr("class","colorYellow");
        blues.attr("class","colorRed");
    }, 250);

    function handleScroll(){
        // check that this is a relatively modern browser
        if (window.XMLHttpRequest){
            // determine the distance scrolled down the page
            var offset = window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop;
            // set the appropriate class on the navigation
            document.getElementById('bar').className = (offset > 232 ? 'fixed' : '');
        }
    }

    // add the scroll event listener
    if (window.addEventListener){
        window.addEventListener('scroll', handleScroll, false);
    }
    else {
        window.attachEvent('onscroll', handleScroll);
    }

    $('#scrollbar').each(function(){
        var currentClass = 'down';
        // nav scrolling
        $('a.about').click(function(){
            $('html, body').animate({scrollTop: $('#about').offset().top - 200}, 'slow');
            return false;
        });
        $('a.route').click(function(){
            $('html, body').animate({scrollTop: $('#route').offset().top - 200}, 'slow');
            return false;
        });
        $('a.register').click(function(){
            $('html, body').animate({scrollTop: $('#register').offset().top - 200}, 'slow');
            return false;
        });
        $('a.sponsors').click(function(){
            $('html, body').animate({scrollTop: $('#sponsors').offset().top - 200}, 'slow');
            return false;
        });
        $('a.home').click(function(){
            $('html, body').animate({scrollTop:0}, 'slow');
            return false;
        });
        // scrollbar scrolling
        $('#scrollbar').click(function(){
            if (currentClass == 'down'){
                $('html, body').animate({scrollTop: $('footer').offset().top}, 'slow');
                currentClass = 'up';
                document.getElementById('flip').className = ('arrowUp downbar');
            }
            else if (currentClass == 'up'){
                $('html, body').animate({scrollTop:0}, 'slow');
                currentClass = 'down';
                document.getElementById('flip').className = ('arrowDown downbar');
            }
            return false;
        });
    });
});
