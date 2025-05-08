
// import { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import  "../styles/home.css"
// import {userContext }from "./userContext";
import { userContext } from "./userContext";
import { useContext, useState } from "react";

const Home = () => {
  const nav = useNavigate();
  const{Myuser} = useContext(userContext);
  const[navigate,setNavigate]=useState(0);
    return (
      <>
        <div className="home-container">
          <div className="button-container">
          {Myuser!=undefined&&<button onClick={()=> nav("/add-recipe")}> הוספת מתכון</button>}

            <button onClick={() => {setNavigate(1);nav("/Login")}}>להתחברות</button>
            <button onClick={() => {setNavigate(1);nav("/SighIn")}}>להצטרפות</button>
            <button onClick={() => {setNavigate(0);nav("/home");}}>עמוד הבית</button>

          </div>
     
          {navigate==0 &&<button className="center-button" onClick={() => {setNavigate(1);nav("/ShowRecipes")}}>
            לטעימה <br/>מהמתכונים שלנו </button>}
          
          <Outlet />
        </div>
      </>
    );
  };
  
  export default Home;