import "./Login.css";
import { useCallback, useEffect } from "react";
import useAuthStore from "../../stores/use-auth-store";
import UserDAO from "../../daos/UserDAO";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Tree from "./models-3d/Tree";
import Lights from "../../lights/LightsLogin";



const Login = () => {
  const { user, loginGoogleWithPopUp, logout, observeAuthState, loading } =
    useAuthStore();

  const navigate = useNavigate();

  useEffect(() => {
    observeAuthState();
  }, [observeAuthState]);

  const handleLogin = useCallback(() => {
    loginGoogleWithPopUp();
  }, [loginGoogleWithPopUp]);

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  if (loading) {
    return <p className="loading-text">Cargando...</p>;
  }

  return (
    <div className="container-login">
       
       <>
        <Canvas className="app-logo"shadows camera={{position:[0,1,5]}}>
          <OrbitControls autoRotate/>
          <Lights/>
          <Tree/>
        </Canvas>
      </>
      
      {user ? (
        <>
          <button className="button-logout" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </>
      ) : (
        <>     
          <h1 className="aqua-text">AQUA SAVE</h1>
          <p className="welcome-text">Bienvenido! Cada Gota Cuenta</p>
          <button className= "button-login" onClick={handleLogin}>Iniciar sesión</button>
        </>
      )}

    </div>
  );
};

export default Login;
