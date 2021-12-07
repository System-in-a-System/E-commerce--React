const MainMenu = ({ items }) => {
  
  const listItems = items?.map((item, i) => (
    <a href={item.href} key={i}>
      <li>{item.name}</li>
    </a>
  ));

  return (
    listItems && (
      <div className="global-navigation">
        <ul>{listItems}</ul>
      </div>
    )
  );
};

export default MainMenu;
