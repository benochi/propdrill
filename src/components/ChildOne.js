import { useState } from "react"
import ChildTwo from "./ChildTwo";
import Card from "./Card";

function ChildOne({parentState, setParentState, appState, setAppState}) {
  const [childOneState, setChildOneState] = useState("default")
  let childOneMsg = "CHANGED"
  let title = "I'm a card inside the ChildOne component"

  return (
    <div className="ChildOne">
      <h2 className="ChildOneState">ChildOne's State: {childOneState}</h2>
      <p className="ParentState">Parent's State inside ChildOne: {parentState} </p>
      <Card 
        currentState={childOneState} 
        setState={setChildOneState} 
        msg={childOneMsg} 
        title={title}
      />
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