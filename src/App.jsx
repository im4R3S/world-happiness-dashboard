import { useEffect, useState } from 'react'
import { loadData } from './utils/loadData'
import CountryTable from './components/CountryTable'
import SummaryCards from './components/SummaryCards'
import Filters from './components/Filters'
import './App.css'

function App() {
  const [countries, setCountries] = useState([])
  const [selectedRegion, setSelectedRegion] = useState('all')

  useEffect(() => {
    async function fetchData() {
      const data = await loadData()
      setCountries(data)
    }

    fetchData()
  }, [])

  const regions = [...new Set(countries.map((country) => country.Region))].sort()

  const filteredCountries =
    selectedRegion === 'all'
      ? countries
      : countries.filter((country) => country.Region === selectedRegion)

  return (
    <main className="app">
      <h1>World Happiness Dashboard</h1>

      <p>{filteredCountries.length} countries loaded</p>

      <SummaryCards countries={filteredCountries} />

      <Filters
        regions={regions}
        selectedRegion={selectedRegion}
        onRegionChange={setSelectedRegion}
      />

      <CountryTable countries={filteredCountries} />
    </main>
  )
}

export default App