import { useState } from 'react';
import './App.css'

const buttonsClases = "btn btn-primary w-75";

function App() {
  const [screen, setScreen] = useState('0')

  const handleButtonClick= ()=> {
    if (screen === '0'){
      setScreen(9)
    }else{
      setScreen(`${screen}9`)
    }
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
              className={buttonsClases}>
              C
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
              >7
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonsClases}
              >8
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonsClases}
              onClick={handleButtonClick}
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
              className={buttonsClases}>
              4
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonsClases}>
              5
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonsClases}>
              6
            </button>
          </td>
        </tr>
        {/* Quinta fila*/}
        <tr>
          <td>
            <button type='button'
              className={buttonsClases}
              >1
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonsClases}>
              2
            </button>
          </td>
          <td>
            <button type='button'
              className={buttonsClases}>
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
            >{'DEL'}</button>
          </td>
          <td>
            <button 
            type="button"
            className={buttonsClases}
            >0</button>
          </td>
          <td>
            <button 
            type="button"
              className={buttonsClases}
            >.</button>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default App
