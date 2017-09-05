(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function JournalEntry(titleInput, bodyInput){
  this.title = titleInput;
  this.body = bodyInput;
}

JournalEntry.prototype.getVowels = function() {
  return this.body.replace(/[^aeiouAEIOU]/g, "").length;
};

JournalEntry.prototype.getConsonants = function() {
return this.body.replace(/[aeiouAEIOU]/g, "").length;
};

JournalEntry.prototype.getTeaser = function() {
  console.log(this.body);
  var first = this.body.split(".")[0];
  var splitSentence = first.split(" ");
  if (splitSentence.length < 9)
  {
    return first;
  } else {
    newArray = [];
    for (i = 0; i < 8; i++){
      newArray.push(splitSentence[i]);
    }
  newString = newArray.join(" ");
  return newString + "...";
  }
};

exports.journalModule = JournalEntry;

},{}],2:[function(require,module,exports){
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

},{"./../js/entry.js":1}]},{},[2]);
