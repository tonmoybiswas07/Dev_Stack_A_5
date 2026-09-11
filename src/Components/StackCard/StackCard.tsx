import type { Dispatch, SetStateAction } from "react";
import type { ITechnology } from "../../Types/Types";

interface StackCardProps {
  selectTech: ITechnology[];
  setSelectTech: Dispatch<SetStateAction<ITechnology[]>>;
}

const StackCard = ({ selectTech, setSelectTech }: StackCardProps) => {
  const handleRemove = (id: string): void => {
    setSelectTech((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        {/* Title */}
        <h2 className="text-lg font-bold text-slate-900">Your Stack</h2>

        {/* Selected Count */}
        <p className="mt-1 text-sm text-slate-400">
          {selectTech.length === 0
            ? "No technologies selected yet."
            : `${selectTech.length} technologies selected.`}
        </p>

        {/* Empty State */}
        {selectTech.length === 0 ? (
          <div className="mt-5 flex min-h-[100px] items-center justify-center rounded-xl border border-dashed border-slate-200">
            <p className="text-sm text-slate-400">Your stack is empty.</p>
          </div>
        ) : (
          /* Selected Technologies */
          <div className="mt-5 space-y-3">
            {selectTech.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center justify-between rounded-xl bg-slate-50 p-3"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-7 w-7 object-contain"
                  />

                  <span className="text-sm font-semibold text-slate-700">
                    {technology.name}
                  </span>
                </div>

                <button
                  onClick={() => handleRemove(technology.id)}
                  className="text-xs font-medium text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </aside>
    </div>
  );
};

export default StackCard;
