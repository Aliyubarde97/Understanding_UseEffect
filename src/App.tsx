import { useEffect, useRef } from "react" 

function App() {

 const ref = useRef<HTMLInputElement>(null)
 useEffect(() => {
   if(ref.current) ref.current.focus();

 });

 useEffect(() => {
  document.title = 'My App'
 })
 
  return (
    <>
      <div className="mb-2">
        <input type="text" ref={ref} className="w-[100%] h-[50px]  mt-2" />
       
      </div> 
    </>
  )
}

export default App
