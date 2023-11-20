
var username = localStorage.getItem("username");
var level = localStorage.getItem("level");
var actual_xp = localStorage.getItem("actual_xp");
var target_xp = localStorage.getItem("target_xp");

const progressBar = document.getElementById('custom-progress');
const remainingProgress = document.querySelector('.remaining-progress');
const usernameLabel = document.querySelector('.username');
const levelLabel = document.querySelector('.level');

if(username == 'undefined' || username == null){
    localStorage.setItem("username", "Diego");
    usernameLabel.textContent = username
}

if(level == 'undefined' || level == null){
    localStorage.setItem("level", 1);
    levelLabel.textContent = level
}

if(actual_xp == 'undefined' || actual_xp == null){
    localStorage.setItem("actual_xp", 0); 

    let progressValue = localStorage.getItem("actual_xp");
    progressBar.style.width = `${progressValue}%`;
    remainingProgress.textContent = `${progressValue}%`;
}

if(target_xp == 'undefined' || target_xp == null){           
    localStorage.setItem("target_xp", 100);    
}


window.addEventListener("localDataStorage", function () {
    console.log("oi")
}, false);







