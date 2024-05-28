import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react"
import NewArticle from "./components/newArticle/NewArticle"

function App() {

/*   const [authors, setAuthors] =useState([])

  const authorsData = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BASEURL}/authors`)
      const data = await response.json()
      setAuthors(data)

    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    authorsData()
  }, []) */

  return (
    <NewArticle />
  );
}

export default App;
