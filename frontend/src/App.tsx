// import { useState } from 'react'
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "98.css";
import "./styles.css";
import CreateBucket from "./components/CreateBucket";

function App() {
  return (
    <>
      <Header />
      <div className="homepage">
        <CreateBucket />
        <Sidebar />
      </div>
    </>
  );
}

export default App;
