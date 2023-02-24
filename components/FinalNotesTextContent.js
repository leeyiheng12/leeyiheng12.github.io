import customStyles from "./customComponents.module.css";

function FinalNotesTextContent(props) {
    return (
        <div className={customStyles.finalNotesTextContent}>
            {props.children}
        </div>
    );
}

export default FinalNotesTextContent;
