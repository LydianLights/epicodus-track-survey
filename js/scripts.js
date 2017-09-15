var goToNextPage = function(currentPage, nextPage) {
  currentPage.slideUp();
  nextPage.slideDown();
}

$(document).ready(function() {
  // User info variables
  var userName;
  var userAge;
  var userAbout;
  var q1Answer;
  var q2Answer;
  var q3Answer;
  var q4Answer;
  var q5Answer;

  // Quiz start button
  $("#btn-quiz-start").click(function() {
    goToNextPage($("#intro"), $("#quiz-intro"));
  });

  // Quiz-intro button
  $("#quiz-intro form").submit(function(event) {
    event.preventDefault();
    userName = $("#input-name").val();
    userAge = $("#input-age").val();
    userAbout = $("#input-about").val();
    goToNextPage($("#quiz-intro"), $("#quiz-q1"));
  });

  // Quiz-q1 button
  $("#quiz-q1 form").submit(function(event) {
    event.preventDefault();
    q1Answer = $("#quiz-q1 input:radio[name=quiz]:checked").val();
    goToNextPage($("#quiz-q1"), $("#quiz-q2"));
  });

  // Quiz-q2 button
  $("#quiz-q2 form").submit(function(event) {
    event.preventDefault();
    q2Answer = $("#quiz-q2 input:radio[name=quiz]:checked").val();
    goToNextPage($("#quiz-q2"), $("#quiz-q3"));
  });

  // Quiz-q3 button
  $("#quiz-q3 form").submit(function(event) {
    event.preventDefault();
    q3Answer = $("#quiz-q3 input:radio[name=quiz]:checked").val();
    goToNextPage($("#quiz-q3"), $("#quiz-q4"));
  });

  // Quiz-q4 button
  $("#quiz-q4 form").submit(function(event) {
    event.preventDefault();
    q4Answer = $("#quiz-q4 input:radio[name=quiz]:checked").val();
    goToNextPage($("#quiz-q4"), $("#quiz-q5"));
  });

  // Quiz-q5 button
  $("#quiz-q5 form").submit(function(event) {
    event.preventDefault();
    q5Answer = $("#quiz-q5 input:radio[name=quiz]:checked").val();
    goToNextPage($("#quiz-q5"), $("#result"));

    // console.log(userName, userAge, userAbout);
    // console.log(q1Answer, q2Answer, q3Answer, q4Answer, q5Answer);
  });

  // Restart button
  $("#btn-quiz-restart").click(function() {
    location.reload(true);
  });
});
