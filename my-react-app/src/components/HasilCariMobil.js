import { useEffect, useState } from "react";

const HasilCariMobil = ()=>{

    const url = 'https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json';
    const [cars, setCars] = useState([]);

    const getDataCars = async ()=>{
        const response = await fetch(url);
        const dataCar = await response.json();
        setCars(dataCar);
        console.log(cars);
    }

    useEffect( ()=>{
        getDataCars();
    })


    return(

        <div className="container result-container">
                <div className="result d-flex" id="cars-container">
                    {cars.map((car)=>
                        <div className="col-lg-3 col-md-3 col-sm-12 mx-2">
                            <div className="card mx-0 my-4 g-0"  style={{ width:"18rem",boxShadow: "0px 0px 4px" }}>
                                <img src={car.image} className="card-img-top img-fluid" alt={car.manufacture} style={{ height: "195px", borderRadius: "3px", objectFit: 'cover' }} />
                                <div className="card-body" style={{ fontSize: "14px" }}>
                                    <p className="card-title">{car.manufacture} {car.model}</p>
                                    <p className="fw-bold">Rp {car.rentPerDay} / hari</p>
                                    <p className="card-text" style={{ height: "90px" }}>{car.description}</p>
                                    <div className="my-2"><i className="bi bi-people me-2"></i>{car.capacity} Orang</div>
                                    <div className="my-2"><i className="bi bi-gear me-2"></i>{car.transmission}</div>
                                    <div className="my-2"><i className="bi bi-calendar4 me-2"></i>{car.year}</div>
                                    <a href="/#" className="btn btn-success text-white w-100 mt-2 fw-bold mt-4 " style={{ fontSize: "14px" }}>Pilih Mobil</a>
                                </div>
                            </div>
                        </div>
                    )}
                    
                </div>
            </div>

    )
}


export default HasilCariMobil;