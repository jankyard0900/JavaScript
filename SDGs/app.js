const quiz = [
  {
    question: '国や地域などで一定の大多数より貧しい状態、等価可処分所得の中央値の半分に満たない状態を相対的貧困といいます。日本において何人に1人の割合で子供が相対的貧困状態におかれているでしょうか。次のうち適切なものを選択してください。',
    answers: [
      '7人',
      '3人',
      '12人',
      '10人'
    ],
    correct: '7人'
  }, {
    question: '地球上に100人しか人がいないとしたら、まともな住居がない人は何人の割合でいるでしょうか。次のうち適切なものを選択してください。',
    answers: [
      '5人',
      '17人',
      '10人',
      '20人'
    ],
    correct: '17人'
  }, {
    question: '世界銀行が定義する貧困の定義である国際貧困ラインについて、このラインを下回る水準を絶対的貧困と呼びますが、1日あたり約何円で生活する水準をいうでしょうか。次のうち適切なものを選択してください。',
    answers: [
      '1000円',
      '3000円',
      '200円',
      '1500円'
    ],
    correct: '200円'
  }
]
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.querySelectorAll('button')
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setupQuiz = function() {
  document.querySelector('#js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();

const clickHandler = function(e){
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score ++;
  } else {
    window.alert('不正解！');
  }

  quizIndex++

  if(quizIndex < quizLength){
    // 問題がまだあればこちらを実行
    setupQuiz();
  } else {
    // 問題数がもうなければこちらを実行
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
  }
};

// ボタンをクリックしたら正誤判定
let handleIndex = 0;
while (handleIndex < buttonLength){
  $button[handleIndex].addEventListener('click', function(e) {
    clickHandler(e);
  });
  handleIndex ++
}
