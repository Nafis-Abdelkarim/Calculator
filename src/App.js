import { useReducer } from "react"
import DigitButton from "./DigitButton"
import OperationButton from "./OperationButton"
import "./style.css"
import { act } from "@testing-library/react"

const Actions = {
  AddDigit: 'add-digit',
  ChooseOperation: 'Choose-operation',
  Clear: 'clear',
  DeleteDigit: 'delete-digit',
  Evaluate: 'evaluate'
}

//I've use a reducer ro manage all of state 
function reducer(state, {type, payload}) {
  switch(type) {
    case Actions.AddDigit:
      return {
        ...state,
        currentOperend: `${currentOperend || ""} ${payload.digit}`,
      }
  }
}

function App(){
  const [{currentOperend, previousOperend, operation}, dispatch] = useReducer(
    reducer, 
    {}
  )

  // dispatch({type: Actions.AddDigit, payload: {digit: 1}})
  return(
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operend">{previousOperend} {operation}</div>
        <div className="current-operend">{currentOperend}</div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      {/* <DigitButton digit="/" dispatch={dispatch}/> */}
      <OperationButton operation="/" dispatch={dispatch}/>
      <DigitButton digit="1" dispatch={dispatch}/>
      <DigitButton digit="2" dispatch={dispatch}/>
      <DigitButton digit="3" dispatch={dispatch}/>
      <OperationButton operation="*" dispatch={dispatch}/>
      <DigitButton digit="4" dispatch={dispatch}/>
      <DigitButton digit="5" dispatch={dispatch}/>
      <DigitButton digit="6" dispatch={dispatch}/>
      <OperationButton operation="-" dispatch={dispatch}/>
      <DigitButton digit="7" dispatch={dispatch}/>
      <DigitButton digit="8" dispatch={dispatch}/>
      <DigitButton digit="9" dispatch={dispatch}/>
      <OperationButton operation="+" dispatch={dispatch}/>
      <DigitButton digit="." dispatch={dispatch}/>
      <DigitButton digit="0" dispatch={dispatch}/>
      <button className="span-two">=</button>
    </div>
  )
}

export default App