import React from 'react'
import TitleSm from './TitleSm';

function SearchResults(props) {
  return (
    <div className='search-results'>
        <div>
            <TitleSm name='Search Results'/>
            <div className='content-box'>
                <h4>Wisdom</h4>
                <p>I am your live wisdom assistant powered by AI! As I listen to the conversatioin I will provide suggestions. </p>
            </div>
            <div className='content-box'>
                <h4>Wisdom</h4>
                <p>I am your live wisdom assistant powered by AI! As I listen to the conversatioin I will provide suggestions. </p>
            </div>
        </div>
    </div>
  )
}

export default SearchResults