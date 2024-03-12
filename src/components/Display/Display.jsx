import { useState } from "react";


const Display = () => {

    const [backGround, setBackground] = useState()

    function handleBackground(e) {
        const color = e.target.innerText.toLowerCase() ;
        console.log(color);
        setBackground(color)
    }
    console.log(backGround);
    
    return (
        <div className=" h-screen" style={{backgroundColor: backGround? backGround : 'black'}}>
            <div className="  flex flex-col justify-end h-full pb-12 container mx-auto">
            <ul className="bg-white flex gap-5 justify-center py-4 rounded-xl">
                <li>
                    <button onClick={handleBackground} className= 'bg-[red] text-white px-6 rounded-[22px] py-2' >Red</button>
                </li>
                <li>
                    <button onClick={handleBackground} className= 'bg-[green] text-white px-6 rounded-[22px] py-2' >Green</button>
                </li>
                <li>
                    <button onClick={handleBackground} className= 'bg-[blue] text-white px-6 rounded-[22px] py-2' >Blue</button>
                </li>
                <li>
                    <button onClick={handleBackground} className= 'bg-[olive] text-white px-6 rounded-[22px] py-2' >Olive</button>
                </li>
                <li>
                    <button onClick={handleBackground} className= 'bg-[gray] text-white px-6 rounded-[22px] py-2' >Gray</button>
                </li>
                <li>
                    <button onClick={handleBackground} className= 'bg-[yellow] text-black px-6 rounded-[22px] py-2' >Yellow</button>
                </li>
                <li>
                    <button onClick={handleBackground} className= 'bg-[pink] text-black px-6 rounded-[22px] py-2' >Pink</button>
                </li>
                <li>
                    <button onClick={handleBackground} className= 'bg-[purple] text-white px-6 rounded-[22px] py-2' >Purple</button>
                </li>
                <li>
                    <button onClick={handleBackground} className= 'bg-[lavender] text-black px-6 rounded-[22px] py-2' >Lavender</button>
                </li>
                <li>
                    <button onClick={handleBackground} className= 'bg-[white] text-black px-6 rounded-[22px] py-2 shadow-lg' >White</button>
                </li>
                <li>
                    <button onClick={handleBackground} className= 'bg-[black] text-white px-6 rounded-[22px] py-2' >Black</button>
                </li>
            </ul>

        </div>
        </div>

    );

};



export default Display;