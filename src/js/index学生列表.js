import React from 'react';
import ReactDOM from 'react-dom';
var appkey = "dem013_1545210570349";
function fetchAllStudents(){
  var stus = fetch("http://api/duyiedu.com/api/student/findAll?appkey="+appkey)
    .then(resp=>resp.json()).then(resp=>resp.data)
    console.log(stus)
}
fetchAllStudents()
let div = <div>yuansu</div>
ReactDOM.render(div,document.getElementById('root'))