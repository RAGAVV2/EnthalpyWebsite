import './style.css'
import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';

const TeamContent = () => {
  const containerRef = useRef(null);
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [showMoreImages, setShowMoreImages] = useState(false);

  useEffect(() => {
    if (inView1) {
      gsap.to('.image1', { opacity: 1, x: 0, duration: 1 });
    }
    if (inView2) {
      gsap.to('.image2', { opacity: 1, x: 0, duration: 1 });
    }
  }, [inView1, inView2]);

  const handleShowMoreImages = () => {
    setShowMoreImages(true);
  };

  return (
    <div className="container">
      <h1>Meet OurTeam</h1>
      <div className="images-container" ref={containerRef}>
        <div ref={ref1} className="image-wrapper">
          <img
            className="image1"
            src="../src/assets/Aerodynamics_Structure_ Shramon Banerjee_21BME1085.jpeg"
            alt="Image 1"
            style={{ opacity: 0, transform: 'translateX(-50px)' }}
          />
        </div>
        <div ref={ref2} className="image-wrapper">
          <img
            className="image2"
            src="../src/assets/Aerodynamics_Structure_ Shramon Banerjee_21BME1085.jpeg"
            alt="Image 2"
            style={{ opacity: 0, transform: 'translateX(50px)' }}
          />
        </div>
        {showMoreImages && (
          <>
            <div className="image-wrapper">
              <img
                className="image3"
                src="../src/assets/Aerodynamics_Structure_ Shramon Banerjee_21BME1085.jpeg"
                alt="Image 3"
                style={{ opacity: 0, transform: 'translateX(-50px)' }}
              />
            </div>
            <div className="image-wrapper">
              <img
                className="image4"
                src="../src/assets/Aerodynamics_Structure_ Shramon Banerjee_21BME1085.jpeg"
                alt="Image 4"
                style={{ opacity: 0, transform: 'translateX(50px)' }}
              />
            </div>
          </>
        )}
      
      {!showMoreImages && (
        <button className="show-more-button" onClick={handleShowMoreImages}>
          Show More Images
        </button>
      )}
      </div>
      <div> <p>
      <br/>
<br/><br/><br/><br/><br/>
        
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, tortor sit amet congue commodo, elit mi pellentesque urna, nec bibendum tortor massa nec enim. Nunc dapibus pellentesque sapien, in tristique nulla feugiat a. Mauris ultricies, nisi id rhoncus consequat, tortor leo pellentesque sem, a consequat justo mauris non ligula. Phasellus quis semper mi, id fringilla purus. Sed eu aliquet nunc, eu bibendum nunc. Nam mollis est at magna euismod, eu tristique ligula consequat. Nullam bibendum semper arcu, in pellentesque eros volutpat eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin tristique nisi ac velit ullamcorper feugiat. Fusce fermentum tristique leo, sit amet consectetur mi efficitur vitae. Curabitur pulvinar interdum libero, ut efficitur purus ultricies et. Nulla ac pulvinar ligula. Integer semper sagittis elementum.

Suspendisse aliquam, elit eu sollicitudin dignissim, erat dui venenatis ex, vitae commodo lacus nisi non ex. Vivamus et est malesuada, suscipit tortor id, vestibulum odio. Sed tincidunt nunc nec odio eleifend, sed pulvinar nunc fringilla. Donec in sagittis libero. Maecenas tristique dui id orci hendrerit, nec ullamcorper urna dignissim. Curabitur ut risus feugiat, fringilla metus eu, suscipit enim. Mauris sed felis bibendum, feugiat massa ut, mollis sapien. Integer faucibus odio id sem scelerisque facilisis. In lacinia orci sed aliquet hendrerit.

<br/>
<br/><br/><br/><br/><br/>

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut pulvinar leo in dictum consectetur. Quisque cursus, lacus nec euismod tempus, justo orci vulputate urna, sed consequat neque nunc at ex. Etiam eu luctus lectus, a feugiat dolor. Maecenas id nisi tellus. Cras ullamcorper metus non eros dictum, sed malesuada ante efficitur. Duis posuere efficitur dui. Aliquam sit amet eleifend tortor. Donec tristique ante nec commodo lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed pellentesque, lorem at posuere feugiat, dui nisi tincidunt dui, non eleifend eros erat ut sapien.

Phasellus ut metus nibh. Sed accumsan sapien a nisi condimentum lacinia. Nunc quis convallis dolor. In hac habitasse platea dictumst. Vestibulum malesuada ipsum sed ligula semper facilisis. Sed malesuada enim ipsum, id lobortis erat tincidunt id. Aliquam erat volutpat. Sed malesuada varius lobortis. Sed congue, dui sit amet sagittis tempor, felis elit sagittis nisl, et facilisis velit nulla in metus. Vivamus fermentum consequat ante, nec

 bibendum lectus vestibulum nec. Aenean maximus justo ut ligula rutrum dapibus. Vestibulum mattis sollicitudin odio, in malesuada metus aliquet at. Nullam dapibus, mauris et ultrices tincidunt, felis felis condimentum elit, id dignissim erat nisi at felis. In hac habitasse platea dictumst. Fusce semper, lorem ut aliquet tincidunt, ligula sapien interdum elit, eu bibendum ligula erat vitae lacus.
</p>
    </div>
    </div>
  );
};

export default TeamContent;
