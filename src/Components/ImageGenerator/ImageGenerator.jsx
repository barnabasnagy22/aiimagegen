import React from 'react'
import './ImageGenerator.css'
import def_image from '../Assets/image.png'


const ImageGenerator = () => {
  return (
    <div className='ai-image-generator'>
        <div className="header">
            AI IMAGE <span>generator</span>
        </div>
        <div className="img-loading">
                <div className="image">
                    <img src={def_image} alt="" />
                </div>
        </div>
        <div className="search-box">
            <input type="text" className='search-input' placeholder='Describe what you want to see' />
            <div className="generate-btn">Generate</div>
        </div>
    </div>
  )
}

export default ImageGenerator