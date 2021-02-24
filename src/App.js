import { useState, useEffect, memo } from 'react'
import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import DropdownElement, { RadioToggle } from './componenets/semantic-ui-elements.js'
import Chart from './componenets/getChart.js'

const getAllCountries = 'http://localhost:3000/countries'
const style = {
  height: '600px',
  'textAlign': 'center',
  'textPadding': '30px'
}

const Header = memo((props) => {
  document.title = `${props.name} statistics`
  return <h1>{props.name} statistics</h1>
})

function App() {
  const [countryList, setCountryList] = useState()
  const [countryStats, setCountryStats] = useState('')
  const [country, setCountry] = useState()
  const [lineGraph, setLineGraph] = useState(true)

  useEffect(() => {
    sendRequest(getAllCountries)
  }, [])

  const sendRequest = async (q) => {
    let initialArray = []
    await fetch(q)
      .then((response) => response.json())
      .then((data) => {
        if (q === getAllCountries) {
          data.forEach((element) => {
            initialArray.push({ key: element, text: element, value: element })
          })
          setCountryList(initialArray)
        } else {
          setCountry(data[0].country)
          initialArray.push({
            id: 'Cases',
            color: 'hsl(272, 96%, 29%)',
            data: [],
          })
          initialArray.push({
            id: 'Deaths',
            color: 'hsl(349, 94%, 40%)',
            data: [],
          })
          data.forEach((element) => {
            if (element.indicator === 'cases') {
              initialArray[0].data.push({
                x: element.year_week,
                y: element.weekly_count,
              })
            } else {
              initialArray[1].data.push({
                x: element.year_week,
                y: element.weekly_count,
              })
            }
          })
          console.log(initialArray)
          setCountryStats(initialArray)
        }
      })
  }

  const handleClick = (err, data) => {
    if(err){console.log(err)}
    const customQuery = `http://localhost:3000/country=${data.value}`
    sendRequest(customQuery)
  }

  const handleToggle = () => {
    if (lineGraph) { setLineGraph(false)
    } else { setLineGraph(true)}
  }

  console.log('App rendered')
  return (
    <Segment>
    <Grid celled>
      <Grid.Row>
        <Grid.Column width={3} >
          <div >
           <RadioToggle onChange={handleToggle} className="radioStyle"/>
           <p>Toggle <b>stacked/default</b> line graph chart</p>
           <DropdownElement data={countryList} onChange={handleClick} />

          </div>
        </Grid.Column>
        <Grid.Column width={13}>
          <div style={style}>
            {countryStats != '' && <Header name={country} />}
            {countryStats != '' &&
            <Chart data={countryStats} trigger={lineGraph} />}
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    </Segment>
  )
}

export default App
