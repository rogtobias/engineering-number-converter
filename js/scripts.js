$(document).ready(function() {
  $("form#mainform").submit(function(event){
    var binary = $("input#binary").val();


  });
});

var ready = function() {
  var numbers = binary.split("");
  var numbersResult = [];
  for (var i = 0; i < numbers.length; i++) {
    var result = conversion(numbers[i]);

  }
  return numbersResult;
};

var conversion = function(number) {
  for (var i = 0; i < number.length; i++) {
    var result = [];
    if (numbers[0] === "1") {
      result.push("128");
    } else if (numbers[1] === "1") {
      result.push("")
    }
  }
};
