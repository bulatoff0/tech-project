import CleanAirBenefits from "./components/CleanAirBenefits";
import OurWorks from "./components/OurWorks";
import ScopeOfApplications from "./components/ScopeOfApplications";
import WhyUs from "./components/WhyUs";
import Calculator from "./components/Calculator";
import { Header } from "./components/Header";
import { Info } from './components/Info';
import { Footer } from './components/Footer';
import { ImportantRules } from './components/ImportantRules'
import { Contacts } from "./components/Сontacts";

function App() {
  return (
        <div className="App">
            <Header />
            <Info />
            <CleanAirBenefits />
            {/* <VentilationBenefits /> */}
            <ScopeOfApplications />
            <ImportantRules />
            <WhyUs />
            <OurWorks />
            <Calculator />
            <Contacts />
            <Footer />
        </div>
  );
}

export default App;
