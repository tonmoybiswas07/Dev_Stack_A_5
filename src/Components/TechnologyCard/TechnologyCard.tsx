import type { ITechnology } from "../../Types/Types";

const TechnologyCard = ({ technologyCard }: ITechnology) => {
  return (
    <div>
      <div
        className={`rounded-2xl border bg-white p-4 shadow-sm transition-all duration-200
        
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
          className={`mt-4 w-full rounded-lg py-2.5 text-sm font-semibold transition
         
        `}
        ></button>
      </div>
    </div>
  );
};

export default TechnologyCard;
