import "./App.css";


function Fancyborder(props){
    return(
        <div className={"Fancyborder Fancyborder-"+props.color}>
            {props.children}
        </div>
    )
}

export default Fancyborder;