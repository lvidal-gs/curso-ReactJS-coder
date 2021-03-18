import React from 'react'

export default function ComParametro(props) {
    //const sub = props.subtitulo
    //const nota = prompt("Insira uma nota")
    let status = props.nota >= 7 ? 'aprovado' : 'de recuperação'
    return (
    <div>
        <h2>{ props.titulo }</h2>
        <p>
            <strong>{props.aluno} </strong>
            sua nota é:
            <strong> {props.nota}! </strong>
            Você está <i>{status}</i>.
        </p>
    </div>
    );
}