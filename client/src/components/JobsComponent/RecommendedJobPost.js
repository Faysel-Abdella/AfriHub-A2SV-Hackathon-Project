import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import PostCard from "./PostCard";

function Rating(){
    return(
        <div className="text-warning">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalfStroke} />
        </div>
    )
}

const RecommendedJobPost = () => {
  return (
    <div className='container'>
        <PostCard title="Graphic Designer Needed for Logo Design" description="Need a talented Graphic Designer for logo design. Proficiency in Adobe Illustrator required. Join our team and help us make a memorable brand statement with your design expertise." 
         location="Nairobi, Kenya" 
         postDate="10/08/2023"
          deadline="23/08/2023"
           price=" Negotiable" 
          skills={["Graphic Design", "Adobe Illustrator", "Logo Design"]} />
        <PostCard
         title="Experienced Web Developer for E-commerce Site" 
         description="Seeking an experienced Web Developer for an e-commerce site. HTML, CSS, JavaScript expertise needed. Join us in creating a seamless online shopping experience for our customers."
       location="johannesburg, South Africa"
        postDate="12/08/2023" 
        deadline="23/08/2023"
         price="800KES - 1,000KES" 
         skills={["Web Development", "HTML","CSS", "JavaScript", "E-commerce"]} />
        <PostCard title="Pixel Perfect UI development with React" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
      quo quibusdam, a quas iste quia ipsum ducimus illum." location="Ethiopia" postDate="09/08/2023" deadline="23/08/2023" price="150" skills={["HTML", "CSS", "React", "Django", "Bootstrap"]} />
        <PostCard title="Pixel Perfect UI development with React" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
      quo quibusdam, a quas iste quia ipsum ducimus illum." location="Ethiopia" postDate="09/08/2023" deadline="23/08/2023" price="150" skills={["HTML", "CSS", "React", "Django", "Bootstrap"]} />
        <PostCard title="Pixel Perfect UI development with React" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
      quo quibusdam, a quas iste quia ipsum ducimus illum." location="Ethiopia" postDate="09/08/2023" deadline="23/08/2023" price="150" skills={["HTML", "CSS", "React", "Django", "Bootstrap"]} />
    </div>
  );
};

export default RecommendedJobPost;
