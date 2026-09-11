import { Suspense } from "react";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Technologies from "./Components/Technologies/Technologies";
import type { ITechnology } from "./Types/Types";
import Loader from "./Components/Loader/Loader";

const technologyPromise = async (): Promise<ITechnology[]> => {
  const res = await fetch("/tech-data.json");
  const data = await res.json();
  return data;
};

function App() {
  const technologyPromiseData = technologyPromise();
  return (
    <>
      <Navbar />
      <Banner />
      <Suspense fallback={<Loader />}>
        <Technologies technologyPromiseData={technologyPromiseData} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
