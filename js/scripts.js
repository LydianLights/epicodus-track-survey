// Global variables tracking score for each language
var cSharpScore = 0;
var javaScore = 0;
var phpScore = 0;
var rubyScore = 0;
var cssScore = 0;
var lolcodeScore = 0;

// Increments global language scores based on quiz answers
var scoreQuestionResult = function(result) {
  if (result === "C#") {
    cSharpScore++;
  }
  else if (result === "Java") {
    javaScore++;
  }
  else if (result === "PHP") {
    phpScore++;
  }
  else if (result === "Ruby") {
    rubyScore++;
  }
  else if (result === "CSS") {
    cssScore++;
  }
  else if (result === "Lolcode") {
    lolcodeScore++;
  }
};

// Calculates quiz result based on score stored in global variables
// Returns string denoting result
var calculateResult = function() {
  for (i = 5; i > 0; i--) {
    if (cSharpScore === i) {
      return "C#";
    }
    else if (javaScore === i) {
      return "Java";
    }
    else if (phpScore === i) {
      return "PHP";
    }
    else if (rubyScore === i) {
      return "Ruby";
    }
    else if (cssScore === i) {
      return "CSS";
    }
    else if (lolcodeScore === i) {
      return "Lolcode";
    }
  }
};

// Returns a filepath string pointing to the result language logo
var getResultLogo = function(result) {
  // C# has illegal characters in name
  if (result === "C#") {
    return "img/CSharp.png";
  }
  else {
    return "img/" + result + ".png";
  }
};


// Hides current page and shows next with jQuery effect
var goToNextPage = function(currentPage, nextPage) {
  currentPage.slideUp();
  nextPage.slideDown();
};


$(document).ready(function() {
  // User info variables
  var userFirstName;
  var userLastName;
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
    userFirstName = $("#input-first-name").val();
    userLastName = $("#input-last-name").val();
    userAge = $("#input-age").val();
    userAbout = $("#input-about").val();
    goToNextPage($("#quiz-intro"), $("#quiz-q1"));
  });

  // Quiz-q1 button
  $("#quiz-q1 form").submit(function(event) {
    event.preventDefault();
    q1Answer = $("#quiz-q1 input:radio[name=quiz]:checked").val();
    scoreQuestionResult(q1Answer);
    goToNextPage($("#quiz-q1"), $("#quiz-q2"));
  });

  // Quiz-q2 button
  $("#quiz-q2 form").submit(function(event) {
    event.preventDefault();
    q2Answer = $("#quiz-q2 input:radio[name=quiz]:checked").val();
    scoreQuestionResult(q2Answer);
    goToNextPage($("#quiz-q2"), $("#quiz-q3"));
  });

  // Quiz-q3 button
  $("#quiz-q3 form").submit(function(event) {
    event.preventDefault();
    q3Answer = $("#quiz-q3 input:radio[name=quiz]:checked").val();
    scoreQuestionResult(q3Answer);
    goToNextPage($("#quiz-q3"), $("#quiz-q4"));
  });

  // Quiz-q4 button
  $("#quiz-q4 form").submit(function(event) {
    event.preventDefault();
    q4Answer = $("#quiz-q4 input:radio[name=quiz]:checked").val();
    scoreQuestionResult(q4Answer);
    goToNextPage($("#quiz-q4"), $("#quiz-q5"));
  });

  // Quiz-q5 button
  $("#quiz-q5 form").submit(function(event) {
    event.preventDefault();
    q5Answer = $("#quiz-q5 input:radio[name=quiz]:checked").val();
    scoreQuestionResult(q5Answer);

    var result = calculateResult();

    // Generate results page
    $(".result-first-name").text(userFirstName);
    $(".result-language-name").text(result);
    $(".result-language-logo").attr("src", getResultLogo(result));

    goToNextPage($("#quiz-q5"), $("#result"));

    console.log(userFirstName, userLastName, userAge, userAbout);
    console.log(q1Answer, q2Answer, q3Answer, q4Answer, q5Answer);
    console.log(cSharpScore, javaScore, phpScore, rubyScore, cssScore, lolcodeScore)
    console.log(result);
  });

  // Restart button
  $("#btn-quiz-restart").click(function() {
    location.reload(true);
  });
});
