import "./GoalItems.css";

const GoalItems = function (props) {


    const deletedObj = () => {
        props.getDeletedObj(props.id);
    }

  return (
    <>
      <div onClick={deletedObj} className="each-item">{props.text}</div>
    </>
  );
};

export default GoalItems;
