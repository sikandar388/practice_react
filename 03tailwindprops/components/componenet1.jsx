// function Card(props){
    // console.log(props.channel);
    function Card({channel,userName,btnText='Click Me'}){       //this is destructuring
        console.log(channel)
        return(
        <>
        <div className="w-60 h-60 rounded-xl mt-4 relative overflow-hidden">
            <img
                src="https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g"
                alt="Giphy"
                className="rounded-xl w-full h-full object-cover"
            />
            <p className="absolute top-0 left-0 text-white p-2 rounded-br-xl">
                {userName}
            </p>
            <p className="absolute bottom-0 left-0 text-black p-2 rounded-br-xl">
                <button>{btnText}</button>
            </p>
        </div>

        </>
    )
}

export default Card