import { useState } from "react"
import ChildTwo from "./ChildTwo";
import Card from "./Card";

function ChildOne({parentState, setParentState}) {
  const [childOneState, setchildOneState] = useState("childOneState Default")
  let childOneMsg = "I'm a new message from the ChildOne card"
  let title = "I'm a card inside the ChildOne component"

  return (
    <div className="ChildOne">
      <h1 className="ChildOneState">Child One state inside ChildOne: {childOneState}</h1>
      <p className="ParentState">ParentState inside Childone: {parentState} </p>
      <Card currentState={childOneState} setState={setchildOneState} msg={childOneMsg} title={title}/>
      <ChildTwo 
        parentState={parentState}
        setParentState={setParentState}
        childOneState={childOneState}
        setchildOneState={setchildOneState}
      />
      
    </div>
  );
}

export default ChildOne;