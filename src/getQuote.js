import { useState } from "react";
import { useEffect } from "react";

export default function Quote({color}){
    const [quote,setQuote]=useState('Hit button for quote');
    const apiUrl = 'https://api.quotable.io/random';
    useEffect(() => {
        let ignore = false;
        
        if (!ignore)  {getQuote();color()}
        return () => { ignore = true; }
        },[]);
    async function getQuote(){
        const response = await fetch(apiUrl);
        let data = await response.json();
        setQuote(data)
    }
    return (
        <div id="quote-box">
        <i id="text">"{quote.content}"</i>
        <br />
        <b id="author"><i>-{quote.author}</i></b>
        <br />
        <button id="new-quote" className="button-1" onClick={()=>{color();getQuote()}}>New Quote</button>
        <div id="icon">
        <a id="tweet-quote" title="tweet this quote!" href="twitter.com/intent/tweet"><i class="fa-brands fa-twitter fa-lg"></i></a>
        </div>
        </div>
    )}

    
