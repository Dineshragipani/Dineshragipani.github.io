import { OrbitingCircles } from "./OrbittingCircles"

export function Frameworks() {

    const skills=["auth0",
        "blazor",
        "csharp",
        "dotnet",
        "git",
        "html5",
        "javascript",
        "react",
        "tailwindcss",
      ]
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center ">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill,index)=>(<Icon key={index} src={`assets/logos/${skill}.svg`}/>))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={5}>
        {skills.map((skill,index)=>(<Icon key={index} src={`assets/logos/${skill}.svg`}/>))}
      </OrbitingCircles>
    </div>
  )
}
const Icon = ({src})=>{
return(
  <img src={src} alt="icon" className="rounded-sm hover:scale-110 duration-200"/>
)}