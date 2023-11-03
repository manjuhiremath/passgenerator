import {useState,useCallback,useEffect, useRef} from "react"


 const App = () => {
  const[length,setLength]=useState(10);
  const[numberAllow,setNumberAllow]=useState(false);
  const[char,setChar]=useState(false);
  const[password,setPassword]=useState("");

  const passref=useRef(null)

  const passwordCoping = useCallback(()=>{
    
    passref.current?.select();
    window.navigator.clipboard.writeText(password)

  },[password])

  const generatepass= useCallback(()=>{
    let pass=""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllow) str+="0123456789"
    if(char) str+="!@#$%^&*(){}[]~`<>?"

    for (let i = 0 ; i < length; i++){
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
   
    <div className="mx-auto max-w-3xl w-full  shadow-md bg-gray-900 rounded-lg px-4 py-3 my-60">
      <h1 className="text-3xl text-orange-600 text-center my-6">Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-6">
      <input type="text" value={password} ref={passref} className="outline-none text-slate-950 w-full py-1 px-3" placeholder="password" readOnly/>
      <button onClick={passwordCoping}  className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
    </div>
  
    <div className="flex text-sm gap-x-2">
      <div className="flex items-center gap-x-1">
        <input type="range" min={10} max={99} value={length} className="cursor-pointer mx-8" onChange={(e)=>{setLength(e.target.value)}}></input>
        <label className="text-xl text-orange-600 mx-10">Lenght :: {length} </label>
      </div>
      <div className="flex items-center gap-x-1 mx-8">
      <input type="checkbox" defaultChecked={numberAllow} 
      onChange={()=>{
        setNumberAllow(
          (prev)=>!prev)
          }
        } ></input>
        <label className="text-xl text-orange-600">Number</label>
      </div>
      <div className="flex items-center gap-x-1 mx-8">
      <input type="checkbox" defaultChecked={char} 
      onChange={()=>{
        setChar(
          (prev)=>!prev)
          }
        } ></input>
        <label className="text-xl text-orange-600">Characters</label>
      </div>
    </div>
    </div>

    )
}

export default App;