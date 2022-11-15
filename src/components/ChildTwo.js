import { useState } from "react"
import Card from "./Card"
import GrandChild from './GrandChild'

function ChildTwo({
  parentState, 
  setParentState, 
  childOneState, 
  setChildOneState, 
  appState, 
  setAppState
}) {
  const [childTwoState, setChildTwoState] = useState("default")
  let childTwoMsg = "CHANGED"
  let title = "I'm a card inside the ChildTwo component"

  return (
    <div className="ChildTwo">
      <h2 className="ChildTwoState">ChildTwo's State: {childTwoState}</h2>
      <p className="ParentState">Parent's State inside ChildOne inside Childtwo: {parentState} </p>
      <p className="ChildOneState">ChildOne's State inside ChildTwo: {childOneState}</p>
      <Card 
        currentState={childTwoState} 
        setState={setChildTwoState} 
        msg={childTwoMsg} 
        title={title}
      />
      <GrandChild 
        parentState={parentState}
        setParentState={setParentState} 
        childOneState={childOneState}
        setChildOneState={setChildOneState} 
        appState={appState} 
        setAppState={setAppState}
        childTwoState={childTwoState}
        setChildTwoState={setChildTwoState}
      />

    </div>
  );
}

export default ChildTwo;