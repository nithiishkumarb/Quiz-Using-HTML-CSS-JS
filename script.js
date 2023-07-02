const data = [
    {
      id: 1,
      question: "Which of these fish is actually a fish?",
      answers: [
        { answer: "swordfish", isCorrect: true },
        { answer: "jellyfish", isCorrect: false },
        { answer: "starfish", isCorrect: false },
        { answer: "crayfish", isCorrect: false },
      ],
    },
    {
      id: 2,
      question: "A flutter is a group of:",
      answers: [
        { answer: "bees", isCorrect: false },
        { answer: "penguins", isCorrect: false },
        { answer: "butterflies", isCorrect: true },
        { answer: "camels", isCorrect: false },
      ],
    },
    {
      id: 3,
      question: "A group of which animals is referred to as a wake?",
      answers: [
        { answer: "bats", isCorrect: false },
        { answer: "vultures", isCorrect: true },
        { answer: "ants", isCorrect: false },
      ],
    },
  ];
  
  const game=document.querySelector(".game")
  const questions=document.querySelector(".question")
  const answerscontainer=document.querySelector(".answers")
  const submitbtn=document.querySelector(".submitbtn")
  const playagainbtn=document.querySelector(".playagain")
  const result=document.querySelector(".result");

  let qindex=0;
  let crtans=0;
  let wronganswer=0;
  let selectedAnswer;
  let total=0;

const playagain=()=>{
    qindex=0;
    crtans=0;
    wronganswer=0;
    total=0;
    showquestion[qindex];
};
playagainbtn.addEventListener("click",()=>{
    playagain();
    result.style.display="none";
    game.style.display="flex";
});
const resultpage=()=>{
    result.style.display="flex ";
    game.style.display="none";
    result.querySelector(".correct").textContent=`correct answers: ${crtans}`;
    result.querySelector(".wrong").textContent=`Wrong answers: ${wronganswer}`
    result.querySelector(".score").textContent=`Score: ${(crtans-wronganswer)*10}`
};
const showquestion=(qNum)=>{
    if(qindex === data.length) return resultpage();
    selectedAnswer=null;
    questions.textContent=data[qNum].question;
    answerscontainer.innerHTML=data[qNum].answers.map((item,index)=>
    `   <div class="answer">
            <input name="answer" type="radio" id=${index} value=${item.isCorrect}>
            <label for=${index}>${item.answer}</label>
        </div>
    `).join("");
    selectAnswer();
};
const selectAnswer=()=>{
    answerscontainer.querySelectorAll("input").forEach((el)=>{
        el.addEventListener("click",(e)=>{
            selectedAnswer= e.target.value;
        });
    });
};
const submitAnswer=()=>{
    submitbtn.addEventListener("click",()=>{
        if(selectedAnswer !== null){
        selectedAnswer ==="true"? crtans++ : wronganswer++;
        qindex++;
        showquestion(qindex);
        }else alert("Select the answer")
    });
};
showquestion(qindex);
submitAnswer();
