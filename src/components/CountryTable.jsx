function CountryTable({ countries }) {
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Region</th>
            <th>GDP</th>
            <th>Happiness</th>
          </tr>
        </thead>

        <tbody>
          {countries.map((country) => (
            <tr key={country.Country}>
              <td>{country.Country}</td>
              <td>{country.Region}</td>
              <td>{country['GDP 2019']}</td>
              <td>{country['Score 2019']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default CountryTable