import "./App.css"

const HeroSelection = ()=>{
    const appendElement = (
        <a className="no-mp" href="/cars">
            <button className="btn btn-success">Mulai Sewa Mobil</button>
        </a>
    )

    return (
        <section id="hero" className="global-container bg-grey no-mp">
            <div id="hero__text" className="flex-column flex-gap-16 row align-items-center">
            <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                <a href="./index.example.html"><button class="btn btn-success">Mulai Sewa Mobil</button></a>
            </div>
            <img draggable="false" src="/img/img_car.png" alt="" />
        </section>
    )
}

export default HeroSelection;