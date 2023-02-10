
function SplitPane(props){

    return(
        <div className="splitpane">
            <div className="splite-left">
                {props.left}
            </div>
            <div className="splite-right">
                {props.right}
            </div>
        </div>
    )
}


export default SplitPane;