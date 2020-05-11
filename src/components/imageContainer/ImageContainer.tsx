import React from "react";
import './imageContainer.scss'

interface ImageContainerProps {
    imageUrl: string
    imageAlt: string
}

function ImageContainer(props: ImageContainerProps) {
    return (
      <img src={props.imageUrl} alt={props.imageAlt} />
    )
}


export default ImageContainer;