import { useState } from "react"
import Card from "./Card"

function ChildTwo({parentState, setParentState, childOneState, setChildOneState}) {
  const [childTwoState, setchildTwoState] = useState("childTwoState Default")
  let childTwoMsg = "I'm a new message from the ChildTwo card"
  let title = "I'm a card inside the ChildTwo component"

  return (
    <div className="ChildTwo">
      <h1 className="ChildTwoState">Child Two State inside ChildTwo: {childTwoState}</h1>
      <p className="ParentState">ParentState inside Childtwo: {parentState} </p>
      <p className="ChildOneState">ChildOneState inside ChildTwo: {childOneState}</p>
      <Card currentState={childTwoState} setState={setchildTwoState} msg={childTwoMsg} title={title}/>
    </div>
  );
}

export default ChildTwo;