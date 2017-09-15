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
    goToNextPage($("#quiz-intro"), $("#quiz-q1"));
  });

  // Quiz-q1 button
  $("#quiz-q1 form").submit(function(event) {
    event.preventDefault();
    goToNextPage($("#quiz-q1"), $("#quiz-q2"));
  });

  // Quiz-q2 button
  $("#quiz-q2 form").submit(function(event) {
    event.preventDefault();
    goToNextPage($("#quiz-q2"), $("#quiz-q3"));
  });

  // Quiz-q3 button
  $("#quiz-q3 form").submit(function(event) {
    event.preventDefault();
    goToNextPage($("#quiz-q3"), $("#quiz-q4"));
  });

  // Quiz-q4 button
  $("#quiz-q4 form").submit(function(event) {
    event.preventDefault();
    goToNextPage($("#quiz-q4"), $("#quiz-q5"));
  });

  // Quiz-q5 button
  $("#quiz-q5 form").submit(function(event) {
    event.preventDefault();
    goToNextPage($("#quiz-q5"), $("#result"));
  });

  // Restart button
  $("#btn-quiz-restart").click(function() {
    location.reload(true);
  });
});
