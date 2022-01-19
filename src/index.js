import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './components/Primeiro'
import ComParamentro from './components/ComParamentro'

ReactDOM.render(
    
    <div>
        <Primeiro />
        
        <ComParamentro titulo="Esse é o título"
                       subtitulo="Esse é o subtítulo"/>

        <ComParamentro titulo="Opa"
                       subtitulo="Epa"/>
     </div>,
        document.getElementById('root')
)