import { Grechen_Fuemen } from 'next/font/google';
import Reader from './reader'


import { ButtonHTMLAttributes, useState } from "react"
export default function Msg({ header, dbc, actIcon, inactIcon }: { header: any, dbc: any, actIcon: any, inactIcon: any }) {
    const [isSending, setIsSending] = useState(false);
    const arr = []
    var it = 0
    for (const subKeys in dbc[header]) {
        arr.push(<Reader head={subKeys} value={JSON.stringify(dbc[header][subKeys])} key={subKeys} />)
        it++;
    }

    function toggle() {
        // const but = document.getElementById(`button_${header}`)
        setIsSending(!isSending);
        // if (!isSending) {
        //     but!.style.backgroundColor = "green";
        // } else {
        //     but!.style.backgroundColor = "red";
        // }
        console.log(!isSending);

        if(!isSending){
            const subObj = [];
            for(const subKeys in dbc[header]){
                subObj.push(`${subKeys}: ${(document.getElementById(`${subKeys}`) as HTMLInputElement).value}`)
            }
            const obj = {
                header: subObj
            }
            sndMsg(obj)
        }
    }

    function sndMsg(obj : Object){
        fetch('/api/dbc/send',{
            method: 'POST', 
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(obj)
        })
    }

    return (
        <div>
            <div className="readerFloatbox">
                <h1>{header}</h1>
                <button id={`button_${header}`} type="button" onClick={toggle} style={isSending ? {backgroundColor: "red"} :{backgroundColor: "green"} }>{isSending ? actIcon : inactIcon}</button>
                {arr}
            </div>
            <br />
        </div>
    );
}
