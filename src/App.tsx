import React from "react";
import Input from "./components/Input";

const App: React.FC = () => {
  return (
    <div className="mt-3 container">
      <h1 style={{ textAlign: "center" }}>Water Drinking App</h1>
      <div className="row">
        <div className="col-lg-5">
          <Input />
        </div>
      </div>
    </div>
  );
};

export default App;
