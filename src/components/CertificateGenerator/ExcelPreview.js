import React from 'react'

import data from '../../data/CertiTemplate.json' 

function ExcelPreview(id) {
    if (id.id !== null) {
        return (
            <>
                <figure>
                    <img src={data.Templates[id.id].preview} alt={data.Templates[id.id].alt} className='d-block m-auto' />
                    <figcaption className='text-center'>{data.Templates[id.id].alt}</figcaption>
                </figure>
            </>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default ExcelPreview