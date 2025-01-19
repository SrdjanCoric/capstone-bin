// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import BucketPage from "./components/BucketPage";

import "98.css";
import "./styles.css";
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/web/:uuid" element={<BucketPage />} />
      </Routes>
    </>
  );
}
// return (
//   <>
//     <div>
//       <Routes>
//         <Route path="/" element={<Home />}></Route>
//         <Route path="/buckets/:bucketname" element={<BucketPage />}></Route>
//         {/*
//           <Route path="/buckets/1" element={<BucketPage />}></Route>
//           <Route path="/buckets/2" element={<BucketPage />}></Route>
//           <Route path="/buckets/3" element={<BucketPage />}></Route>
//         */}
//       </Routes>
//     </div>
//   </>
// );
export default App;
