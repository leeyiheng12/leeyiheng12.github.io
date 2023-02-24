import customStyles from "./customComponents.module.css";

function ArticleTitle(props) {
    return (
        <div className={customStyles.articleTitle}>
            {props.children}
        </div>
    );
}

export default ArticleTitle;
