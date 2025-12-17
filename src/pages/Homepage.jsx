import journeysData from "../assets/journeysData"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Homepage() {

    const [data, setData] = useState(journeysData)

    return (

        <section className="homepage">
            <div className="container">
                <div className="row row-cols-2 row-cols-lg-3 mt-3">

                    {data.map(journey => (
                        <div className="col" key={journey.id}>
                            <Link to={`/${journey.id}`}>
                                <div className="card mt-3">
                                    <h2>{journey.meta}</h2>
                                    <h6>{journey.data_partenza}</h6>
                                    <h6>{journey.data_ritorno}</h6>
                                </div>
                            </Link>
                        </div>
                    ))}

                </div>
            </div>
        </section>

    )
}