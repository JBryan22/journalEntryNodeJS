var JournalEntry = require('./../js/entry.js').journalModule;

$(document).ready(function(){
  $('#entry').submit(function(event){
    event.preventDefault();
    var textBody = $('#body').val();
    var textTitle = $("#title").val();
    var userEntry = new JournalEntry(textTitle, textBody);

    $(".output").text("<li> # of Vowels in body:" + userEntry.getVowels() + "</li>");
    $(".output").text("<li># of Consonants in body" + userEntry.getConsonants() + "</li>");
    $(".output").text("<li>" + userEntry.getTeaser() + "</li>");
  });
});
