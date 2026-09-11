import { toast } from "react-toastify";
import type { ITechnology } from "../../Types/Types";

interface TechnologyCardProps {
  technologyCard: ITechnology;
  selectTech: ITechnology[];
  setSelectTech: React.Dispatch<React.SetStateAction<ITechnology[]>>;
}

const TechnologyCard = ({
  technologyCard,
  selectTech,
  setSelectTech,
}: TechnologyCardProps) => {
  const alreadySelected = selectTech.some(
    (item) => item.id === technologyCard.id,
  );

  const handleButtonClick = () => {
    if (alreadySelected) {
      toast.warning(`${technologyCard.name} is already in your stack!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });

      return;
    }

    setSelectTech((prev) => [...prev, technologyCard]);

    toast.success(`${technologyCard.name} added to your stack!`, {
      position: "top-right",
      autoClose: 3000,
      theme: "light",
    });
  };

  return (
    <div>
      <div
        className={`rounded-2xl border border-gray-300 bg-white p-4 shadow-md transition-all duration-200 mx-2 md:mx-0 ${
          alreadySelected ? "border-red-400" : ""
        }`}
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
          disabled={alreadySelected}
          className={`mt-4 w-full rounded-lg py-2.5 text-sm font-semibold transition ${
            alreadySelected
              ? "cursor-not-allowed bg-black text-white opacity-70"
              : "bg-slate-950 text-white hover:bg-slate-800"
          }`}
        >
          {alreadySelected ? "Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;
