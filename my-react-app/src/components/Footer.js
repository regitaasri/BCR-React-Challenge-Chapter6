import "./App.css"

const footer= ()=>{

    return (
        <footer className="global-container">
            <ul className="flex-column flex-gap-16 no-mp">
                <li>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</li>
                <li>binarcarrental@gmail.com</li>
                <li>081-233-334-808</li>
            </ul>
            <ul id="footer-nav-marker" className="flex-column flex-gap-16 no-mp">
                {selectedElements}
            </ul>
            <div className="flex-column flex-gap-16">
                <p className="no-mp">Connect with us</p>
                <div className="flex-row flex-gap-16">
                    <a href="https://www.facebook.com/">
                        <img draggable="false" src="/img/icon_facebook.png" alt="" />
                    </a>
                    <a href="https://www.instagram.com/">
                        <img draggable="false" src="/img/icon_instagram.png" alt="" />
                    </a>
                    <a href="https://www.twitter.com/">
                        <img draggable="false" src="/img/icon_twitter.png" alt="" />
                    </a>
                    <a href="https://www.gmail.com/">
                        <img draggable="false" src="/img/icon_mail.png" alt="" />
                    </a>
                    <a href="https://www.twitch.tv/">
                        <img draggable="false" src="/img/icon_twitch.png" alt="" />
                    </a>
                </div>
            </div>
            <div className="flex-column flex-gap-16">
                <p className="no-mp">Copyright Binar 2022</p>
                <div className="logo"></div>
            </div>
        </footer>
    )
}

export default footer;