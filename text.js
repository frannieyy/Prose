var afinn;

function preload(){
 afinn = loadJSON('AFINN-165.json');
  
}

function setup() {
  noCanvas();
  console.log(afinn);

  var txt = select('#texthere');
  txt.input(typing);

//Split word
  function typing(){
  	var textinput = txt.value();
  	var words = textinput.split(/\W/);

  	console.log(words);

  	var scoredwords = [];

    var mostscoredwords = [];

    var question_sentence = [];

  	var totalScore = 0;

    //keep track of current max score and word
    var max_score = -1000;
    var max_word = '';
    // loop through all words
  	for (var i = 0; i < words.length; i++){
  		var word = words[i].toLowerCase();

      //如果afinn list里有这个词
  		if (afinn.hasOwnProperty(word)){
  			var score = afinn[word];
  			console.log(word, score);

        
        if (score > max_score){
          max_score = score;
          max_word = word;
        }
  			
        totalScore += Number(score);
  			scoredwords.push(word + ':' + score + '');
        
  		}
  	}
    // print the max score word pair
    mostscoredwords.push(max_word);
    question_sentence.push('Why do you have the feeling of ' + max_word +' ?')

  	var scoreP = select('#score');
  	scoreP.html('score:' + score);

  	var comp = select('#comparative');
  	comp.html('comparative: ' + totalScore / words.length);

  	var wordlist = select('#wordlist');
  	wordlist.html('The word with strongest emotion is ' + mostscoredwords);

    var questions = select('#questions');
    questions.html(question_sentence);



  }
}

function draw() {
  
}