import React from 'react'


function Header({title}) {
  return (
    <header>
        <div className="container">
            <h3 className='text-primary fw-bolder text-center'>{ title }</h3>
        </div>
    </header>
  )
}


export default Header