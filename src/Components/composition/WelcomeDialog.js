import Fancyborder from "./Fancyborder";
import "./App.css";

function WelcomeDialog(){
    return(
        <Fancyborder color="blue">
            <h1 className="Dialog-title">Welcome </h1>
            <p>Thank you for visiting our mission </p>
        </Fancyborder>
    )
}


export default WelcomeDialog;