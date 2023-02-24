import customStyles from "./customComponents.module.css";

function TextContent(props) {
    return (
        <div className={customStyles.textContent}>
            {props.children}
        </div>
    );
}

export default TextContent;
