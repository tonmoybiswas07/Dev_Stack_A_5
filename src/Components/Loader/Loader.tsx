const Loader = () => {
  return (
    <div>
      <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-white">
        <div className="flex flex-col items-center">
          <div className="mb-5 text-5xl font-bold">
            <span className="text-cyan-400">&lt;</span>
            <span className="text-purple-500">/</span>
            <span className="text-pink-500">&gt;</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight">
            <span className="text-slate-900">Dev</span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Stack
            </span>
          </h1>

          <p className="mt-3 text-sm text-slate-400">
            Building better developers, one stack at a time.
          </p>

          <div className="mt-8 h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-cyan-400 border-r-purple-500" />

          <p className="mt-4 text-sm tracking-widest text-slate-400">
            Loading...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
