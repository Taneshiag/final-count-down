import React, { useState } from 'react'
import RandomQuote from './RandomQuote.css'

const RaandomQuote = () => {

    const [quote,setQuote] = useState({
         Text:"If you're going to live, leave a legacy. Make a mark on the world that can't be erased.",
         author: "Maya Angelou",
        });

  return (
    <div className='container'>
        <div className="quote">{quote.text}</div>
        <div>
           <div className="line"></div> 
           <div className='bottom'>
            <div className='author'>{quote.author}</div>
            </div>
           </div>
        </div>

  )
}

export default RandomQuote