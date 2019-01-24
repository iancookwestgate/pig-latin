var pig = [];
var a = 0;





function scrambleFirst(string) {
  string = string + "way";
  return string;



}

function noVowel(string) {
  string = string + "ay";
  return string;
}

function scramble(string, position) {
  var back = string.slice(0, position)
  var front = string.slice(position, string.length)
  string = front + back + "ay";
  return string;

}


function scrambleNumber(string) {
  return string;
}

$(document).ready(function() {

  $("#form").submit(function(event) {

    var pigLatinInput = $("input#pigLatin").val();

    var words = pigLatinInput.split(" ");
    var wordsLength = words.length;
    var position = 0;
    words.forEach(function(word) {
      var letters = word;
      position = 0;
      mainLoop: {

        for(var b = 0; b < letters.length; b = b + 1) {
          var firstLetter = letters[0];
          var vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
          var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
          var c = 0
          for(var d = 0; d < vowels.length; d = d + 1) {
            if(firstLetter == vowels[d]) {
              var string = word.toString();
              var newWord = scrambleFirst(word);
              pig[a] = newWord;
              a = a + 1;
              break mainLoop;
            }
            if(letters[b] == numbers[c]) {
              var newWord = scrambleNumber(word);
              pig[a] = newWord;
              a = a + 1;
              break mainLoop;
            }

            if(letters[b] == vowels[d]) {

              var newWord = scramble(word, position);
              pig[a] = newWord;
              a = a + 1;
              break mainLoop;
            }

            c = c + 1;

          }


          position = position + 1;


        }
        if(vowels.length == 10) {
          var newWord = noVowel(word);
          pig[a] = newWord;
          a = a + 1;
          break mainLoop;

        }
    }



    });

    var newSentence = pig.toString();
    var l = 0;
    while (l < newSentence.length) {
      newSentence = newSentence.replace(",", " ")
      l = l + 1;
    }
    $(".pigLatin").text(newSentence);


    event.preventDefault();

  });

});
