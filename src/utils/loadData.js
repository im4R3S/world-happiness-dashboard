import Papa from 'papaparse'

export async function loadData() {
  const response = await fetch('/data/data-2019.csv')
  const csvText = await response.text()

  return new Promise((resolve) => {
    Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const rows = results.data.filter((row) => {
          return row.Country && row.Region && row['Score 2019'] && row['GDP 2019']
        })

        resolve(rows)
      },
    })
  })
}