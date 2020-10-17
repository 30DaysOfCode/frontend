//command for clicking the price buttons
document.getElementById('free').addEventListener('click', function(){
    if(document.getElementById("choice").style.display = "none"){
        document.getElementById("choice").style.display = "block";
        document.getElementById("choice1").style.display = "none";
        document.getElementById("choice2").style.display = "none";
    }
});

document.getElementById('one').addEventListener('click', function(){
    if(document.getElementById("choice1").style.display = "none"){
        document.getElementById("choice").style.display = "none";
        document.getElementById("choice1").style.display = "block";
        document.getElementById("choice2").style.display = "none";
    }
});

document.getElementById('two').addEventListener('click', function(){
    if(document.getElementById("choice2").style.display = "none"){
        document.getElementById("choice").style.display = "none";
        document.getElementById("choice1").style.display = "none";
        document.getElementById("choice2").style.display = "block";
    }
});

//command for clicking the description buttons
document.getElementById('free-description').addEventListener('click', function(){
    if(document.getElementById("choice").style.display = "none"){
        document.getElementById("choice").style.display = "block";
        document.getElementById("choice1").style.display = "none";
        document.getElementById("choice2").style.display = "none";
    }
});

document.getElementById('one-description').addEventListener('click', function(){
    if(document.getElementById("choice1").style.display = "none"){
        document.getElementById("choice").style.display = "none";
        document.getElementById("choice1").style.display = "block";
        document.getElementById("choice2").style.display = "none";
    }
});

document.getElementById('two-description').addEventListener('click', function(){
    if(document.getElementById("choice2").style.display = "none"){
        document.getElementById("choice").style.display = "none";
        document.getElementById("choice1").style.display = "none";
        document.getElementById("choice2").style.display = "block";
    }
});