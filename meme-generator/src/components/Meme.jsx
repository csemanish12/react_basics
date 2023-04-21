import React from "react"
import memesData from "./MemeData"

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        console.log("number:", randomNumber)
        setMemeImage(memesArray[randomNumber].url)

    }


    return (
        <main className="main">
        <div className="form">
                <input  type='text' placeholder='Top Text' className="form--input"/>
                <input type='text' placeholder='Bottom Text' className="form--input"/>
            <button type='submit' className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
            <img className="meme--image" src={memeImage}  />
        </div>
        </main>
    )
}