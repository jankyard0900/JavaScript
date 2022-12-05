const result = confirm('本当に削除してもよいですか？');

if (result) {
  //　削除する処理
  console.log('削除しました。');
} else {
  console.log('キャンセルしました。');
}

console.log('ユーザーが回答したので処理が走ります。')