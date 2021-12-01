const quizData = [
    {
        question: "What is the capital of India?",
        a: "New Delhi",
        b: "Mumbai",
        c: "Chennai",
        correct:'a'
    },{
        question: "What is the capital of USA?",
        a:'Washington',
        b:'New York',
        c:'California',
        correct:'a'
    },{
        question: "What is the capital of Germany?",
        a:'Munich',
        b:'Berlin',
        c:'Hamburg',
        correct:'b'       
    },{
        question: "What is the capital of France?",
        a:'lyon',
        b:'nice',
        c:'paris',
        correct:'c'

    }
]

const questionEl = document.getElementById('question')
const aText=document.getElementById('a_text');
const bText=document.getElementById('b_text');
const cText=document.getElementById('c_text');

let currentQuiz = 0;

loadQuiz(); 

function loadQuiz(){

const currentQuizData = quizData[currentQuiz];                  

questionEl.innerText  = currentQuizData.question;           

 aText.innerText = currentQuizData.a;                                     
 bText.innerText = currentQuizData.b;                    
 cText.innerText = currentQuizData.c;

    currentQuiz++
}
