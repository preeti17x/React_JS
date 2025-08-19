git add .
const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "div",{id: "child"},
        [React.createElement("h1",
    {},"hello I am H1 Tags"),React.createElement("h2",
    {},"hello I am H2 Tags")]));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)

const parent1 = React.createElement(
    "div", 
    {id: "parent1"},
    React.createElement(
        "div", 
        {id: "child1"},
         [React.createElement("h1", {} , "Hello! Welcome back"),
        React.createElement("h2", {} , "React is a JS Library")]));
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(parent1)
