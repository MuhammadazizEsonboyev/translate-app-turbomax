import React from "react";
import Cardstorage from "./components/Cards/cardstorage";
import NavbarPage from "./components/Navbar/NavbarPage";


function App() {
  // const deleteData = (id)=>{
  //   fetch(`https://jsonplaceholder.typicode.com/posts/1/${id}`,
  //   {
  //     method: "DELETE"
  //   })
  //   .then(response => { console.log(response.status); });
  // }
  return (
    <>
      <NavbarPage />
      <Cardstorage />


    </>
  );
}

export default App;
