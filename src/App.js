import AddGoal from "./components/AddGoal";
import "./App.css";
import GoalList from "./components/GoalList";
import React, {useState} from "react";

function App() {

  const items = [
    { text: "Add your goals and click to remove them", id: 0.29485353 },
  ];


  const [itemList, setItemList] = useState(items);

  const goalListUpdateHandler = (newObj) => {
    setItemList(prevObjs => {
        return [newObj, ...prevObjs]
    })
  }

  const deleteHandler = (param) => {
    setItemList(prevObjs => {
      const updated = prevObjs.filter((each) => {
        return (param != each.id);
      })
      return updated;
    })
  };

  const removeAllDeleteHandler = () => {
    setItemList([]);
  }


  return (
    <div className="full-app">
      <div className="center">
        <AddGoal removeAll={removeAllDeleteHandler} getNewObj={goalListUpdateHandler}/>
        <GoalList getDeleteObj={deleteHandler} itemList={itemList} />
      </div>
    </div>
  );
}

export default App;
