import React from "react";
import ReactDOM from "react-dom/client";

// const nestedHeaderElement = React.createElement('div', { className: 'title' },
//     [React.createElement('h1', {}, 'This is h1 tag'),
//     React.createElement('h2', {}, 'This is h2 tag'),
//     React.createElement('h3', {}, 'This is h3 tag'),]
// )

// const nestedHeaderElement = <div class="title">
//     <h1>This is h1 tag</h1>
//     <h2>This is h2 tag</h2>
//     <h3>This is h3 tag</h3>
// </div>
const TitleComponent = () => {
    return (
        < h1 > This is h1 tag</h1 >
    )
}
const Header = () => {
    return (
        <div>
            Logo
            Searchbar
            userIcon
        </div>
    )
}
const NestedHeaderElement = () => {
    return (
        <div className="title">
            <Header />
            {TitleComponent()}
            <TitleComponent />
            <TitleComponent></TitleComponent>
            <h1>This is h1 tag</h1>
            <h2>This is h2 tag</h2>
            <h3>This is h3 tag</h3>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<NestedHeaderElement />); 