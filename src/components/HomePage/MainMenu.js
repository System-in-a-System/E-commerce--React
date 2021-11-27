const MainMenu = ({ items }) => {

  const listItems = items.map((item) => (
    <a href={item.href}>
      <li key={item.id}>{item.name}</li>
    </a>
  ));

  return (
    <div className="global-navigation">
      <ul>{listItems}</ul>
    </div>
  );
};

export default MainMenu;
