import { Route, Routes, Navigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginLostPassword from "./LoginLostPassword";
import LoginResetPassword from "./LoginResetPassword";
import { useContext } from "react";
import UserContext from "../../Context/UserContext";
import styles from "./Login.module.css";
import NotFound from "../NotFound";

const Login = () => {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to="/account" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="create" element={<LoginCreate />} />
          <Route path="lost" element={<LoginLostPassword />} />
          <Route path="reset" element={<LoginResetPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
