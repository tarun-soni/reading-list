import React from 'react'

const CustomToast = ({ onClick }) => {
  return (
    <div
      class="toast show"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      style={{
        position: 'absolute',
        right: '1rem',
        top: '5rem',
        backgroundColor: '#18bc9c'
      }}
    >
      <div
        class="toast-header"
        style={{
          backgroundColor: '#4db6ac'
        }}
      >
        <strong class="mr-auto text-white">Bootstrap</strong>
        <small>11 mins ago</small>
        <button
          type="button"
          class="ml-2 mb-1 close"
          data-dismiss="toast"
          aria-label="Close"
          onClick={onClick}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="toast-body ">Hello, world! This is a toast message.</div>
    </div>
  )
}

export default CustomToast
