(function(){
  function buildQuiz(){
  
    const output = [];

  
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

       
        const answers = [];

   
        for(letter in currentQuestion.answers){

          
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

       
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

   
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){
 
    const answerContainers = quizContainer.querySelectorAll('.answers');

    
    let numCorrect = 0;

 
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

     
      if(userAnswer === currentQuestion.correctAnswer){
 
        numCorrect++;

       
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
   
      else{
        
        answerContainers[questionNumber].style.color = 'red';
      }
    });

   
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "Koje je godine osnovan Facebook?",
      answers: {
        a: "2002.",
        b: "2003.",
        c: "2004."
      },
      correctAnswer: "c"
    },
    {
      question: "Izbaci uljeza!",
      answers: {
        a: "Tony Smith",
        b: "Noah Glass",
        c: "Jack Dorsey",
		d: "Evan Williams"
      },
      correctAnswer: "a"
    },
    {
      question: "Koji je prvi video koji je presao milijardu pregleda na YT?",
      answers: {
        a: "Wiz Khalifa-See You Again",
        b: "PSY-Gangnam Style",
        c: "Luis Fonsia-Despacito"
        
      },
      correctAnswer: "b"
    },
	{
      question: "Instagram je pokrenut na ______ uredajima 2010. godine.",
      answers: {
        a: "Tizen",
        b: "Windows",
        c: "iOS"
        
      },
      correctAnswer: "c"
    }
  ];

  
  buildQuiz();

 
  submitButton.addEventListener('click', showResults);
})();
