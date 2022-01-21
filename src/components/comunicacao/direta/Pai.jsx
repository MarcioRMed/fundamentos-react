/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

import Filho from './Filho'

export default props => 
    <div>
        <Filho {...props}><strong>João</strong></Filho>
        <Filho sobrenome={props.sobrenome}>Maria</Filho>
        <Filho sobrenome="Silva">Pedro</Filho>
    </div>




//em vez de voce ter amarrado dentro do componente pai