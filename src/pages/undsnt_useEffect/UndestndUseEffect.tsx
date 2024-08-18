import { useEffect, useRef } from "react";

const UndestndUseEffect = () => {

    const ref = useRef<HTMLInputElement>(null)
    useEffect(() => {
   if(ref.current) ref.current.focus();

 });

 useEffect(() => {
  document.title = "app"
 })

  return (
   <>
   <div>
   <div className="mb-2">
        <input type="text" ref={ref} className="w-[100%] h-[50px]  mt-2" />
        
       
      </div> 
   </div>
   </>
  )
}

export default UndestndUseEffect