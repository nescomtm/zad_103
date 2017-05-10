$(function(){
	//ten kod wykona się po załadowaniu DOM
    var carouselList = $("#carousel ul");

    function moveFirstSlide(){
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");

        lastItem.after(firstItem);
        carouselList.css({marginLeft:0});
    }

    function changeSlide(){
        carouselList.animate({'marginLeft':-640}, 500, moveFirstSlide);
    }

    setTimeout(changeSlide, 3000); //po 3 sek. zmieni slajd jeden raz
    setInterval(changeSlide, 3000); //co 3 sek. wykona funkcję zmieniającą slajd. 

});



