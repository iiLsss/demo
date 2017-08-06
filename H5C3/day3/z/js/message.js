// 创建数据库
var db = openDatabase('message', '1.0', '留言板', 5 * 1024 * 1024);
// 创建数据表
db.transaction(function(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS note (id INTEGER PRIMARY KEY ASC, note_content TEXT, note_date TEXT)');
});

// 得到提交表单
var noteForm = document.getElementById('note-form');

// 实时设置 Local Storage 存储用户输入的内容 
// HTMLFormElement.elements 你可以通过 name 或 id来访问对应的控件。
var noteFormText = noteForm.elements['note-content'];
// console.log(noteFormText);
noteFormText.addEventListener('keyup', function() {
    localStorage.setItem('note', noteFormText.value);
})

// 将 Local Storage 里的内容恢复到文本区域上    刷新页面内容不丢失
noteFormText.value = localStorage.getItem('note');

// 提交留言
function submitContent() {

}