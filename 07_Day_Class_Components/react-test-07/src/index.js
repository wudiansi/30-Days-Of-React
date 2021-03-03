import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const spanStyle = {
  display: 'inline-block',
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  textAlign: 'center',
  border: '1px solid green',
  color: 'green',
  fontSize: '20px',
  lineHeight: '60px'
}
const averageFn = (arr) => arr.reduce((acc, val) => acc + Number(val), 0) / arr.length

const NumberItem = ({ num }) => (
  <span style={spanStyle}>
    {num}
  </span>
)

const Cat = ({ cats }) => {
  let averageWeight = 0
  let averageLife = 0
  let breedsCountries = {}

  let catMidWeightArr = [], catmidLifeArr = [];
  cats.length && cats.map((cat) => {
    let { weight, life_span, country_code } = cat
    let midWeightArr = weight.metric.split(' - '),
      midLifeArr = life_span.split(' - ')
    catMidWeightArr.push(averageFn(midWeightArr))
    catmidLifeArr.push(averageFn(midLifeArr))

    let breedsCountriesKeys = Object.keys(breedsCountries)
    if (!breedsCountriesKeys.includes(country_code)) {
      breedsCountries[country_code] = 1
    } else {
      breedsCountries[country_code]++
    }
    return cat
  })

  let sortBressdsCountries = Object.entries(breedsCountries).sort((a, b) => b[1] - a[1])

  averageWeight = catMidWeightArr.length && averageFn(catMidWeightArr).toFixed(2)
  averageLife = catmidLifeArr.length && averageFn(catmidLifeArr).toFixed(2)

  return (
    <div className='country'>
      <h3 className='country_name'>Cats paradise</h3>
      <p>There are {cats.length} cats breeds</p>

      <div className='country_text'>
        On average a cat can weight about <NumberItem num={averageWeight} /> kg and live <NumberItem num={averageLife} /> years.
      </div>

      <p>{Object.keys(breedsCountries).length} countries have cat breeds</p>
      { sortBressdsCountries.length
        ? <p>{sortBressdsCountries[0][0]} is the country witch have {sortBressdsCountries[0][1]} breeds cats</p>
        : ''
      }
    </div>
  )
}

class App extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    this.fetchCountryData()
  }
  fetchCountryData = async () => {
    const url = 'https://api.thecatapi.com/v1/breeds'
    try {
      const response = await axios.get(url)
      const data = await response.data
      this.setState({
        data,
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className='App'>
        <h5>React Component Life Cycle</h5>
        <h5>Calling API</h5>
        <div>
          <Cat cats={this.state.data} />
        </div>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)