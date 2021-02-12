import React from "react";

const ChatBar = (props) => {
  const [state, setState] = React.useState([
    { id: 1, image: "/images/fawad1.jpg", name: "Hassan Khan" },
    { id: 2, image: "/images/fawad2.jpg", name: "Hassan Malik" },
    { id: 3, image: "/images/fawad3.jpg", name: "Hassan Shahbaz" },
    { id: 4, image: "/images/fawad4.jpg", name: "Muhammad Hassan" },
    { id: 5, image: "/images/imran1.jpg", name: "Tayyab Khan" },
    { id: 6, image: "/images/imran2.jpg", name: "Awais Gujjar" },
    { id: 6, image: "/images/imran3.jpg", name: "Awais Sheikh" },
    { id: 7, image: "/images/profile.jpg", name: "Umer Yaseen" },
    { id: 8, image: "/images/fawad1.jpg", name: "Hello Khan" },
    { id: 9, image: "/images/fawad2.jpg", name: "Umer Khan" },
    { id: 10, image: "/images/fawad3.jpg", name: "Usman Khan" },
  ]);
  const openChat = (user) => {
    props.openChat(user);
  };
  return (
    <div className="chatBar">
      {state.map((user) => (
        <div
          className="chatBar__list"
          key={user.id}
          onClick={() => openChat(user)}
        >
          <div className="chatBar__list-img">
            <img src={user.image} alt="user" />
            <span className="status"></span>
          </div>
          <div className="chatBar__list-name">{user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatBar;
