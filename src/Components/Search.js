import React from 'react'
import { UpIcon } from '../Imports/ImportImages'
import { SearchImg } from '../Imports/ImportImages'

function Search() {
  return (
    <div className='search-area'>
        <div className='form-group'>
            <div className='search-img'>
                <img src={SearchImg} alt='imagesearch'/>
            </div>
            <input type='text' placeholder='Search Recommendation'/>
            <button><img src={UpIcon} alt='upicon'/></button>
        </div>
    </div>
  )
}

export default Search