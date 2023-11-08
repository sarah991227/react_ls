function Sample(){
 return(
    <>
    <SkipComponent/>
    <Header/>
    <WrapComponent/>
    <Footer/>
    </>
 )
}

//Skip
function SkipComponent(){
    return(
        <>
            <ul className = "skip">
                <li><a href = "#main">콘텐츠바로가기</a></li>
            </ul>
        </>
    );
}

//Header
function Header(){
    return(
        <>
        <header>
            <img src = "img/logo.png" alt = "logo"/>
        </header>
        </>
    );
}

//Wrap
function WrapComponent(){
    return(
        <>
        <MainComponent/>
        </>
    );
}
//main
function MainComponent(){
    return(
        <>
        <div id = "menubox">
            <nav id = "menu">
                <ul>
                    <li><a href = "#">HOME</a></li>
                    <li><a href = "#">BRAND</a></li>
                    <li><a href = "#">STORY</a></li>
                    <li><a href = "#">CONTACT</a></li>
                </ul>
            </nav>
            <div className = "submenu">
                <div className = "box">
                    <ul>
                        <li><a href = "#">LIST</a></li>
                        <li><a href = "#">LIST</a></li>
                        <li><a href = "#">LIST</a></li>
                        <li><a href = "#">LIST</a></li>
                    </ul>
                    <ul>
                        <li><a href = "#">LIST</a></li>
                        <li><a href = "#">LIST</a></li>
                        <li><a href = "#">LIST</a></li>
                        <li><a href = "#">LIST</a></li>
                    </ul>
                    <ul>
                        <li><a href = "#">LIST</a></li>
                        <li><a href = "#">LIST</a></li>
                        <li><a href = "#">LIST</a></li>
                        <li><a href = "#">LIST</a></li>
                    </ul>
                    <ul>
                        <li><a href = "#">LIST</a></li>
                        <li><a href = "#">LIST</a></li>
                        <li><a href = "#">LIST</a></li>
                        <li><a href = "#">LIST</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <section id = "banner">
            <div><img src = "img/banner1.jpeg" alt = "ban" width = "100%" height = "100%"/></div>
            <div><img src = "img/banner2.jpg" alt = "ban" width = "100%" height = "100%" /></div>
        </section>

        <section id = "main">
            <h2>LIST</h2>
            <ul>
                <li><a href = "#"><img src = "img/pr1.png" alt = "1"/></a></li>
                <li><a href = "#"><img src = "img/pr2.png" alt = "1"/></a></li>
                <li><a href = "#"><img src = "img/pr3.png" alt = "1"/></a></li>
                <li><a href = "#"><img src = "img/pr4.png" alt = "1"/></a></li>
            </ul>
        </section>

        <section id = "main1">
            <h2>LIST</h2>
            <ul>
                <li><a href = "#"><img src = "img/pr1.png" alt = "1"/></a></li>
                <li><a href = "#"><img src = "img/pr2.png" alt = "1"/></a></li>
                <li><a href = "#"><img src = "img/pr3.png" alt = "1"/></a></li>
                <li><a href = "#"><img src = "img/pr4.png" alt = "1"/></a></li>
            </ul>
        </section>

        <section id = "ban1">
            <img src = "img/banner2.jpg" alt = "bb"/>
        </section>

        <section id = "main2">
            <h2>LIST</h2>
            <ul>
                <li><a href = "#"><img src = "img/pr1.png" alt = "1"/></a></li>
                <li><a href = "#"><img src = "img/pr2.png" alt = "1"/></a></li>
                <li><a href = "#"><img src = "img/pr3.png" alt = "1"/></a></li>
                <li><a href = "#"><img src = "img/pr4.png" alt = "1"/></a></li>
            </ul>
        </section>
        </>
    );
}
function Footer(){
    return (
        <>
        <footer>
            FOOTER
        </footer>
        </>
    )
}

ReactDOM.render(
    <Sample/>,
    document.getElementById("root")
);