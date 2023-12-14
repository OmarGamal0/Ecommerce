import { createContext, useState } from 'react'

export let moodContext = createContext({});

export function MoodContextProvider(props) {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };



  return (<>
  
 <moodContext.Provider  value={{toggleDarkMode,darkMode}}>
 {props.children}
 </moodContext.Provider>

  </>
  )
}

  