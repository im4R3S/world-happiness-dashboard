function SummaryCards({ countries }) {
  const validCountries = countries.filter((country) => {
    const happiness = Number(country['Score 2019'])
    const gdp = Number(country['GDP 2019'])

    return country.Country && country.Region && !Number.isNaN(happiness) && !Number.isNaN(gdp)
  })

  const countryCount = validCountries.length

  const averageHappiness = countryCount
    ? validCountries.reduce((sum, country) => sum + Number(country['Score 2019']), 0) / countryCount
    : 0

  const averageGdp = countryCount
    ? validCountries.reduce((sum, country) => sum + Number(country['GDP 2019']), 0) / countryCount
    : 0

  const regionCount = new Set(validCountries.map((country) => country.Region)).size

  return (
    <section className="summary-cards">
      <div className="summary-card">
        <span>Countries</span>
        <strong>{countryCount}</strong>
      </div>

      <div className="summary-card">
        <span>Avg. happiness</span>
        <strong>{averageHappiness.toFixed(2)}</strong>
      </div>

      <div className="summary-card">
        <span>Avg. GDP</span>
        <strong>{averageGdp.toFixed(2)}</strong>
      </div>

      <div className="summary-card">
        <span>Regions</span>
        <strong>{regionCount}</strong>
      </div>
    </section>
  )
}

export default SummaryCards