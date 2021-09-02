import { useEffect,useState } from "react";
/**
 * 当组件首次加载完成后，获取所以学生组件
 */
function getAllStudents(){
  return [
    {name:1},
    { name: 2 }, { name: 1 },
    { name: 2 }, { name: 1 },
    { name: 2 }, { name: 1 },
    { name: 2 }, { name: 1 },
    { name: 2 }, { name: 1 },
    { name: 2 }, { name: 1 },
    { name: 2 }, { name: 1 },
    { name: 2 }, { name: 1 },
    { name: 2 }, { name: 1 },
    { name: 2 }, { name: 1 },
    { name: 2 }, { name: 1 },
    { name: 2 }, { name: 1 },
    { name: 2 }, { name: 1 },
    { name: 2 }, { name: 1 },
    { name: 2 }, { name: 1 },
    { name: 2 }, { name: 1 },
    { name: 2 }, { name: 1 },
    { name: 2 }, { name: 1 },
    { name: 2 }, { name: 1 },
    { name: 2 },
  ]
}
export default function useAllStudents(page,limit){
  const a = getAllStudents()
  const [reps,setReps] = useState({})
  useEffect(()=>{
    (async ()=> {
      const reps = await getAllStudents(page,limit)
      setReps(reps);
    })();
  }, [page, limit])
  return reps;
}