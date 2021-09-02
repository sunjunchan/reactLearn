import React from 'react'
import './index.css'
export default function index() {
  // let a = '10'
  // let b = 10
  // console.log(a == b);

  // var a = {
  //   num: 1,
  //   valueOf: function () {
  //     return a.num++;
  //   },
  //   toString: function () {
  //     return a.num++;
  //   }
  // }
  // if(a == 1 && a==2 && a==3){
  //   console.log('aaa');
  // }
  // let s = '1213';
  // let arr = [];
  // let m = 0
  // for (let i = 0; i < s.length; i++) {
  //   let index = arr.indexOf(s[i])
  //   if (index !== -1) { //有
  //     arr.splice(0, index + 1);
  //   }
  //   arr.push(s[i])
  //   m = Math.max(arr.length, m)
  // }
  // console.log(m);
  function Car(color){
    // var this = Object.create(Car.prototype)
    this.color = color;
    this.num = 1000;
    this.run = function(){
      this.num ++;
    }
    // return this
  }

  function Aodi() {
    Car.call(this, 'black')
    this.pipai = 'aidi'
  }

  let car = new Car('red');
  const aodi = new Aodi()
  console.log('aodi: ', aodi)
  
  console.log(car,'car');
  class MyPromise {
    result = ''
    status = 'pending'
    sucessCbs = []

    resolve = (result) => {
      this.status = 'resolve'
      this.result = result
      this.sucessCbs.forEach((fn) => {
        fn(this.result)
      })
    }

    reject = (result) => {
      this.status = 'reject'
      this.result = result
    } 

    constructor(callback) {
      callback(this.resolve, this.reject)
    }

    then(fn) {
      // fn(this.result)
      this.sucessCbs.push(fn)
    }

    catch() {

    }
  }
  let arr = [1,2,4,5,6,7,84,3,2,4,5];
  // let length = arr.length;
  // for (var i = 0; i < length - 1; i++){
  //   for(var j = i + 1; j < length; j++){
  //     if (arr[i] > arr[j]){
  //       let bb = arr[i]
  //       arr[i] = arr[j]
  //       arr[j] = bb
  //     }
      
  //   }
  // }
  function sort(arr){
    if(arr.length <= 1){
      return arr;
    }
    let left = []
    let right = []
    let c = parseInt(arr.length / 2);
    let temp = arr.splice(c, 1)[0]
    for(let i = 0; i < arr.length; i++){
      if(arr[i]<arr[c]){
        left.push(arr[i])
      }else{
        right.push(arr[i])
      }
    }
    return [...sort(left),temp,...sort(right)];
    // return sort(left).concat([temp], sort(right))
  }
  console.log(sort(arr),'m');
  // function deepClone(target, origin){
  //   for(let prop in origin){
  //     if(origin.hasOwnProperty(prop)){
  //       if(origin[prop] !== null && typeof origin[prop] === 'object'){
  //         if (Object.prototype.toString.call(origin[prop]) === "[object Array]"){
  //           target[prop] = []
  //         }
  //         else{
  //           target[prop] = {}
  //         }
  //         deepClone(target[prop],origin[prop])
  //       }else{
  //         target[prop] = origin[prop]
  //       }
  //     }
  //   }
  // }
  // let obj ={
  //   a: [1,2,3,4],
  //   b: {
  //     c: [2,3,5,5]
  //   },
  //   d:1
  // }
  // let obj2 = {}
  // deepClone(obj2,obj);
  // console.log(obj2,'obj2')
  // new MyPromise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(1)
  //   }, 1000)
  // }).then((res) => {
  //   console.log('res: ', res)
  // })
  let arr4 = [1,2,3,4,[1,2,[3,3,4,[3,3,2]]]]
  // function getArr(arr){
  //   var newArr = []
  //   for(let i = 0;i < arr.length;i++){
  //     if(Array.isArray(arr[i])){
  //       newArr = [...newArr, ...getArr(arr[i])];
  //     }else{
  //       newArr.push(arr[i])
  //     }
  //   }
  //   return newArr;
  // }
  // console.log(getArr(arr4),'arr4')
  console.log(arr4.flat(Infinity),'arr4')
  var a2 = 100
  function invoke(){
    var a2 = 200
    fn()
  }
  function fn(){
    alert(a2)
  }
  invoke(fn)
  return (
    <div className="content">
      <div>
        xxxx
      </div>
      <div></div>
      <div></div>
    </div>
  )
}
