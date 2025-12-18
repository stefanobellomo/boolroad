import journeysData from "../assets/journeysData"
import { useState, useEffect } from "react";
import Card from "../components/Card";

export default function Homepage() {

    const [data, setData] = useState(journeysData)

    return (

        <section className="homepage">
            <div className="container">
                <div className="row row-cols-2 row-cols-lg-3 mt-3">

                    {data.map(journey => (
                        <div className="col p-4">
                            <Card key={journey.id} image={journey.immagine} title={journey.meta} inizio={journey.data_partenza} fine={journey.data_ritorno} link={`/${journey.id}`} />
                        </div>
                    ))}

                </div>
            </div>
        </section>

    )
}