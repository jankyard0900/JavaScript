function delayTask () {
  console.log('１秒毎に繰り返し実行される。');
}

const timerId = setInterval(delayTask, 1000);
clearInterval(timerId);