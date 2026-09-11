import { FaTrashCan } from "react-icons/fa6";
import type { ITechnology } from "../../Types/Types";
import { toast } from "react-toastify";

const StackCard = ({
  selectTech,
  setSelectTech,
}: {
  selectTech: ITechnology[];
  setSelectTech: React.Dispatch<React.SetStateAction<ITechnology[]>>;
}) => {
  const handleRemove = (id: string) => {
    setSelectTech((prev) => prev.filter((item) => item.id !== id));
  };

  const handleRemoveAll = () => {
    setSelectTech([]);
    toast.info("All technologies removed from your stack!", {
      position: "top-right",
      autoClose: 3000,
      theme: "light",
    });
  };

  return (
    <div>
      <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm mx-2 md:mx-0">
        <h2 className="text-2xl font-bold text-slate-900">Your Stack</h2>

        <p className="mt-1 text-sm text-slate-400">
          {selectTech.length === 0
            ? "No technologies selected."
            : `( ${selectTech.length} ) technologies selected.`}
        </p>

        {selectTech.length === 0 ? (
          <div className="mt-5 flex min-h-[100px] items-center justify-center rounded-xl border border-dashed border-slate-200">
            <p className="text-sm text-slate-400">Your stack is empty.</p>
          </div>
        ) : (
          <>
            <div className="mt-5 space-y-3">
              {selectTech.map((technology) => (
                <div
                  key={technology.id}
                  className="flex items-center justify-between rounded-xl bg-slate-50 p-3 border border-slate-300"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="h-7 w-7 object-contain"
                    />

                    <div>
                      <span className="text-sm font-semibold text-slate-700">
                        {technology.name}
                      </span>
                      <p className="text-xs text-slate-400">
                        {technology.category}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleRemove(technology.id)}
                    className="text-xs font-medium text-red-500 cursor-pointer hover:text-red-700"
                  >
                    <FaTrashCan />
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={handleRemoveAll}
              className="mt-5 w-full rounded-lg border border-red-200 bg-red-50 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-100"
            >
              Remove All
            </button>
          </>
        )}
      </aside>
    </div>
  );
};

export default StackCard;
