import './App.css'

import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParamentro from './components/basicos/ComParamentro'

import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'

import Repeticao from './components/Repeticao'


import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'



// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (

    <div className="App">

<Card titulo=" #06 - Condicional v2">
            <CondicionalComIf numero={10}/>
        </Card>

<Card titulo=" #05 - Condicional v1">
            <Condicional numero={11}/>
        </Card>

<Card titulo=" #04 - Repetição">
            <Repeticao />
        </Card>

        <Card titulo="#03 - Componentes com Filhos">
            
        <ComFilhos> 
            <ul>
                <li>Ana</li>
                <li>Bia</li>
                <li>Carlos</li>
                <li>Daniel</li>
            </ul>

        </ComFilhos>
            
            
        </Card>

        <Card titulo="#02 - Componente com Paramentro">
            <ComParamentro titulo="Esse é o título"
                         subtitulo="Esse é o subtítulo" />

            
        </Card>

        <Card titulo=" #01 - Primeiro Componente">
            <Primeiro />
        </Card>



       

        

 


    </div>

);



