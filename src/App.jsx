import { useState } from 'react';
import './App.css'
import Button from './Components/Button';


const buttonsClases = "btn btn-primary w-75";

function App() {
  const [operator, setOperator]= useState("");
  const [number1, setNumber1] = useState("");
  const [clearScreen, setClearScreen]=useState(false);
  const [screen, setScreen] = useState("0");

  const handleButtonClick= (e)=> {
    const {value}= e.target;
    if (value==='.'){
      if (screen.includes('.')) return;
    }
    if(value === "C"){
      setScreen("0");
      return;
    }
    //!================================
   
    if (clearScreen){
      setScreen(value);
      setClearScreen(false);
      return;
    }
    if (screen === "0" && value!=='.'){
     setScreen(value);
     return;
    }
     setScreen(`${screen}${value}`)
  }


  const handleDelButtonClick = () =>{
    if (screen.length===1){
      setScreen("0");
      return;
    }
    setScreen(screen.slice(0, -1));
  }

  const handleOperationButtonClick = (e)=>{
      setOperator(e.target.value);
          setNumber1(screen);
          setClearScreen(true);

  }

  const handleEqualButtonClick = () =>{
    const a = +number1;
    const b = +screen;
    switch (operator) {
      case "+":
        setScreen((a + b).toString());
        break;

        case "-":
          setScreen((a-b).toString());
          break;
  
        case "*":
          setScreen((a*b).toString());
          break;
  
        case "/":
          setScreen((a/b).toString());
          break;
        default:
          break;
        
    }
  }
  


  const buttonsInfo = [
    [
      {
        classes: buttonClasses,
        value: 'C',
        handleClick: handleButtonClick,
        style: {},
        rows: 1
      },

      {
        classes: buttonClasses,
        value: '/',
        handleClick: handleOperationButtonClick,
        style: {},
        rows: 1
      },

      {
        classes: buttonClasses,
        value: '*',
        handleClick: handleOperationButtonClick,
        style: {},
        rows: 1
      },

      {
        classes: buttonClasses,
        value: '-',
        handleClick: handleOperationButtonClick,
        style: {},
        rows: 1
      }
    ],
    //Segunda fila
    [
      {
        classes: buttonClasses,
        value: '7',
        handleClick: handleButtonClick,
        style: {},
        rows: 1
      },

      {
        classes: buttonClasses,
        value: '8',
        handleClick: handleButtonClick,
        style: {},
        rows: 1
      },

      {
        classes: buttonClasses,
        value: '9',
        handleClick: handleButtonClick,
        style: {},
        rows: 1
      },

      {
        classes: buttonClasses,
        value: '+',
        handleClick: handleOperationButtonClick,
        style: {height:"80px"},
        rows: 2
      }
    ],
    //Tercer fila
    [
      {
        classes: buttonClasses,
        value: '4',
        handleClick: handleButtonClick,
        style: {},
        rows: 1
      },

      {
        classes: buttonClasses,
        value: '5',
        handleClick: handleButtonClick,
        style: {},
        rows: 1
      },

      {
        classes: buttonClasses,
        value: '6',
        handleClick: handleButtonClick,
        style: {},
        rows: 1
      },
    ],
    //Cuarta fila
    [
      {
        classes: buttonClasses,
        value: '1',
        handleClick: handleButtonClick,
        style: {},
        rows: 1
      },

      {
        classes: buttonClasses,
        value: '2',
        handleClick: handleButtonClick,
        style: {},
        rows: 1
      },

      {
        classes: buttonClasses,
        value: '3',
        handleClick: handleButtonClick,
        style: {},
        rows: 1
      },

      {
        classes: buttonClasses,
        value: '=',
        handleClick: handleEqualButtonClick,
        style: {height:"80px"},
        rows: 2
      }
    ],
    //Quinta fila
    [
      {
        classes: buttonClasses,
        value: 'DEL',
        handleClick: handleDelButtonClick,
        style: {},
        rows: 1
      },

      {
        classes: buttonClasses,
        value: '0',
        handleClick: handleButtonClick,
        style: {},
        rows: 1
      },

      {
        classes: buttonClasses,
        value: '.',
        handleClick: handleButtonClick,
        style: {},
        rows: 1
      },
    ],
  ]

  return (
    <div className="app">
      <h1 className="shadow-sm">Calculadora</h1>
      <table>
        {/* Primer fila*/}
        <tr>
          <td colSpan={4} style={{
            border:"1px solid black",
            textAlign:"end"
          }}>
            <h2>{screen}</h2>
          </td>
        </tr>
        {/* Segunda fila*/}
        {
          buttonsInfo.map((row) => {
            return(
              <tr>
                {
                row.map((cell) => {
                  return(
                    <td rowSpan={cell.rows}>
                      <Button
                        classes={cell.classes}
                        value={cell.value}
                        handleClick = {cell.handleClick}
                        style= {cell.style}
                      />
                  </td>)
                })}
              </tr>
            )
          })
        }
      </table>
    </div>
  )
}

export default App