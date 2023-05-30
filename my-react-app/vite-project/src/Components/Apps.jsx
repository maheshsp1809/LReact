import React from 'react'

function Apps(){
    let name='react app';
    let className='App-header';
    console.log('App');
  return (
    <div className=''>
        <div className={className}>
            {name}
        </div>
    </div>
  )
}

export default Apps