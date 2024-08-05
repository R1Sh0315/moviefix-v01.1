import { useContext, useState } from "react";
import ArchLogo from "./ArchLogo";
import { SharedContext } from "../hooks/SharedContext";


const HeaderComponent = () => {
    const { genre, setGenre } = useContext(SharedContext);

    // const [genreList, setGenreList] = useState(["All", "Action", "comedy", "horror", "Drama", "Sci-fi"])
    // const [activeGenre, setActiveGenre] = useState("All");

    const genreList = ["All", "Action", "Comedy", "Horror", "Drama", "SciFi"];


    const selectGenreHandler = (curGenre) => {
        setGenre(curGenre)
        console.log(curGenre)
    }



    return <div className="mf-header">
        <div className="mf-h-upper-section">
            <ArchLogo logoName="MOVIEFIX" />
        </div>
        <div className="mf-h-lower-section">
            {genreList?.map(
                (gen, idx) => <button
                    key={idx}
                    className={`mf-genre ${gen === genre ? 'mf-active-btn' : ''}`}
                    onClick={() => selectGenreHandler(gen)}>{gen}</button>
            )}
        </div>
    </div>
}
export default HeaderComponent;