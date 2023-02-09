import React from "react";
import Header from "./Components/Header";
import Secction from "./Components/Secction";
import Footer from "./Components/Footer";

const App = () => {
  let users = [
    {
      name: "Hose",
      lastName: "Enruque",
      age: 34,
      id: Date.now(),
    },
  ];
  return (
    <>
      <Header />
      <Secction users={users} />
      <Footer />
    </>
  );
};

export default App;
