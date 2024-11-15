import "./Header.css";

function Header() {

    const isListView = localStorage.getItem("islistview") === "true";

    return(
        <div className="header-container">
            <span>Task Manager app</span>
            <span className="header-list-view-button">{isListView ? "List View" : "Grid View"}</span>
        </div>
    )
}

export default Header;