import customStyles from "./customComponents.module.css";

function AnswerTextContent(props) {
    return (
        <div className={customStyles.answerTextContent}>
            {props.children}
        </div>
    );
}

export default AnswerTextContent;
