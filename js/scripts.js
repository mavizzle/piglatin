// var vowelCheck = function(word) {
//   var lowWord = word.toLowerCase();
//   var newWord = '';
//   var consts = '';
//   newWord.forEach(function(letter){
//     if (letter != 'a' && letter != 'e' && letter != 'i' && letter != 'o' && letter != 'u') {
//       consts.pop(letter);
//     } else {
//
//     }
//   });
// }

// var pigCheck = function(word) {
//   for (var index = 0; index < word.length; index +=1) {
//
//   }
// }

var quCheck = function(word) {
  var lowWord = word.toLowerCase();
  if (lowWord[0] === 'q' && lowWord[1] === 'u') {
    return word.slice(2) + word[0] + word[1] + 'ay';
  } else {
    return word;
  }




  // for (var index = 0; index < word.length; index +=1) {
  //   if (lowWord.charAt(index) != 'a' && lowWord.charAt(index) != 'e' && lowWordindex] != 'i' && lowWord.charAt(index) != 'o' && lowWord.charAt(index) != 'u') {
  //     return word;
    // };
  // };
};


$(document).ready(function(){
  $('#resultsdiv').hide();

  $('form#pigform').submit(function(event){
    event.preventDefault();
    $('#pigphrase').empty();

    var pigWord = $('input#piginput').val();

    $('#pigphrase').text(pigWord);
    $('#resultsdiv').show();
  });



});
