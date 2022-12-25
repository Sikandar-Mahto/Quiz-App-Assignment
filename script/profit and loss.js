const questions = [
    {
        'question' : ' The cost price of an article is Rs. 480. If it is to be sold at a profit of 6.25 percent, how much would be its selling price ?',
        'a' : '510',
        'b' : '530',
        'c' : '503',
        'd' : '519',
        'correct' : 'a'
    },
    {
        'question' : ' A tradesman marks his goods at 35% above its cost price and allows a discount of 17.5% for purchase in cash. What profit per cent does he make ?',
        'a' : '11.25',
        'b' : '12.125',
        'c' : '11.125',
        'd' : '11.375',
        'correct' : 'd'
    },
    {
        'question' : ' A trader sells his goods at 20% profit. Had he bought it at 10% more and sold it for Rs. 70 more, he would have earned a profit of 25%. Find the cost price of the goods.',
        'a' : '200',
        'b' : '800',
        'c' : '400',
        'd' : '600',
        'correct' : 'c'
    },
    {
        'question' : ' After getting two successive discounts Shalini got a shirt at Rs. 136 whose marked price is Rs. 200. If the second discount is 15% find the first discount.',
        'a' : '12.5%',
        'b' : '15%',
        'c' : '25%',
        'd' : '20%',
        'correct' : 'd'
    },
    {
        'question' : ' By selling an article for Rs 102, there is a loss of 15%, when the article is sold for Rs 134.40, the net result in the transaction is',
        'a' : '12% gain',
        'b' : '12% loss',
        'c' : '10% loss',
        'd' : '15% gain',
        'correct' : 'a'
    },
    {
        'question' : ' A profit of 8% is made by selling a shirt after offering a discount of 12%. If the marked price of the shirt is Rs. 1080, find its cost price.',
        'a' : '890',
        'b' : '880',
        'c' : '980',
        'd' : '900',
        'correct' : 'b'
    },
    {
        'question' : ' Kiran purchased a scooter for Rs. 52000. He sold it at loss of 10%. With that money he purchased another scooter and sold it at profit of 20%. What is his overall loss/profit?',
        'a' : 'Rs. 4160 profit',
        'b' : 'Rs. 2060 profit',
        'c' : 'Rs. 2560 loss',
        'd' : 'Rs. 1340 loss',
        'correct' : 'a'
    },
    {
        'question' : ' A shop-owner has 90 kg of Toor Dal. One day he decides to sell out all his Toor Dal stock. He sells some certain part of it at 40% profit and the remaining stock at 20% profit. If he gains 30% on the overall transaction, what is the quantity of each part of Toor Dal?',
        'a' : '40 kg, 50 kg',
        'b' : '45 kg, 45 kg',
        'c' : '30 kg, 60 kg',
        'd' : '64 kg, 26 kg',
        'correct' : 'b'
    },
    {
        'question' : ' A trader loses 20% by selling 45 oranges for Rs. 40. How many oranges should be sold for Rs. 24 so at to gain 20% in the transaction?',
        'a' : '16',
        'b' : '18',
        'c' : '24',
        'd' : '20',
        'correct' : 'b'
    },
    {
        'question' : ' 13 articles were bought for ₹ 5,980 and sold for ₹ 6,656. How much was the approximate profit percentage per article ?',
        'a' : '15%',
        'b' : '11%',
        'c' : '9%',
        'd' : '19%',
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