import { moneyFormat } from "../helpers";

const SimgleItem = ({ price, type, id, eliminarItem, editItem }) => {
  const HandleDelete = (e) => {
    e.preventDefault();
    const answer = window.confirm(
      `Are you sure to delete your subscription to ${type}?`
    );
    if (answer) {
      eliminarItem(id);
    }
  };

  const HandleEdit = (e) => {
    e.preventDefault();
    editItem(id);
  };

  const urlImage = `/${type}.png`;
  return (
    <div className="single-item">
      <img src={urlImage} alt="Services" />
      <h3>Price: {moneyFormat(Number(price))}</h3>
      <a href="" className="delete" onClick={HandleDelete}>
        Delete
      </a>
      <a href="" className="edit" onClick={HandleEdit}>
        Edit
      </a>
    </div>
  );
};

export default SimgleItem;
