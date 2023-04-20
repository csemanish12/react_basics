export default function Meme() {
    return (
        <main className="main">
        <form className="form">
                <input  type='text' placeholder='Top Text' className="form--input"/>
                <input type='text' placeholder='Bottom Text' className="form--input"/>
            <button type='submit' className="form--button">Get a new meme image 🖼</button>
        </form>
        </main>
    )
}