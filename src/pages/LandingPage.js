import BodyComponent from "../components/BodyComponent";
import HeaderComponent from "../components/HeaderComponent"
import { SharedProvider } from "../hooks/SharedContext";

const LandingPage = () => {
    return <div className="mf-lp-container">
        <SharedProvider>
            <HeaderComponent />
            <BodyComponent />
        </SharedProvider>

    </div>

}

export default LandingPage;