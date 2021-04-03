import React from 'react'

const SearchBox = ({ bookInput, setBookInput, getData }) => {
  const submitHandler = (e) => {
    e.preventDefault()
    getData()
  }
  return (
    <form class="form-inline my-2 my-lg-0" onSubmit={submitHandler}>
      <input
        value={bookInput}
        onChange={(e) => setBookInput(e.target.value)}
        class="form-control mr-sm-2"
        type="text"
        placeholder="Search Books"
      />
      <button class="btn btn-primary my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  )
}

export default SearchBox
