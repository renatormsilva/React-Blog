const elementOne = (
    <header>
        <div class="name">
            <h1>Blog do Renatinho</h1>
        </div>

        <div class="tags">
            <a href="#" id="now">SOBRE</a> -
            <a href="#">TECNOLOGIAS</a> -
            <a href="#">CONTATO</a>
        </div>

    </header>
);

const elementTwo = (
    <div class="content">
        <div class="img">
            <img src="public/img/foto3.jpg" alt="renatinho's pic"></img>
        </div>

        <div class="letters">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec leo sapien, consequat et pretium blandit, fringilla at enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam suscipit consectetur imperdiet. Nullam consectetur vitae mauris at faucibus. Donec vitae vestibulum nisl, eu elementum orci. Suspendisse potenti. Vivamus eu congue urna.</p>
        </div>
    </div>

);


ReactDOM.render(
    [elementOne, elementTwo],
    document.getElementById('root')
);
