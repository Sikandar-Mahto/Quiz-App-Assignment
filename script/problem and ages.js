const questions = [
    {
        'question' : ' The sum of the present ages of a father and his son is 60 years. Six years ago, Father’s age was five times the age of the son. After 6 years, son’s age will be:',
        'a' : '14 years',
        'b' : '16 years',
        'c' : '18 years',
        'd' : '20 years',
        'correct' : 'd'
    },
    {
        'question' : ' Q is as much younger than R as he is older than T. If the sum of the ages of R and T is 50 years, what is definitely the difference between R and Q’s age?',
        'a' : '5 years',
        'b' : '3 years',
        'c' : '7 years',
        'd' : 'Data inadequate',
        'correct' : 'd'
    },
    {
        'question' : ' The sum of the ages of a father and his son is 45 years. Five years ago, the product of their ages was 34. The ages of the son and the father are respectively:',
        'a' : '6 and 39',
        'b' : '8 and 28',
        'c' : '6 and 36',
        'd' : 'none of these',
        'correct' : 'a'
    },
    {
        'question' : ' The sum of the ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?',
        'a' : '4 years',
        'b' : '10 years',
        'c' : '18 years',
        'd' : 'none of these',
        'correct' : 'a'
    },
    {
        'question' : ' The difference between the ages of two persons is 10 years. Fifteen years ago, the elder one was twice as old as the younger one. The present age of the elder person is:',
        'a' : '30 years',
        'b' : '35 years',
        'c' : '40 years',
        'd' : '45 years',
        'correct' : 'b'
    },
    {
        'question' : ' In 10 years, A will be twice as old as B was 10 years ago. If A is now 9 years older than B, the present age of B is:',
        'a' : '20 years',
        'b' : '19 years',
        'c' : '39 years',
        'd' : '29 years',
        'correct' : 'c'
    },
    {
        'question' : ' If 6 years are subtracted from the present age of Gagan and the remainder is divided by 18, then the present age of his grandson Anup is obtained. If Anup is 2 years younger to Madan whose age is 5 years, then what is Gangan’s present age?',
        'a' : '50 years',
        'b' : '60 years',
        'c' : '70 years',
        'd' : '75 years',
        'correct' : 'b'
    },
    {
        'question' : ' My brother is 3 years elder to me. My father was 28 years of age when my sister was born while my mother was 26 years of age when I was born. If my sister was 4 years of age when my brother was born, then, what was the age of my father and mother respectively when my brother was born?',
        'a' : '32 yrs, 23 yrs',
        'b' : '33 yrs, 30 yrs',
        'c' : '35 yrs, 31 yrs',
        'd' : '35 yrs, 33 yrs',
        'correct' : 'a'
    },
    {
        'question' : ' The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?',
        'a' : '4 years',
        'b' : '8 years',
        'c' : '10 years',
        'd' : 'none of these',
        'correct' : 'a'
    },
    {
        'question' : ' A is two years older than B who is twice as old as C. If the total of the ages of A, B and C be 27, then how old is B?',
        'a' : '7',
        'b' : '8',
        'c' : '9',
        'd' : '10',
        'correct' : 'd'
    }
]

let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const questionBox = document.getElementById('questionBox')
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () =>{
    if (index === total){
        return endQuiz()
    }
    reset();
    const data = questions[index]
    questionBox.innerText = `${index+1}${data.question}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
    // console.log(data)
}

const submitQuiz = () =>{
    const data = questions[index];
    const ans = getAnswer()
    if (ans === data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked){
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () =>{
    optionInputs.forEach(
        (input) => {
            input.checked = false
        }
    )
}

const endQuiz = () => {
    document.getElementById('box').innerHTML = `
    <center>
        <h1>Quiz Result</h1></br>
        <h3>Thank You for playing this quiz.</h3></br>
        <h2>Total Question : 10</h2></br>
        <h2>${right}/${total} are correct</h2>
    </center>
    `
}

//initial invoke
loadQuestion();