import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Project = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
      <ProjectCard
          src="/aip.png"
          title="Diabetes classifier"
          description="Diabetes is a chronic disease characterized by high blood sugar levels either due to insulin deficiency (type 1 diabetes) or inefficient use of insulin (type 2 diabetes). "
        />
        <ProjectCard
          src="/aaip.png"
          title="Dice Game Using React and thilwind css"
          description="The dice under their own cup. – Dice that any player has pushed. – How many dice are under each player's cup."
        />
        <ProjectCard
          src="/screenshot.png"
          title="my portfolio using Html,css,javascript"
          description="i am a abhishek kumar i belongs to bihar ,i pushing B.tech in jodhpur institute of engineering and technology
          i passed 12th board in BSED patna and got 72% marks and secondary exam passed in BSED patna and got 71.4 % 
          my hobbies is i spend time in computer programming to inhance my coding skills"
        />
      </div>

    </div>
  )
}

export default Project