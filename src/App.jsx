
import { useState } from 'react'
import Navbar from './Navbar'

const App = () => {

const[logo,setLogo] = useState("myAPP")

return (
    <div>

<Navbar data={logo}/>
    </div>

  )
}

export default App





