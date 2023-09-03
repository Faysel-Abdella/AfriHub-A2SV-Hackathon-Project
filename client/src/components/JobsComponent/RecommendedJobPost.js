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
        <PostCard title="Pixel Perfect UI development with React" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
      quo quibusdam, a quas iste quia ipsum ducimus illum.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
      quo quibusdam, a quas iste quia ipsum ducimus illum." location="Ethiopia" postDate="09/08/2023" deadline="23/08/2023" price="150" skills={["HTML", "CSS", "React", "Django", "Bootstrap"]} />
        <PostCard title="Pixel Perfect UI development with React" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
      quo quibusdam, a quas iste quia ipsum ducimus illum." location="Ethiopia" postDate="09/08/2023" deadline="23/08/2023" price="150" skills={["HTML", "CSS", "React", "Django", "Bootstrap"]} />
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
