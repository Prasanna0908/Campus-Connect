import React from 'react'

import { ReactSearchAutocomplete } from 'react-search-autocomplete'

function App(props) {
    console.log(props,"sf")
  const items = props.props
  console.log(items)
  

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <div>
        <span style={{ display: 'block', textAlign: 'left' }}>{item.title}</span>
        {/* <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span> */}
      </div>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            // autoFocus
            formatResult={formatResult}
            fuseOptions={{keys:['title']}}
            showClear={false}
            showIcon={false}
          />
        </div>
      </header>
    </div>
  )
}

export default App