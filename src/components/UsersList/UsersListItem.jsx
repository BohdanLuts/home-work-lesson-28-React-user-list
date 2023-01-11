import { FaTrash } from "react-icons/fa";
import styles from "./UserList.module.css";

function UsersListItem(props) {
  const {
    selectUser,
    removeUser,
    user: { id, isSelected, firstName, lastName, age, imgSrc },
  } = props;

  const inlineStyle = {
    backgroundColor: isSelected ? "#bdfbff" : "transparent",
  };

  return (
    <li
      className={styles.userComponent}
      style={inlineStyle}
      onClick={(e) => selectUser(id)}
    >
      <div className={styles.userImg}>
        <img src={imgSrc} alt={id} />
      </div>

      <div className={styles.userInfo}>
        <p className={styles.userName}>
          {firstName} {lastName}
        </p>
        <p className={styles.userAge}>{age}</p>
      </div>
      <div className={styles.userRemove}>
        <button
          className={styles.userRemoveButton}
          onClick={(e) => removeUser(e, id)}
        >
          <FaTrash />
        </button>
      </div>
    </li>
  );
}

export default UsersListItem;
