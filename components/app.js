function DivName() {
    return (
        React.createElement('div', { className: "name" },
            React.createElement(H1)
        )
    )
}

function H1() {
    return React.createElement('h1', null, 'Blog do Renatinho')
}




function DivTags() {
    return (
        React.createElement('div', { className: "tags" },
            React.createElement(A)
        )
    )
}

function A() {
    return (
        [
            React.createElement('a', { href: "#", id: "now" }, "SOBRE - "),
            React.createElement('a', { href: "#" }, "TECNOLOGIAS - "),
            React.createElement("a", { href: "#" }, "CONTATO")
        ]
    )
}

function Header() {
    return (
        React.createElement("header", null,
            React.createElement(DivName),
            React.createElement(DivTags)
        )
    )
}





function DivImg() {
    return (
        React.createElement('div', { className: "img" },
            React.createElement(Img)
        )
    )
}

function Img() {
    return React.createElement('img', { src: "public/img/foto3.jpg", alt: "renatinho's pic" })
}


function DivLetters() {
    return (
        React.createElement('div', { className: "letters" },
            React.createElement(P)
        )
    )
}

function P() {
    return React.createElement("p", null,
        `   
            Lorem ipsum dolor sit 
            amet, consectetur adipiscing 
            elit. Donec leo sapien, consequat
            et pretium blandit, fringilla at 
            enim. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices
            posuere cubilia curae; Etiam suscipit 
            consectetur imperdiet. Nullam consectetur 
            vitae mauris at faucibus. Donec vitae vestibulum
            nisl, eu elementum orci. Suspendisse potenti. 
            Vivamus eu congue urna.
        `
    )
}

function DivContent() {
    return (
        React.createElement("div", { className: "content" },
            React.createElement(DivImg),
            React.createElement(DivLetters)
        )
    )
}

ReactDOM.render(
    [
        React.createElement(Header),
        React.createElement(DivContent)
    ],
    document.getElementById("app")

)


