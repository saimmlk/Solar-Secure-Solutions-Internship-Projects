let arr=[
    {
        question : 'Inside which HTML element do we put the JavaScript?',
        a:"<scripting>",
        b:"<script>",
        c:"<link>",
        d:"<javascript>",
        correct:'b'
    },
    {
        question : 'Which of the following function of Array object calls a function for each element in the array?',
        a:"concat()",
        b:"every()",
        c:"filter()",
        d:"forEach()",
        correct:'d'
    },
    {
        question : 'Which of the following function of Array object adds one or more elements to the front of an array and returns the new length of the array?',
        a:"unshift()",
        b:" sort()",
        c:"splice()",
        d:"toString()",
        correct:'a'
    },
    {
        question : 'How can you get the total number of arguments passed to a function?',
        a:"Using args.length property",
        b:"Using arguments.length property",
        c:"Both of the above.",
        d:"None of the above.",
        correct:'b'
    },
    {
        question : 'Which built-in method removes the last element from an array and returns that element?',
        a:"last()",
        b:"get()",
        c:"pop()",
        d:"shift()",
        correct:'c'
    }
]
let quiz=document.getElementById("quiz");
let ques=document.getElementById("ques");
let answer=document.querySelectorAll(".answer");
let op_a=document.getElementById('a_val')
let op_b=document.getElementById('b_val')
let op_c=document.getElementById('c_val')
let op_d=document.getElementById('d_val')
let sub=document.getElementById('submit');

let currentQuestion=0;
let score=0;

loadQuiz();

function loadQuiz()
{
    deselect();
    ques.innerHTML=arr[currentQuestion].question
    op_a.innerText=arr[currentQuestion].a
    op_b.innerText=arr[currentQuestion].b
    op_c.innerText=arr[currentQuestion].c
    op_d.innerText=arr[currentQuestion].d
}

function deselect()
{
    answer.forEach((ans)=>{ans.checked=false})
}

sub.addEventListener('click', ()=>{
    let seletedOption;
    answer.forEach((ans)=>{
        if(ans.checked)
        {
            seletedOption=ans.id;
        }
    })

    if(seletedOption==arr[currentQuestion].correct)
    {
        score=score+1;
    }
    currentQuestion=currentQuestion+1;
    if(currentQuestion==arr.length){
        document.getElementById('quiz').innerHTML=`<h2>You Have answered ${score} correctly out of ${arr.length} question  THANKS</h2> `
    }
    else{
        loadQuiz();
    }
})