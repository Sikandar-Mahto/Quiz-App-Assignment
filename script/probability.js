const questions = [
    {
        'question' : ' Two unbiased coins are tossed. What is the probability of getting at most one head?',
        'a' : '1/2',
        'b' : '1/4',
        'c' : '3/2',
        'd' : '3/4',
        'correct' : 'd'
    },
    {
        'question' : ' One card is drawn from a pack of 52 cards. What is the probability that the card drawn is either a red card or a king?',
        'a' : '1/2',
        'b' : '6/13',
        'c' : '7/13',
        'd' : '27/52',
        'correct' : 'c'
    },
    {
        'question' : ' A basket contains 6 blue, 2 red, 4 green and 3 yellow balls. If four balls are picked up at random, what is the probability that 2 are red and 2 are green?',
        'a' : '1/3',
        'b' : '2/455',
        'c' : '4/15',
        'd' : '5/27',
        'correct' : 'b'
    },
    {
        'question' : ' In a class, there are 15 boys and 10 girls. Three students are selected at random. The probability that the selected students are 2 boys and 1 girl, is',
        'a' : '1/50',
        'b' : '3/25',
        'c' : '21/46',
        'd' : '25/117',
        'correct' : 'c'
    },
    {
        'question' : 'A bag contains 4 red balls, 6 blue balls and 8 pink balls. One ball is drawn at random and replace with 3 pink balls. A probability that the first ball drawn was either red or blue in colour and the second ball drawn was pink in colour?',
        'a' : '11/30',
        'b' : '11/36',
        'c' : '12/21',
        'd' : '13/17',
        'correct' : 'b'
    },
    {
        'question' : ' A problem is given to three students whose chances of solving it are 1/2, 1/3 and 1/4 respectively. What is the probability that the problem will be solved?',
        'a' : '1/4',
        'b' : '1/2',
        'c' : '3/4',
        'd' : '7/12',
        'correct' : 'c'
    },
    {
        'question' : ' Tickets numbered 1 to 20 are mixed up and then a ticket is drawn at random. What is the probability that the ticket drawn has a number which is a multiple of 3 or 5?',
        'a' : '1/2',
        'b' : '3/5',
        'c' : '9/20',
        'd' : '8/15',
        'correct' : 'c'
    },
    {
        'question' : ' Two cards are drawn at random from a pack of 52 cards.what is the probability that either both are black or both are queen?',
        'a' : '55/221',
        'b' : '55/190',
        'c' : '19/221',
        'd' : '10/221',
        'correct' : 'a'
    },
    {
        'question' : ' A bag contains 4 white, 5 red and 6 blue balls. Three balls are drawn at random from the bag. The probability that all of them are red, is:',
        'a' : '2/91',
        'b' : '1/22',
        'c' : '3/22',
        'd' : '2/77',
        'correct' : 'a'
    },
    {
        'question' : ' A bag contains 6 white and 4 black balls .2 balls are drawn at random. Find the probability that they are of same colour.',
        'a' : '1/2',
        'b' : '7/15',
        'c' : '8/15',
        'd' : '1/9',
        'correct' : 'b'
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