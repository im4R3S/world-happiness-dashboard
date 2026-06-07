import { useEffect, useState } from 'react'
import { loadData } from './utils/loadData'
import CountryTable from './components/CountryTable'
import SummaryCards from './components/SummaryCards'
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

      <p>{countries.length} countries loaded</p>

      <SummaryCards countries={countries} />
      <CountryTable countries={countries} />
    </main>
  )
}

export default App