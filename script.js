function checkAnswers() {
    var score = 0;
    var q1 = document.querySelector('input[name="q1"]:checked');
    var q2 = document.querySelector('input[name="q2"]:checked');
    var q3 = document.querySelector('input[name="q3"]:checked');
    var q4 = document.querySelector('input[name="q4"]:checked');
    var q5 = document.querySelector('input[name="q5"]:checked');
    var q6 = document.querySelector('input[name="q6"]:checked');
    var q7 = document.querySelector('input[name="q7"]:checked');
    var q8 = document.querySelector('input[name="q8"]:checked');
    var q9 = document.querySelector('input[name="q9"]:checked');
    var q10 = document.querySelector('input[name="q10"]:checked');
 
    if (q1 && q1.value === "a") {
       score++;
    }
    if (q2 && q2.value === "a") {
       score++;
    }
    if (q3 && q3.value === "a") {
       score++;
    }
    if (q4 && q4.value === "b") {
       score++;
    }
    if (q5 && q5.value === "c") {
       score++;
    }
    if (q6 && q6.value === "c") {
       score++;
    }
    if (q7 && q7.value === "c") {
       score++;
    }
    if (q8 && q8.value === "a") {
       score++;
    }
    if (q9 && q9.value === "c") {
       score++;
    }
    if (q10 && q10.value === "b") {
       score++;
    }
 
    var modal = document.getElementById("resultModal");
    var scoreDisplay = document.getElementById("score");
    var gradeDisplay = document.getElementById("grade");
 
    scoreDisplay.textContent = score;
    gradeDisplay.textContent = score;
 
    modal.style.display = "block";
 }
 
 function closeModal() {
    var modal = document.getElementById("resultModal");
    modal.style.display = "none";
 
    var selectedInputs = document.querySelectorAll('input[type="radio"]:checked');
    selectedInputs.forEach(function (input) {
       input.checked = false;
    });
 }
 
 function switchTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
       tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < tablinks.length; i++) {
       tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
 }
 
 function switchInnerTab(tabName) {
    if (tabName == 'htmlTab') {
       document.getElementById('htmlTab_button').classList.add("active");
       document.getElementById('jsTab_button').classList.remove("active");
       document.getElementById('jsTab').style.display = "none";
       document.getElementById('htmlTab').style.display = "block";
    } else {
       document.getElementById('htmlTab_button').classList.remove("active");
       document.getElementById('jsTab_button').classList.add("active");
       document.getElementById('jsTab').style.display = "block";
       document.getElementById('htmlTab').style.display = "none";
    }
 }