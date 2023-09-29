import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {
  const [textInput, setTextInput] = useState<string>("")
  const [showPost, setShowPost] = useState<boolean>(false)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value
    setTextInput(userInput)
  }

  const shitPost = () => {
    setShowPost(true)
  }
  return (
    <>
      <Navbar/>
      <div className="flex flex-col justify-center items-center">
        This is just to test the tailwind CSS. Type someone's name below. 
        <input
        type="text"
        placeholder="type something here"
        className="w-[300px] ml-6 bg-black text-white focus:outline-red"
        value={textInput}
        onChange={handleInputChange}
        />
        <button onClick={shitPost}> Button here
          {showPost && <p className="text-xl">{textInput}, why are you gae?</p>}
        </button>
      </div>
      <Footer/>
    </>
  )
}

export default App
