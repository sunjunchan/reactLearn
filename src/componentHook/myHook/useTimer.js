/* eslint "react-hooks/exhaustive-deps": "off" */
import {useState,useEffect} from 'react'
/**
 * 在首次渲染后，启动一个计时器
 * 组件卸载后，清除该计时器
 * @param {*} func 
 * @param {*} duration 
 */
export default function useTimer(func,duration) {
  useEffect(()=>{
    const timer = setInterval(func,duration)
    return ()=>{
      clearInterval(timer);
    }
  },[])
}
