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
  const [childTwoState, setChildTwoState] = useState("childTwoState Default")
  let childTwoMsg = "I'm a new message from the ChildTwo card"
  let title = "I'm a card inside the ChildTwo component"

  return (
    <div className="ChildTwo">
      <h1 className="ChildTwoState">Child Two State inside ChildTwo: {childTwoState}</h1>
      <p className="ParentState">ParentState inside Childtwo: {parentState} </p>
      <p className="ChildOneState">ChildOneState inside ChildTwo: {childOneState}</p>
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