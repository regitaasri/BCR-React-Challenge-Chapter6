import "./App.css"

const Service = ()=>{
    return (
        <section id="container-service" className="no-mp global-container">
            <img
                className="grid-start align-items-center"
                width="460"
                height="430"
                draggable="false"
                src="/img/img_service.png"
                alt=""
            />
            <div className="grid-start flex-column flex-gap-16">
                <h2>Best Car Rental for any kind of trip in Bogor!</h2>
                <p>
                    Sewa mobil di Bogor bersama Binar Car Rental jaminan harga lebih murah
                    dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan
                    terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
                </p>
                <ul className="no-mp flex-column flex-gap-20">
                    <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                    <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                    <li>Sewa Mobil Jangka Panjang Bulanan</li>
                    <li>Gratis Antar - Jemput Mobil di Bandara</li>
                    <li>Layanan Airport Transfer / Drop In Out</li>
                </ul>
            </div>
        </section>
    )
}

export default Service;