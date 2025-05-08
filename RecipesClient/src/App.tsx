import './App.css'
import Home from './components/Home'
import UserContext from './components/userContext'
import CategoryContext from './components/categoriesContext'


function App() {

  return (
   <CategoryContext>
   <UserContext>
    <>
    <Home/>
    </>
  </UserContext>
  </CategoryContext>
  )
}

export default App
