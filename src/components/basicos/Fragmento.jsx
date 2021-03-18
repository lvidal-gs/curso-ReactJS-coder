import React from 'react';

export default function Fragmento(props) {
    return (
    /*Isso não mostra a tag que os engloba
    Pode-se usar também "<></>" porém ele não aceita propriedades
    */
        <React.Fragment>
            <h2>Cuidado com esse erro!</h2>
            <p>Ele é muito comum.</p>
        </React.Fragment>);
}