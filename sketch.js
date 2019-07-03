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

  	var totalScore = 0;

  	for (var i = 0; i < words.length; i++){
  		var word = words[i].toLowerCase();
      //如果afinn list里有这个词
  		if (afinn.hasOwnProperty(word)){
  			var score = afinn[word];
  			console.log(word, score);
  			totalScore += Number(score);
  			scoredwords.push(word + ':' + score + '');
        mostscoredwords
  		}
  	}

  	var scoreP = select('#score');
  	scoreP.html('score:' + score);

  	var comp = select('#comparative');
  	comp.html('comparative: ' + totalScore / words.length);

  	var wordlist = select('#wordlist');
  	wordlist.html(mostscoredwords);



  }
}

function draw() {
  
}