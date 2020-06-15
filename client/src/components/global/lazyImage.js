import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
 
const MyImage = ({ image }) => (
  <div>
    <LazyLoadImage
      src={image.src} 
      height={450} 
      width={700} 
      alt={"image"}
      effect="blur"
      />
    <span>{image.caption}</span>
  </div>
);
 
export default MyImage;