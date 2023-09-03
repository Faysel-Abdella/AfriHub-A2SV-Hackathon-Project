import React from "react";
import JobPost from "../components/JobPost";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";

const JobsPost = () => {
  return (
    <>
      <Navigation />
      <div className="container">
        <JobPost
          title="Pixel Perfect UI development with React"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
      quo quibusdam, a quas iste quia ipsum ducimus illum.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
      quo quibusdam, a quas iste quia ipsum ducimus illum."
          location="Ethiopia"
          postDate="09/08/2023"
          deadline="23/08/2023"
          price="150"
          skills={["HTML", "CSS", "React", "Django", "Bootstrap"]}
        />
        <JobPost
          title="Pixel Perfect UI development with React"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
      quo quibusdam, a quas iste quia ipsum ducimus illum."
          location="Ethiopia"
          postDate="09/08/2023"
          deadline="23/08/2023"
          price="150"
          skills={["HTML", "CSS", "React", "Django", "Bootstrap"]}
        />
        <JobPost
          title="Pixel Perfect UI development with React"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
      quo quibusdam, a quas iste quia ipsum ducimus illum."
          location="Ethiopia"
          postDate="09/08/2023"
          deadline="23/08/2023"
          price="150"
          skills={["HTML", "CSS", "React", "Django", "Bootstrap"]}
        />
        <JobPost
          title="Pixel Perfect UI development with React"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
      quo quibusdam, a quas iste quia ipsum ducimus illum."
          location="Ethiopia"
          postDate="09/08/2023"
          deadline="23/08/2023"
          price="150"
          skills={["HTML", "CSS", "React", "Django", "Bootstrap"]}
        />
        <JobPost
          title="Pixel Perfect UI development with React"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
      quo quibusdam, a quas iste quia ipsum ducimus illum."
          location="Ethiopia"
          postDate="09/08/2023"
          deadline="23/08/2023"
          price="150"
          skills={["HTML", "CSS", "React", "Django", "Bootstrap"]}
        />
      </div>
      <div className="my-5">.</div>
      <Footer />
    </>
  );
};

export default JobsPost;
