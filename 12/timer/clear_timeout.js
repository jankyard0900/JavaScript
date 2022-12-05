function delayTask () {
  console.log('２秒後に実行する。');
}

const timerId = setTimeout(delayTask, 6000);
clearTimeout(timerId);

//　これで６秒後にdelayTask関数を実行する予定をキャンセル出来る。