import TiltedCard from "./ui/TiltedCard";

export function ProjectCard1() {
  // Define links
  // const githubLink = "https://github.com/parthhcodess/lightening.new";
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

export function ProjectCard2() {
  // Define links
  const websiteLink = "https://github.com/parthhcodess/second-brain-app";
  
  // Handle card click - open the website link by default
  const handleCardClick = () => {
    window.open(websiteLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div onClick={handleCardClick} style={{ cursor: "pointer" }}>
      <TiltedCard
        imageSrc="/imgs/mybrain.png"
        altText="Brainly"
        captionText="Brainly"
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
            <p className="tilted-card-demo-text text-black items-center">
              Brainly
            </p>
          </div>
        }
      />
    </div>
  )
}

export function ProjectCard3() {
  // Define links
  const websiteLink = "https://github.com/parthhcodess/parthhcodess.github.io";
  
  // Handle card click - open the website link by default
  const handleCardClick = () => {
    window.open(websiteLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div onClick={handleCardClick} style={{ cursor: "pointer" }}>
      <TiltedCard
        imageSrc="/imgs/portfolio.png"
        altText="Portfolio"
        captionText="Portfolio"
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
              Portfolio
            </p>
          </div>
        }
      />
    </div>
  )
}

export function ProjectCard4() {
  // Define links
  const websiteLink = "https://watchmax.vercel.app";
  
  // Handle card click - open the website link by default
  const handleCardClick = () => {
    window.open(websiteLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div onClick={handleCardClick} style={{ cursor: "pointer" }}>
      <TiltedCard
        imageSrc="/imgs/watchmax.png"
        altText="WatchMax"
        captionText="WatchMax"
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
              WatchMax
            </p>
          </div>
        }
      />
    </div>
  )
}