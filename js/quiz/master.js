// Put all your page JS here

$(function () {
    $('#slickQuiz').slickQuiz({
        disableResponseMessaging: true,
        perQuestionResponseMessaging: false,
        randomSortQuestions: true,
        randomSortAnswers: true,
        preventUnanswered: true,
        disableScore: true,
        disableRanking: true,
    });
});
