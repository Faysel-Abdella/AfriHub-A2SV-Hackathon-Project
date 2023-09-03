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
         price="800ZAR - 1,000ZAR" 
         skills={["Web Development", "HTML","CSS", "JavaScript", "E-commerce"]} />
         <PostCard
         title="Marketing Manager for Tourism Promotion" 
         description="Are you passionate about marketing and travel? We're hiring a Marketing Manager to promote tourism in Marrakech, Morocco. Help us showcase the beauty of this city to the world."
         location="Marrakech, Morocco"
         postDate="10/08/2023" 
         deadline="25/08/2023"
         price="1,200MAD - 1,500MAD" 
         skills={["Marketing", "Tourism Promotion", "Digital Marketing", "Social Media"]}
       />
       <PostCard
  title="Freelance Content Writer for Tech Blog" 
  description="We're in search of a freelance Content Writer with a passion for technology to contribute to our tech blog. Join our remote team in Lagos, Nigeria, and help us create engaging content."
  location="Lagos, Nigeria"
  postDate="14/08/2023" 
  deadline="28/08/2023"
  price="500NGN - 800NGN per article" 
  skills={["Content Writing", "Technology", "Blogging", "SEO"]}
/>

<PostCard
  title="Freelance UI/UX Designer for Mobile App" 
  description="We're looking for a freelance UI/UX Designer to enhance the user experience of our mobile app. Join our project in Accra, Ghana, and help us create a user-friendly app."
  location="Accra, Ghana"
  postDate="11/08/2023" 
  deadline="26/08/2023"
  price="800GHS - 1,000GHS" 
  skills={["UI/UX Design", "Mobile App Design", "User Experience", "Figma"]}
/>

    </div>
  );
};

export default RecommendedJobPost;
