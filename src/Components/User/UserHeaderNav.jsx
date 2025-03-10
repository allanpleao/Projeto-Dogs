import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import MyPhotos from "../../assets/feed.svg?react";
import Stats from "../../assets/estatisticas.svg?react";
import AddPhoto from "../../assets/adicionar.svg?react";
import Leave from "../../assets/sair.svg?react";
import styles from "./UserHeaderNav.module.css";
import { useMedia } from "../../Hooks/useMedia";
import classNames from 'classnames'

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const navigate = useNavigate();
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = useState(false);

  function handleLogout() {
    userLogout();
    navigate("/login");
  }

  const { pathname } = useLocation();
  useEffect(() => {
    setMobileMenu(false)
  },[pathname])

  return (
    <>
      {mobile && (
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
        ></button>
      )}
      <nav
        className={classNames({
          [styles.nav]: !mobile,
          [styles.navMobile]: mobile,
          [styles.navMobileActive]: mobileMenu && mobile,
        })}
      >
        <NavLink to="/account" end>
          <MyPhotos />
          {mobile && "Minhas fotos"}
        </NavLink>
        <NavLink to="/account/stats">
          <Stats />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/account/post">
          <AddPhoto />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={handleLogout}>
          <Leave /> {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
