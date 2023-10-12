import React from 'react'

const ShoeCard = ({imgURL, changeBigShoeImage, bigShoeImg}) => {
  return (
    <div className={`border rounded-xl
        ${bigShoeImage === imgURL
            ? 'border-coral-red'
            : 'border-transparent'
        } 
        
    `}>

    </div>
  )
}

export default ShoeCard