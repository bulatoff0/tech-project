import { useState } from "react";
import CleanAirBenefits from "./components/CleanAirBenefits";
import OurWorks from "./components/OurWorks";
import OurWorksPopup from "./components/OurWorksPopup";
import ScopeOfApplications from "./components/ScopeOfApplications";
import WhyUs from "./components/WhyUs";

function App() {
    // const [popupActive, setPopupActive] = useState(true);

  return (
        <div className="App">
            <WhyUs />
            <OurWorks />
            {/* <OurWorksPopup active={popupActive} setActive={setPopupActive} /> */}
            <CleanAirBenefits />
            <ScopeOfApplications />
        </div>
  );
}

export default App;
