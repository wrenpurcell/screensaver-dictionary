'use strict';

$(function() {


let dictionary = [
  {
    word: 'delicious',
    definition: 'appealing to one of the bodily senses especially of taste or smell',
  },
  {
    word: 'sumptuous',
    definition: 'extremely costly, rich, luxurious, or magnificent',
  },
  {
    word: 'scrumptious',
    definition: 'extremely tasty; delicious'
  },
  {
    word: 'tasty',
    definition: 'producing a pleasant flavor and feeling in the mouth when eaten'
  },
  {
    word: 'succulent',
    definition: 'pleasantly juicy, rich in desirable'
  }
]


//create p element
let wordH1 = $('<h1></h1>');
//append p element to div
$('#mainDiv').append(wordH1);

//create h1 element
let definitionP = $('<p></p>');
//append to div
$('#mainDiv').append(definitionP);

let i = 0;
//increment through words/definition property in dictionary
//change value of html element
function wordLoop(){
let h1WordValue = dictionary[i].word;
let h1DefinitionValue = dictionary[i].definition;

wordH1.text(h1WordValue);
definitionP.text(h1DefinitionValue);

i ++;
if (i == dictionary.length){
  i = 0;
}
setTimeout(wordLoop, 3000);
}

wordLoop();


});
