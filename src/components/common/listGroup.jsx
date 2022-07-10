const ListGroup = ({
  items,
  onItemSelect,
  textProperty,
  valueProperty,
  selectedItem,
}) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item._id}
          className={
            selectedItem === item
              ? "list-group-item clickable active"
              : "list-group-item clickable"
          }
          onClick={() => onItemSelect(item)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
