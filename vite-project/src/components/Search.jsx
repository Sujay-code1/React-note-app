import React from 'react'

function Search({handleSearchNote}) {
  return (
    <div className='search'>
      
      <input onChange={(e)=>{handleSearchNote(e.target.value)}}
      type='text'
       placeholder='🔍 Search your note...'/>
    </div>
  )
}

export default Search
