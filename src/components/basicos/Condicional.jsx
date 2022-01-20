/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default props => {

    return (
        <div>
            <h2>O número é {props.numero}</h2>
            {props.numero % 2 === 0  ?                <span> Par </span> : <span> Ímpar </span>


            }
            
            
            
        </div>
    )
}



//esperar via props um determinado número

//expressão

// {props.numero % 2 === 0} ? par : impar - operador ternário

// 0 Par
// impar