function Filters({ regions, selectedRegion, onRegionChange }) {
  return (
    <section className="filters">
      <label htmlFor="region">Region</label>

      <select
        id="region"
        value={selectedRegion}
        onChange={(event) => onRegionChange(event.target.value)}
      >
        <option value="all">All regions</option>

        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </section>
  )
}

export default Filters