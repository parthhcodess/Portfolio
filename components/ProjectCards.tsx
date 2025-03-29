import TiltedCard from "./ui/TiltedCard";
import { useState } from "react";

export function ProjectCards() {
  // Define links
  const githubLink = "https://github.com/parthhcodess/lightening.new";
  const websiteLink = "https://github.com/parthhcodess/lightening.new";
  
  // Handle card click - open the website link by default
  const handleCardClick = () => {
    window.open(websiteLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div onClick={handleCardClick} style={{ cursor: "pointer" }}>
      <TiltedCard
        imageSrc="/imgs/lightening.png"
        altText="lightening.new"
        captionText="lightening.new"
        containerHeight="300px"
        containerWidth="300px"
        imageHeight="300px"
        imageWidth="300px"
        rotateAmplitude={12}
        scaleOnHover={1.2}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={
          <div className="flex flex-col items-center">
            <p className="tilted-card-demo-text text-white items-center">
              lightening.new
            </p>
          </div>
        }
      />
    </div>
  )
}