import customStyles from "./customComponents.module.css";

function NotesTextContent(props) {
    return (
        <div className={customStyles.notesTextContent}>
            {props.children}
        </div>
    );
}

export default NotesTextContent;
