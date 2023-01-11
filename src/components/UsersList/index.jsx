import { Component } from "react";
import UsersListItem from "./UsersListItem";
import styles from "./UserList.module.css";

const usersData = [
  {
    id: 1,
    firstName: "Test",
    lastName: "Testovich",
    age: 26,
    imgSrc: "https://randomuser.me/api/portraits/lego/1.jpg",
  },
  {
    id: 2,
    firstName: "Sancho",
    lastName: "Rodrigez",
    age: 22,
    imgSrc: "https://randomuser.me/api/portraits/lego/6.jpg",
  },
  {
    id: 3,
    firstName: "Coco",
    lastName: "Chanel",
    age: 44,
    imgSrc: "https://randomuser.me/api/portraits/lego/9.jpg",
  },
  {
    id: 4,
    firstName: "User",
    lastName: "Randomovich",
    age: 14,
    imgSrc: "https://randomuser.me/api/portraits/lego/5.jpg",
  },
];

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: usersData.map((u) => ({
        ...u,
        isSelected: false,
      })),
    };
  }

  selectUser = (id) => {
    const { users } = this.state;
    const foundIndex = users.findIndex((u) => u.id === id);

    const newUsers = [...users];
    newUsers[foundIndex] = {
      ...newUsers[foundIndex],
      isSelected: !newUsers[foundIndex].isSelected,
    };

    this.setState({ users: newUsers });
  };

  removeUser = (e, id) => {
    const { users } = this.state;
    const newUsers = [...users].filter((i) => i.id !== id);
    const removeIndex = usersData.filter((u) => u.id !== id);
    console.log("removeIndex", removeIndex);
    this.setState({ users: newUsers });
    e.stopPropagation();
  };

  mapUser = (u) => {
    return (
      <UsersListItem
        key={u.id}
        user={u}
        selectUser={this.selectUser}
        removeUser={this.removeUser}
      />
    );
  };

  render() {
    const { users } = this.state;
    return <ul className={styles.allUsers}>{users.map(this.mapUser)}</ul>;
  }
}

export default UsersList;
