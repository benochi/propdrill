import { useState } from "react"

import ChildOne from "./ChildOne";
import Card from "./Card"

function Parent() {
  const [parentState, setParentState] = useState("Parent Default")
  let parentMsg = "I'm a new message from the Parent card"
  let title = "I'm a card inside the Parent component"

  return (
    <div className="Parent">
      <h1 className="ParentState">Parent State inside Parent: {parentState}</h1>
      <ChildOne parentState={parentState} setParentState={setParentState} />
      <Card currentState={parentState} setState={setParentState} msg={parentMsg} title={title}/>
    </div>
  );
}

export default Parent;