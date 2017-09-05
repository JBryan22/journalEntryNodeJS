var JournalEntry = require('./../js/entry.js').journalModule;

$(document).ready(function(){
  $('#entry').submit(function(event){
    event.preventDefault();
    var textBody = $('#body').val();
    var textTitle = $("#title").val();
    var userEntry = new JournalEntry(textTitle, textBody);

    $(".output").append("<li> # of Vowels in body:" + userEntry.getVowels() + "</li>");
    $(".output").append("<li># of Consonants in body" + userEntry.getConsonants() + "</li>");
    $(".output").append("<li>" + userEntry.getTeaser() + "</li>");
  });
});
