import React from "react";
import Cardstorage from "./components/Cards/cardstorage";
import Footer from "./components/Footer/Footer";
import NavbarPage from "./components/Navbar/NavbarPage";


function App() {


  // const PostData = ()=>{
  //   fetch("url"),
  //   {
  //     method: "POST",
  //     headers:eaders,
  //     body:body
  //   })
  //   .then(response => { console.log(response.status); });
  // }




  return (
    <>

      <NavbarPage/>
      <Cardstorage/>
      <Footer/>
 
    </>
  );
}

export default App;
