import { useState } from 'react';

function ChildTwo({
  parentState, 
  setParentState, 
  childOneState, 
  setChildOneState, 
  appState, 
  setAppState,
  childTwoState,
  setChildTwoState
}) {
  const initialValues = {
    app: '',
    parent: '',
    childone: '',
    childtwo: '',
  };
  const [values, setValues] = useState(initialValues);
  const [animate, setAnimate] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setAppState(values.app)
    setParentState(values.parent)
    setChildOneState(values.childone)
    setChildTwoState(values.childtwo)
    setAnimate(!animate)
  }
  
  return (
    <div className="GrandChild">
      <h3>buttons to control all parent states</h3>
      <form onSubmit={handleSubmit}>
        <div>
          appState
          <input
            value={values.app}
            onChange={handleInputChange}
            name="app" //IMPORTANT 
            label="app"
          />
        </div>
        <div>
          parentState
          <input
            value={values.parent}
            onChange={handleInputChange}
            name="parent" //IMPORTANT 
            label="parent"
          />
        </div>
        <div>
          childOneState
          <input
            value={values.childone}
            onChange={handleInputChange}
            name="childone" //IMPORTANT 
            label="childone"
          />
        </div>
        <div>
          childTwoState
          <input
            value={values.childtwo}
            onChange={handleInputChange}
            name="childtwo" //IMPORTANT 
            label="childtwo"
          />
        </div>
        <button type="submit"> Submit </button>
      </form>
      <p className="AppState">AppState: {appState}</p>
      <p className="ParentState">Parent's GrandChild: {parentState} </p>
      <p className="ChildOneState">ChildOne's State: {childOneState}</p>
      <p className="ChildTwoState">ChildTwo's State: {childTwoState}</p>
    </div>
  );
}

export default ChildTwo;