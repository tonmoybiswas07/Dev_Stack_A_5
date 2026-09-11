import { use, useState } from "react";
import type { ITechnology } from "../../Types/Types";
import TechnologyCard from "../TechnologyCard/TechnologyCard";
import StackCard from "../StackCard/StackCard";

interface TechnologyProps{
    technologyPromiseData:Promise<ITechnology[]>
    
}
const Technologies = ({technologyPromiseData}:TechnologyProps) => {
    const technologyData = use(technologyPromiseData)
   const [selectTech,setSelectTech]=useState<ITechnology[]>([])


    return (
        <div className="container mx-auto">
            <div className="mb-10">
                <h1 className="text-4xl font-bold text-black">Explore the <span className="bg-gradient-to-r from-[#ec4899] from-0% to-[#8b5cf6] to-100% bg-clip-text text-transparent">Technologies</span></h1>
                <p className="mt-2 text-gray-600">Pick one technology per category to build your ideal stack.</p>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px] mb-10">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {
                    technologyData.map(technologyCard=><TechnologyCard technologyCard={technologyCard} key={technologyCard.id} selectTech={selectTech} setSelectTech={setSelectTech}/>)
                }
            </div>
            <StackCard selectTech={selectTech} setSelectTech={setSelectTech} />
            </div>
        </div>
    );
};

export default Technologies;