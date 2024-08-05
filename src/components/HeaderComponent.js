import { useContext, useState } from "react";
import ArchLogo from "./ArchLogo";
import { SharedContext } from "../hooks/SharedContext";

const HeaderComponent = () => {
    const { genre, setGenre } = useContext(SharedContext);

    const genreList = ["All", "Action", "Comedy", "Horror", "Drama", "SciFi"];

    const [lastClickedGenre, setLastClickedGenre] = useState(null);

    const selectGenreHandler = (curGenre) => {
        const isDoubleClick = lastClickedGenre === curGenre;
        if (isDoubleClick) {
            setGenre('All');
        } else {
            setGenre(curGenre);
        }
        setLastClickedGenre(curGenre);
    };

    return (
        <div className="mf-header">
            <div className="mf-h-upper-section">
                <ArchLogo logoName="MOVIEFIX" />
                
            </div>
            <div className="mf-h-lower-section">
                {genreList?.map((gen, idx) => (
                    <button
                        key={idx}
                        className={`mf-genre ${gen === genre ? 'mf-active-btn' : ''}`}
                        onClick={() => selectGenreHandler(gen)}
                    >
                        {gen}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default HeaderComponent;
