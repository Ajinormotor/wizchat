import { useState } from "react"

const useHook = () => {


    // Hide Conversation
const [ hideConversation, setHideConversation] = useState(false)
 const handleHideConversation = ()=> {
    setHideConversation(!hideConversation)

  }
  


  return { 
    handleHideConversation,hideConversation
 }


}


export default useHook;


