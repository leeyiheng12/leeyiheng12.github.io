import customStyles from "./customComponents.module.css";

function QuestionTextContent(props) {
    return (
        <div className={customStyles.questionTextContent}>
            {props.children}
        </div>
    );
}

export default QuestionTextContent;
