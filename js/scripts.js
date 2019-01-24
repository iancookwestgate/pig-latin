
var pig = [];
var b = 0;

function scramble(string, position) {
  var pos = [];
  var i = 0;
  var e = 0;
  if(position == -1) {
    string = string + "ay";
  }
  if(position == 0) {
    string = string + "way"
  }
  if(position > 0) {
    var sendToBack  = string.slice(0, position)
    var arr = string.split(" ");
    var length = arr.length;
    while(i < position) {
      i = i + 1;
    }
    e = e + 1;
    var back = string.slice(0, i);
    var front = string.slice(e, string.length);
    string = front + back;
    alert(position);
    string = string + "ay";
  }

console.log(string);
  return string;



}


$(document).ready(function() {

  $("#form").submit(function(event) {
    var pigLatinInput = $("input#pigLatin").val();

    var words = pigLatinInput.split(" ");
    var wordsLength = words.length;
    var vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
    words.forEach(function(word) {
      var wordLength = word.length;
      var letters = [];
      var newWord = "";
      for (var j = 0; j < wordLength; j++) {
        letters[j] = word.charAt(j);
      }
      lettersLength = letters.length;
      mainLoop: {
        for (var j = 0; j < lettersLength; j = j + 1) {
          for(var a = 0; a < vowels.length; a = a + 1) {
            var i = 0;

            if (letters[j] == vowels[a]) {
              newWord = scramble(word, i);
              pig[b] = newWord
              b = b + 1;
              break mainLoop;
            }
            i = i + 1;
          }
        }
      }
    });


    alert(pig);
    var c = 0;
    var newSentence = pig.toString();
    while (c < newSentence.length) {
      newSentence = newSentence.replace(",", " ")
      c = c + 1;
    }

    $(".pigLatin").text(newSentence);


    event.preventDefault();

  });

});
