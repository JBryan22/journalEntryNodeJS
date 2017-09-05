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
