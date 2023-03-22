import React from 'react'

const Cardstorage = () => {
const data=[
    {
        img:"",
        title:"dostomdhufhfdp",
        info:'04 turbo max',
        id:1
    },
    {
        img:"",
        title:"dostomdhufhfdp",
        info:'04 turbo max',
        id:1
    }

    ]
  return (
    <div>
      {data.map((value)=>{
        <div>
            <img src={value.img} alt="" />
            <p>{value.title}</p>
        </div>
      })}
    </div>
  )
}

export default Cardstorage
