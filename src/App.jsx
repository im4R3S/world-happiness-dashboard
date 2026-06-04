import { useEffect, useState } from 'react'
import { loadData } from './utils/loadData'
import './App.css'

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    async function fetchData() {
      const data = await loadData()
      setCountries(data)
    }

    fetchData()
  }, [])

  return (
    <main className="app">
      <h1>World Happiness Dashboard</h1>

      <p>Countries loaded: {countries.length}</p>
    </main>
  )
}

export default App