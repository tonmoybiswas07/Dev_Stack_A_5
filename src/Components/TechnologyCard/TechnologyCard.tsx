import type { ITechnology } from "../../Types/Types";

const TechnologyCard = ({ technologyCard ,selectTech,setSelectTech}: { technologyCard: ITechnology; selectTech: ITechnology[]; setSelectTech: React.Dispatch<React.SetStateAction<ITechnology[]>> }) => {


    const handleButtonClick = () => {
        
        const alreadySelected = selectTech.some(
      (item: ITechnology) => item.id === technologyCard.id
    );

    if (alreadySelected) {
      setSelectTech((prev) =>
        prev.filter((item) => item.id !== technologyCard.id)
      );
    } else {
      setSelectTech((prev) => [
        ...prev,
        technologyCard,
      ]);
    }
    }
  return (
    <div>
      <div
        className={`rounded-2xl border border-gray-300 shadow-md bg-white p-4  transition-all duration-200
        
      `}
      >
        
        <div className="flex items-start justify-between">
          <img
            src={technologyCard.icon}
            alt={technologyCard.name}
            className="h-10 w-10 object-contain"
          />

          {technologyCard.badge && (
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-500">
              {technologyCard.badge}
            </span>
          )}
        </div>

        
        <h2 className="mt-5 text-lg font-bold text-slate-900">
          {technologyCard.name}
        </h2>

        
        <p className="mt-2 min-h-[65px] text-sm leading-5 text-slate-500">
          {technologyCard.description}
        </p>

        
        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs">
          <span className="rounded bg-slate-50 px-2 py-1 text-slate-600">
            {technologyCard.category}
          </span>

          <span className="text-slate-500">{technologyCard.difficulty}</span>

          <span className="font-medium text-slate-700">
            ⭐ {technologyCard.rating}
          </span>
        </div>

        
          <button
        onClick={handleButtonClick}
        className={`mt-4 w-full rounded-lg py-2.5 text-sm font-semibold transition
          ${
            selectTech.some((item) => item.id === technologyCard.id)
              ? "bg-teal-500 text-white hover:bg-teal-600"
              : "bg-slate-950 text-white hover:bg-slate-800"
          }
        `}
      >
        {selectTech.some((item) => item.id === technologyCard.id) ? "Remove from Stack" : "Add to Stack"}
      </button>
      </div>
    </div>
  );
};

export default TechnologyCard;
