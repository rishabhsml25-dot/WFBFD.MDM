let questions = document.querySelectorAll(".question");

questions.forEach(function(question) {

    question.addEventListener("click", function() {

        let answer = question.nextElementSibling;
        let icon = question.querySelector(".icon");

        answer.classList.toggle("hidden");

        if (answer.classList.contains("hidden")) {
            icon.textContent = "+";
        } else {
            icon.textContent = "-";
        }

    });

});