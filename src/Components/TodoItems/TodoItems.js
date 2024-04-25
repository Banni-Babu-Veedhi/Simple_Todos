import "./TodoItems.css";

const MaleList = (props) => {
  const { data, deletee } = props;
  const { id, title } = data;
  const onDelete = () => {
    deletee(id);
  };

  return (
    <li className="list-items">
      <h1 className="hh">{title}</h1>
      <button type="button" className="btnn" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

export default MaleList;
