// var vowelCheck = function(word) {
//   var newWord = ''
//   word.forEach(function(letter){
//
//   });
// }
//
// var pigCheck = function(word) {
//   for (var index = 0; index < word.length; index +=1) {
//
//   }
// }



$(document).ready(function(){
  // $('#resultsdiv').hide();

  $('form#pigform').submit(function(event){
    event.preventDefault();

    var pigWord = $('input#piginput').val();

    $('#pigphrase').text(pigWord);
    $('#resultsdiv').show();
  });


  
});
