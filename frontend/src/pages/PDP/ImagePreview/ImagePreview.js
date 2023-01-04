import React, {useState} from 'react'

function ImagePreview({images, id, name}) {

  const [preview, setPreview] = useState(0);
  const miniPreviews = images.map((a, b) => (
    <div key={b}>
      <img src={`/images/products/${id}/${a}`} alt={name} />
    </div>
  ))
  console.log(images)
  return (
    <div className="img-preview-con">
        <div className="max-preview">
          <img src={`/images/products/${id}/${images[preview]}`} alt={name} className="img-fluid" />
        </div>
        <div className="min-preview">
          {miniPreviews}
        </div>
    </div>
  )
}

export default ImagePreview;
