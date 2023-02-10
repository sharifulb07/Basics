
import "./App.css";
// import Checkboxes from "./Components/Checkboxes";
// import CheckBoxLabel from "./Components/CheckBoxLabel";
// import SizeCheckboxes from "./Components/SizeCheckboxes";

// import BlogContent from "./Components/BlogContent";
import Reservation from "./Components/Reservation";

import TemperatureInput from "./Components/calculator/TemperatureInput";


import FlavForm from "./Components/FlavForm";

function App() {
  return (
    <div className="App">
      {/* <Checkboxes />
      <CheckBoxLabel />
      <SizeCheckboxes />
      <BlogContent /> */}
<Reservation />
<TemperatureInput  />

<FlavForm />


    </div>
  );
}

export default App;
