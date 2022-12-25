const questions = [
    {
        'question' : ' Three pipes A, B and C fill a tank in 6 hours. After working together for 2 hours, C is closed and A and B can fill remaining part in 7 hours. The number of hours taken by C alone to fill the tank is:',
        'a' : '10 hours',
        'b' : '12 hours',
        'c' : '14 hours',
        'd' : '16 hours',
        'correct' : 'c'
    },
    {
        'question' : ' Pipe A and B can fill a cistern in 10 hours and 15 hours respectively. When a third pipe C which work as an outlet pipe is also open then the cistern can be filled in 18 hours. The outlet pipe can empty a full cistern in–',
        'a' : '12 hours',
        'b' : '8 hours',
        'c' : '9 hours',
        'd' : '14 hours',
        'correct' : 'c'
    },
    {
        'question' : ' Tap A can fill a tank in 20 hours, tap B in 25 hours and tap C can empty a full tank in 30 hours. Starting with A, followed by B and C each tap opens alternatively for one hour period, all the tank gets filled up completely. In how many hour the tank will be filled by completely?',
        'a' : '51(11/15) hours',
        'b' : '52(2/3) hours',
        'c' : '24(4/11) hours',
        'd' : '51(15/11) hours',
        'correct' : 'a'
    },
    {
        'question' : ' If one pipe A can fill a tank in 20 minutes then 5 pipes, each of 20% efficiency of A, can fill the tank in:',
        'a' : '80 minutes',
        'b' : '100 minutes',
        'c' : '20 minutes',
        'd' : '25 minutes',
        'correct' : 'c'
    },
    {
        'question' : ' A, B and C three taps can fill a tank in 40 minutes, 60 minutes and 30 minutes respectively. A is opened first and at every 3rd minute B and C is opened. In how much time, tank can be filled.',
        'a' : '18 minutes',
        'b' : '32 minutes',
        'c' : '26 minutes',
        'd' : '24 minutes',
        'correct' : 'd'
    },
    {
        'question' : ' There are two taps in a tank A and B, which can fill the tank in 12 hours and 10 hours respectively and a third tap C, can empty the full tank in 15 hours. If tap A is opened at 7:00 am, tap B is opened at 9:00 am and tap C is opened at 10:00 am. On which time the tank will be completely filled?',
        'a' : '3:35 pm',
        'b' : '2:20 pm',
        'c' : '4:35 pm',
        'd' : '1:00 pm',
        'correct' : 'a'
    },
    {
        'question' : ' Two pipes can fill a cistern separately in 24 minutes and 40 minutes respectively. A waste pipe can drain off 30 litres per minute. If all three pipes are opened, the cistern fills in one hour. The capacity (in litres) of the cistern is–',
        'a' : '800 L',
        'b' : '400 L',
        'c' : '500 L',
        'd' : '600 L',
        'correct' : 'd'
    },
    {
        'question' : ' There are three taps in a tank A, B and C. A and B together can fill a tank in 60 minutes, B and C together in 40 minutes and C and A together in 30 minutes. In how much time each tap (working alone) can fill the bank.',
        'a' : '80 minutes, 240 minutes, 48 minutes',
        'b' : '40 minutes, 120 minutes, 24 minutes',
        'c' : '60 minutes, 250 minutes, 64 minutes',
        'd' : '72 minutes, 60 minutes, 30 minutes',
        'correct' : 'a'
    },
    {
        'question' : ' A pipe can fill a cistern in 9 hours. Due to a leak in its bottom, the cistern fills up in 10 hours. If the cistern is full, in how much time will it be emptied by the leak?',
        'a' : '70 hours',
        'b' : '80 hours',
        'c' : '90 hours',
        'd' : '100 hours',
        'correct' : 'c'
    },
    {
        'question' : ' A water tank can be filled by a tap in 30 minutes and another tap can fill it in 60 minutes. If both the tap are kept open for 5 minutes and then the first tap is closed, how long will it take for the tank to be filled?',
        'a' : '20 minutes',
        'b' : '25 minutes',
        'c' : '30 minutes',
        'd' : '45 minutes',
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