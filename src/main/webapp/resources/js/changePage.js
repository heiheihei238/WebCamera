$(document).ready(function(){
    window.setTimeout('goin()',1);
    $('#change').click(function(){
        goout();
        window.setInterval("window.location.href = \"home.html\"",1000);
    })
})

function goin(){
    $('#all').css({left:"0vw"})
}

function goout(){
    $('#all').css({left:"-100vw"})
}