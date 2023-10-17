head=`
<header class="header">
        
        <nav>
            <div class="container">
                <div class="btn-menu">
                    <label for="btn-menu">☰</label>
                </div>
                    <div class="logo">
                        <h1>Código Gamer</h1>
                    </div>
                    <nav class="menu">
                        <a href="#">Inicio</a>
                        <a href="#">Nosotros</a>
                        <a href="./registro.html">Login</a>
                    </nav>
                </div>
            </header>
            <div class="capa"></div>
        <input type="checkbox" id="btn-menu">
        <div class="container-menu">
            <div class="cont-menu">
                <nav>
                    <a href="#">Rainbow Six:Siege</a>
                    <a href="./LoL.html">League of Legends</a>
                    <a href="./wow.html">World of Warcraft</a>
                    <a href="#">Counter:Strike</a>
                </nav>
                <label for="btn-menu">✖️</label>
            </div>
        </div>
        </nav>
    </header>
    `
document.querySelector("header").innerHTML=head
foot=` <h4><p>Sitio desarrollado por Código Gamer</p></h4>`
document.querySelector("footer").innerHTML=foot