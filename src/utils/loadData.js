import Papa from 'papaparse'

export async function loadData() {
  const response = await fetch('/data/data-2019.csv')
  const csvText = await response.text()

  return new Promise((resolve) => {
    Papa.parse(csvText, {
      header: true,
      complete: (results) => {
        resolve(results.data)
      },
    })
  })
}