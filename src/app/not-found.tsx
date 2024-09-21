"use client"

import Image from "next/image";
import imagePath from './../../public/404.webp';



const notFoundPage = () => {
  return (
    <div>
      <div className="fof-page">
        <div className="img-btn-container">
          <Image
            src={imagePath}
            width={500}
            height={500}
            alt="Image description"
          />
          <div style={{display:"flex", justifyContent:'center'}}>
          <a href="/" className="bt-home">Back to Home</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default notFoundPage;
