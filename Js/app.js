$(document).ready(function () {

    $('.menu .btn').on('click', function () {
        $('#nav').toggleClass('menu_show');
    });

});


var a = 1;
function showHide(){
    if(a==1)
    {
        document.getElementById("div1").style.display="block";
        document.getElementById("div2").style.display="none";
        document.getElementById("div3").style.display="none";
        document.getElementById("div4").style.display="none";
        return a=0;
    }
    else{
        document.getElementById("div1").style.display="block";
        document.getElementById("div2").style.display="none";
        document.getElementById("div3").style.display="none";
        document.getElementById("div4").style.display="none";
        return a=1;
    }
}

function showHide2(){
    if(a==1)
    {
        document.getElementById("div1").style.display="none";
        document.getElementById("div2").style.display="block";
        document.getElementById("div3").style.display="none";
        document.getElementById("div4").style.display="none";
        return a=0 ;
    }
    else{
        document.getElementById("div1").style.display="none";
        document.getElementById("div2").style.display="block";
        document.getElementById("div3").style.display="none";
        document.getElementById("div4").style.display="none";
        return a=1 ;
    }
}

function showHide3(){
    if(a==1)
    {
        document.getElementById("div1").style.display="none";
        document.getElementById("div2").style.display="none";
        document.getElementById("div3").style.display="block";
        document.getElementById("div4").style.display="none";
        return a=0;
    }
    else{
        document.getElementById("div1").style.display="none";
        document.getElementById("div2").style.display="none";
        document.getElementById("div3").style.display="block";
        document.getElementById("div4").style.display="none";
        return a=1;
    }
}


function showHide4(){
    if(a==1)
    {
        document.getElementById("div1").style.display="none";
        document.getElementById("div2").style.display="none";
        document.getElementById("div3").style.display="none";
        document.getElementById("div4").style.display="block";
        return a=0 ;
    }
    else{
        document.getElementById("div1").style.display="none";
        document.getElementById("div2").style.display="none";
        document.getElementById("div3").style.display="none";
        document.getElementById("div4").style.display="block";
        return a=1 ;
    }
}