//Setting the sign up div to none-display
document.getElementById("sign-up").style.display = "none";

document.getElementById('register').addEventListener('click', function(){
    document.getElementById("sign-in").style.display = "none";
    document.getElementById("sign-up").style.display = "block";
});

document.getElementById('login').addEventListener('click', function(){
    document.getElementById("sign-up").style.display = "none";
    document.getElementById("sign-in").style.display = "block";
});