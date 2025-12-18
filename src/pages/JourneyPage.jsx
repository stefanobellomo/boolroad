import { useParams } from "react-router-dom"
import journeysData from "../assets/journeysData"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function JourneyPage() {



    const [data, setData] = useState(journeysData)
    const [search, setSearch] = useState('')
    const { id } = useParams()

    const current = data.find(current => Number(id) === current.id)

    const filteredPartecipanti = current.partecipanti.filter(partecipante => {
        const fullName = `${partecipante.nome} ${partecipante.cognome}`.toLowerCase()
        return fullName.includes(search.toLowerCase())
    })

    const navigate = useNavigate()

    return (
        <section className="journey">
            <div className="container">

                <input
                    className="form-control my-3"
                    type="text"
                    placeholder="Cerca per nome e cognome..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />

                <div className="row row-cols-2">

                    {filteredPartecipanti.map(user => (
                        <div key={user.id} className="col">
                            <div className="card mt-3">
                                <h6>{user.nome}</h6>
                                <h6>{user.cognome}</h6>
                            </div>
                        </div>
                    ))}

                </div>

                <div className="back d-flex justify-content-center my-3">
                    <button className="btn btn-dark" onClick={() => (navigate("/"))}>Torna indietro</button>
                </div>
            </div>
        </section>
    )
}