import { useState } from 'react';
import './App.css'

const buttonsClases = "btn btn-primary w-75";

function App() {
  const [screen, setScreen] = useState('0')

  const handleButtonClick= (e)=> {
    const {value}= e.target;
    if (value==='.'){
      if (screen.includes('.')) return;
    }
    if(value === 'C'){
      setScreen('0')
      return;
    }

    if (screen === '0' && value !=='.'){
     setScreen(value);
     return;
    }
     setScreen(`${screen}${value}`);
  }
  const handleDelButtonClick = () =>{
    if (screen.length===1){
      setScreen('0')
      return;
    }
    setScreen(screen.slice(0, -1));

  }

  return (
    <div className='app'>

      
      <h1 className='shadow-sm'>Calculadora</h1>
      <table>
        {/* Primer fila*/}
        <tr>
          <td colSpan={4} style=
          {{border:"1px solid black",
          textAlign: "end"
          }}>
            <h2>{screen}</h2>
            </td>
        </tr>
        {/* Segunda fila*/}
        <tr>
          <td>
            <button type='button'
              className={buttonsClases}
              value="C"
              onClick={(e)=> handleButtonClick(e)} 
              >C
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonsClases}>
              /
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonsClases}>
              *
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonsClases}>
              -
            </button>
          </td>
        </tr>
        {/* Tercer fila*/}
        <tr>
          <td>
            <button type='button'
              className={buttonsClases}
              value="7"
              onClick={(e)=> handleButtonClick(e)}
              >7
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonsClases}
              value="8"
              onClick={(e)=> handleButtonClick(e)}
              >8
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonsClases}
              value="9"
              onClick={(e)=> handleButtonClick(e)}
             >9
            </button>
          </td>
          <td rowSpan={2}>
            <button 
            type="button"
            className={buttonsClases}
            style={{height: "80px"}}
            >+
            </button>
          </td>
        </tr>
        {/* Cuarta fila*/}
        <tr>
          <td>
            <button type='button'
              className={buttonsClases}
              value="4"
              onClick={(e)=> handleButtonClick(e)}
              >4
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonsClases}
              value="5"
              onClick={(e)=> handleButtonClick(e)}
              >5
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonsClases}
              value="6"
              onClick={(e)=> handleButtonClick(e)}
              >6
            </button>
          </td>
        </tr>
        {/* Quinta fila*/}
        <tr>
          <td>
            <button type='button'
              className={buttonsClases}
              value="1"
              onClick={(e)=> handleButtonClick(e)}
              >1
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonsClases}
              value="2"
              onClick={(e)=> handleButtonClick(e)}
              >2
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonsClases}
              value="3"
              onClick={(e)=> handleButtonClick(e)}
              >
              3
            </button>
          </td>
          <td rowSpan={2}>
            <button type="button"
            className={buttonsClases}
            style={{height: "80px"}}
            >
              =
            </button>
          </td>
        </tr>
        {/* Sexta fila*/}
        <tr>
          <td>
            <button 
            type="button"
            className={buttonsClases}
            onClick={handleDelButtonClick}
            >DEL</button>
          </td>
          <td>
            <button 
            type="button"
            className={buttonsClases}
            value="9"
            onClick={(e)=> handleButtonClick(e)}
            >0</button>
          </td>
          <td>
            <button 
            type="button"
              className={buttonsClases}
              value="."
              onClick={(e)=> handleButtonClick(e)}
            >.</button>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default App
