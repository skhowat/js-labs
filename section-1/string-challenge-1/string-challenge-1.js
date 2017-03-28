
function stripPuncutation(str) {
  var noPunc = '';
  for (var i = 0; i < str.length; i++) {
    if (',.:'.indexOf(str[i]) === -1) {
      noPunc += str[i];
    }
  }
  return noPunc;
}

function stringReverser(str) {
  var backwards = '';
  for (var i = str.length - 1; i > -1; i--) {
    backwards += str[i];
  }
  return backwards;
}

function truncate(sentence) {
  var newSentence = sentence.substr(0,15) + '...';
  return newSentence;
}

function truncateByCount(sentence, count) {

var output = sentence.substr(0, count);
return output + '...'
}

function capitalizeEveryOtherLetter(str) {
  var output = '';

  for (var i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      output += str[i].toUpperCase();
    }
    else {
      output += str[i];
    }
  }
  return output;
}
