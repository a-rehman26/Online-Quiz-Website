// Add this JavaScript code at the end of your <body> or in a <script> tag just before </body>
document.addEventListener("DOMContentLoaded", function () {
    const startQuizButton = document.getElementById("startQuizButton");
    const quizModal = document.getElementById("quizModal");
    const htmlQuizButton = document.getElementById("htmlQuizButton");
    const cssQuizButton = document.getElementById("cssQuizButton");

    startQuizButton.addEventListener("click", function () {
        quizModal.style.display = "block";
    });

    htmlQuizButton.addEventListener("click", function () {
        // Redirect to HTML quiz page or perform any desired action
        // window.location.href = "html_quiz.html";
        alert("You selected HTML Quiz");
        quizModal.style.display = "none";
    });

    cssQuizButton.addEventListener("click", function () {
        // Redirect to CSS quiz page or perform any desired action
        // window.location.href = "css_quiz.html";
        alert("You selected CSS Quiz");
        quizModal.style.display = "none";
    });

    cssQuizButton.addEventListener("click", function () {
        // Redirect to CSS quiz page or perform any desired action
        // window.location.href = "css_quiz.html";
        alert("You selected CSS Quiz");
        quizModal.style.display = "none";
    });

    cancelButton.addEventListener("click", function () {
        quizModal.style.display = "none";
    });

});


//


function showResult() {

    let question1 = document.formQuiz.question1.value;
    let question2 = document.formQuiz.question2.value;
    let question3 = document.formQuiz.question3.value;

    let correctAnswer = 0;

    if (question1 === "Hyper Text Markup Language") {
        correctAnswer++;
    }
    if (question2 === "h1") {
        correctAnswer++;
    }
    if (question3 === "Cascading Sheet Style") {
        correctAnswer++;
    }

    let answer =
        [
            "👏 Excellent! You nailed it!",
            "👍 Not bad, but there's room for improvement.",
            "😕 You really need to step up your performance!"
        ];

    let range;

    if (correctAnswer === 0 || correctAnswer === 1) {
        range = 2;
    }
    else if (correctAnswer === 2) {
        range = 1;
    }
    else if (correctAnswer === 3 || correctAnswer === 4) {
        range = 0;
    }
    else {
        answer.document.write("Error result not found try again:");
    }

    let score = correctAnswer;

    document.getElementById("resultPage").style.display = "block";
    // document.getElementById("AnswerDiv").style.visibility = "visible";
    document.getElementById("answer").innerHTML = answer[range];
    // document.getElementById("").innerHTML = "You got " + correctAnswer + " correct. ";

    document.getElementById("correct_num").textContent = `${score} / 3`;

}
