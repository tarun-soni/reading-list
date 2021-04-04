import React from 'react'

const SearchBox = ({ bookInput, setBookInput, searchSubmit }) => {
  const submitHandler = (e) => {
    e.preventDefault()
    searchSubmit()
  }
  return (
    <form
      className="form-inline my-2 my-lg-0 float-right"
      onSubmit={submitHandler}
    >
      <input
        value={bookInput}
        onChange={(e) => setBookInput(e.target.value)}
        className="form-control mr-sm-2"
        type="text"
        placeholder="Search Books"
      />
      <button className="btn btn-primary my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  )
}

export default SearchBox
