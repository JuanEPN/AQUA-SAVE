import "./Welcome.css";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../stores/use-auth-store";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import TreeWelcome from "./models-3d/TreeWelcome";
import Lights from "../../lights/LightsLogin";
import UserDAO from "../../daos/UserDAO";
import { getDocs, query, where } from "firebase/firestore";



const Welcome = () => {
  const { user, logout } = useAuthStore();
  const navigate  = useNavigate(); 

  const handleLogout = useCallback(() => {
    logout();
    navigate("/"); 
  }, [logout]);

  const onHandleButtonNext = useCallback(() => {
    navigate("/Sitemap"); 
  }, [navigate]);

  useEffect( ()  => {
    const emailValidation = async () => {
      const queryEmail = query(UserDAO.collectionRef, where("email", "==", user.email));
      const email =  await getDocs(queryEmail);
    
    if (user && email.empty) {
      
      const newUser = {
        email: user.email,
        name: user.displayName,
        photo: user.photoURL,
        goldCoin:0,
      };
      UserDAO.createUser(newUser);
    }

  }
  emailValidation()
  }, [user]); 

  return (
    <div className="welcome-container">

      <>
        <Canvas className="app-logo"shadows camera={{position:[0,1,5]}}>
          <OrbitControls autoRotate/>
          <Lights/>
          <TreeWelcome/>
        </Canvas>
      </>

      <div className="user-info">
        <img className="user-photo" src={user.photoURL || "/images/default-avatar.png"} alt={user.displayName || "Usuario"}  />
        <h1 className="welcome-header">Bienvenido! {user.displayName}</h1>
      </div>
      <div className="button-container">
      <button className="button" onClick={onHandleButtonNext}>Siguiente</button>
      <button className="button" onClick={handleLogout}>Cerrar Sesión</button>
      </div>
    </div>
  );
};

export default Welcome;