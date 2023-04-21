import React from "react"
import memesData from "./MemeData"

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImage, setAllMemeImage] = React.useState(memesData)

    function getMemeImage(){
        const memesArray = allMemeImage.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url
            }
        })

    }


    return (
        <main className="main">
        <div className="form">
                <input  type='text' placeholder='Top Text' className="form--input"/>
                <input type='text' placeholder='Bottom Text' className="form--input"/>
            <button type='submit' className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
            <img className="meme--image" src={meme.randomImage}  />
        </div>
        </main>
    )
}