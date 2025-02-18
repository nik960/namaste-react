const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:'child'},
        React.createElement("h1",{},"I am H1 Tag")
    )
)


/*const heading=React.createElement("h1",{id:'heading'},"Hello World From React!")
*/const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)