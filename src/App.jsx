import {useState,useCallback,useEffect} from "react"


 const App = () => {
  const[length,setLength]=useState(4);
  const[numberAllow,setNumberAllow]=useState(false);
  const[char,setChar]=useState(false);
  const[password,setPassword]=useState("");

  const generatepass= useCallback(()=>{
    let pass=""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllow) str+="0123456789"
    if(char) str+="!@#$%^&*(){}[]~`<>?"

    for (let i = 1 ; i < length ; i++){
      let char = Math.floor(Math.random()*str.length+1);
      pass += str.charAt(char)
    }
    setPassword(pass)
    console.log(pass);
  },[length,numberAllow,char,setPassword])

  useEffect(()=>{
    generatepass()
  },[length,numberAllow,char,generatepass])
  return (
    <>
    <div className="w-full mx-w-md mx-auto    shadow-md bg-gray-800 rounded-xl py-3 px-4  text-white text-center text-4xl font-bold ">
      <h1 className="text-white text-center my-6">Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-6">
      <input type="text" value={password} className="outline-none text-slate-950 w-full py-1 px-3" placeholder="password" readOnly/>
      <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
    </div>
  
    <div className="flex text-sm gap-x-2">
      <div className="flex items-center gap-x-1">
        <input type="range" min={6} max={100} value={length} className="cursor-pointer" onChange={(e)=>{setLength(e.target.value)}}></input>
        <label className="text-xl text-orange-600">Lenght :: {length} </label>
      </div>
      <div className="flex items-center gap-x-1">
      <input type="checkbox" defaultChecked={numberAllow} 
      onChange={()=>{
        setNumberAllow(
          (prev)=>!prev)
          }
        } ></input>
        <label className="text-xl">Number</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input type="checkbox" defaultChecked={char} 
      onChange={()=>{
        setChar(
          (prev)=>!prev)
          }
        } ></input>
        <label className="text-xl">Characters</label>
      </div>
    </div>
    </div>
    </>
    )
}

export default App;