import React from 'react'
import PostCard from './PostCard'

const Posts = () => {
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
  )
}

export default Posts