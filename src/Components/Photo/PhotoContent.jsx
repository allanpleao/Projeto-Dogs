import { useContext } from "react";
import PhotoComments from "./PhotoComments";
import styles from "./PhotoContent.module.css";
import { Link } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import PhotoDelete from "./PhotoDelete";
import Image from "../Helper/Image";

const PhotoContent = ({ data, single }) => {
  const user = useContext(UserContext);

  const { photo, comments } = data;
  return (
    <div className={`${styles.photo} ? ${single ? styles.single : ''}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <p className={styles.author}>
          {user.data && user.data.username === photo.author ? (
            <PhotoDelete id={photo.id} />
          ) : (
            <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
          )}
          <span className={styles.visualizacoes}>{photo.acessos}</span>
        </p>
        <h1 className="title">
          <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
        </h1>
        <ul className={styles.attributes}>
          <li>{photo.peso}KG</li>
          <li>
            {photo.idade} {photo.idade === "1" ? "ano" : "anos"}
          </li>
        </ul>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  );
};

export default PhotoContent;
