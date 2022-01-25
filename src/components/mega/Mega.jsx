/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';

export default (props) => {
    const [numeros, setNumeros] = useState(Array(props.qtdeNumero).fill(0))

    
    function gerarNumerosNaoContido(array) {
        const min = 1
        const max = 60

        const novoNumero = parseInt(Math.random() * (max - min)) + min
        return array.includes(novoNumero)
            ? gerarNumerosNaoContido(array) : novoNumero
    }

   

    function gerarNumeros() {
        const novoArray = Array(props.qtdeNumero)
            .fill(0)
            .reduce((a, e) => {
                const novoNumero = gerarNumerosNaoContido(a)
                return [...a, novoNumero]
            }, []) 
            .sort((a, b) => a - b)
        setNumeros(novoArray)
    }



    // function gerarNumeros( ) {
    //     const novoArray = Array(props.qtdeNumero)
    //         .fill(0)
    //         .reduce(a  => [...a, gerarNumerosNaoContido(a)], []) 
    //         .sort((a, b) => a - b)
    //     setNumeros(novoArray)
    //     //setNumeros([1,2,3,4,5,6,7,8])

    // }

   
        
  


    return (
        <>
            <h3>Mega</h3>
            <h4>{numeros.join(' ')}</h4>
            <button onClick={gerarNumeros}>Gerar Número</button>
        </>
    );
};


