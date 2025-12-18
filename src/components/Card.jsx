import { Link } from "react-router-dom"

export default function Card({ meta, data_partenza, data_ritorno, link }) {

    return (

        <>

            {/* card immagine */}
            <div div className="card-custom d-flex flex my-5" >
                <div className="image-box">
                    <img src="#" alt="" />
                </div>


                {/* contenitore info */}
                <div id="info-card" className="d-flex flex-column">
                    {/* dettagli info card */}
                    <div className="content-box d-flex flex-column border">
                        <h3 className="mb-3">{meta}</h3>

                        <h4 className="fw-normal">{data_partenza}</h4>
                        <h4 className="fw-normal">{data_ritorno}</h4>

                        <div id="container-button">
                            <Link to={link} >

                                <button className="btn btn-primary mt-4 align-self-start">
                                    Dettagli
                                </button>

                            </Link>

                        </div>
                    </div>
                </div>


            </div >

        </>
    )
}