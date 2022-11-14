import { useState } from "react"
import ChildTwo from "./ChildTwo";
import Card from "./Card";

function ChildOne({parentState, setParentState, appState, setAppState}) {
  const [childOneState, setChildOneState] = useState("childOneState Default")
  let childOneMsg = "I'm a new message from the ChildOne card"
  let title = "I'm a card inside the ChildOne component"

  return (
    <div className="ChildOne">
      <h1 className="ChildOneState">Child One state inside ChildOne: {childOneState}</h1>
      <p className="ParentState">ParentState inside Childone: {parentState} </p>
      <Card currentState={childOneState} setState={setChildOneState} msg={childOneMsg} title={title}/>
      <ChildTwo 
        parentState={parentState}
        setParentState={setParentState}
        childOneState={childOneState}
        setChildOneState={setChildOneState}
        appState={appState} 
        setAppState={setAppState}
      />
      
    </div>
  );
}

export default ChildOne;