import "./App.css"

const BannerSection= ()=>{
    return (
        <section id="getting-started" className="global-container">
            <div className="bg-darkblue-4 flex-column">
                <h1 className="color-white">Sewa Mobil di Bogor Sekarang</h1>
                <p className="color-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="/cars">
                    <button className="btn btn-success">Mulai Sewa Mobil</button>
                </a>
            </div>
        </section>
    )
}

export default BannerSection;