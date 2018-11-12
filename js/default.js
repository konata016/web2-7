/* ダイアログを表示 */
window.alert('こんにちは世界!');
//コンソールに表示
console.log('こんにちは世界!');

//日時を表示
document.getElementById('choice1').textContent = new Date();

//確認ダイアログを表示
var result = window.confirm('準備おｋ？');
//結果を表示
if (result) {
    document.getElementById('choice2').textContent = 'おｋが押されました';
} else {
    document.getElementById('choice2').textContent = 'キャンセルが押されました';
}

//答えを用意
var number = Math.floor(Math.random() * 3);
var answer = parseInt(window.prompt('数あてゲーム!!0～2の数字を入力してください。'));

var message;
if (answer === number) {
    message = 'あたり';
} else if (answer < number) {
    message = '残念!もっと大きいです';
} else if (number < answer) {
    message = '残念!もっと小さいです';
} else {
    message = '0～3の数字を入力してください';
}

//結果を表示
document.getElementById('choice3').textContent = message;
