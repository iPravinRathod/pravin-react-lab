const parent = React.createElement(
    "div",
    { id: 'parent' },
    React.createElement(
        "div",
        { id: 'child' },
        [
            React.createElement("h1", { id: 'heading' }, "Namaste React!!"),
            React.createElement("h2", { id: 'heading2' }, "Namaste React!!")
        ]))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);