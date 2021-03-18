import React from 'react';

import Aleatorio from './components/basicos/NumeroRandom'
import Fragmento from './components/basicos/Fragmento';
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro';


export default props =>
    <div id="app">
        <h1>Fundamentos React</h1>
        
        <Aleatorio
        min = {10}
        max = {60}
        />
        <Fragmento></Fragmento>
        <ComParametro
            titulo="Nosso segundo Componente"
            aluno="Pedro"
            nota={9.6}
        />
        <Primeiro></Primeiro>
    </div>
