import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import DetailsCard from "../components/DetailsCard";

export default function JourneyPage({ data, setData }) {

    const { id } = useParams();
    const current = data.find(j => Number(id) === j.id);

    const [search, setSearch] = useState("");

    const [listaPartecipanti, setListaPartecipanti] = useState(
        current?.partecipanti || []
    );

    const [partecipanteForm, setPartecipanteForm] = useState({
        nome: "",
        cognome: "",
        codice_fiscale: "",
        email: "",
        numero: ""
    });

    useEffect(() => {
        setData(prev =>
            prev.map(journey =>
                journey.id === current.id
                    ? { ...journey, partecipanti: listaPartecipanti }
                    : journey
            )
        );
    }, [listaPartecipanti]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPartecipanteForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const nuovoPartecipante = {
            id: Date.now(),
            ...partecipanteForm
        };

        setListaPartecipanti(prev => [...prev, nuovoPartecipante]);

        setPartecipanteForm({
            nome: "",
            cognome: "",
            codice_fiscale: "",
            email: "",
            numero: ""
        });

        // 🔽 CHIUSURA AUTOMATICA ACCORDION
        const collapseEl = document.getElementById("collapseForm");
        if (collapseEl) {
            const bsCollapse = window.bootstrap.Collapse.getOrCreateInstance(collapseEl);
            bsCollapse.hide();
        }
    };

    const filteredPartecipanti = listaPartecipanti.filter(p =>
        `${p.nome} ${p.cognome}`.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className="journey">
            <div className="container">

                <div className="d-flex justify-content-center mb-4">
                    <DetailsCard currentjourney={current} />
                </div>

                {/* ACCORDION FORM */}
                <div className="accordion mb-4" id="accordionForm">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed fw-bold"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseForm"
                            >
                                Aggiungi partecipante
                            </button>
                        </h2>

                        <div
                            id="collapseForm"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionForm"
                        >
                            <div className="accordion-body">

                                <form
                                    onSubmit={handleSubmit}
                                    className="d-flex flex-column gap-3"
                                >

                                    <input
                                        className="form-control"
                                        placeholder="Nome"
                                        name="nome"
                                        value={partecipanteForm.nome}
                                        onChange={handleChange}
                                        required
                                    />

                                    <input
                                        className="form-control"
                                        placeholder="Cognome"
                                        name="cognome"
                                        value={partecipanteForm.cognome}
                                        onChange={handleChange}
                                        required
                                    />

                                    <input
                                        className="form-control"
                                        placeholder="Codice fiscale"
                                        name="codice_fiscale"
                                        value={partecipanteForm.codice_fiscale}
                                        onChange={handleChange}
                                        required
                                    />

                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        name="email"
                                        value={partecipanteForm.email}
                                        onChange={handleChange}
                                        required
                                    />

                                    <input
                                        className="form-control"
                                        placeholder="Numero di telefono"
                                        name="numero"
                                        value={partecipanteForm.numero}
                                        onChange={handleChange}
                                        required
                                    />

                                    <button
                                        type="submit"
                                        className="btn btn-success mt-2"
                                    >
                                        Salva partecipante
                                    </button>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>

                {/* SEARCH */}
                <input
                    className="form-control my-3"
                    type="text"
                    placeholder="Cerca per nome e cognome..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />

                {/* LISTA PARTECIPANTI */}
                <div className="accordion">
                    {filteredPartecipanti.map(user => {
                        const headingId = `heading-${user.id}`;
                        const collapseId = `collapse-${user.id}`;

                        return (
                            <div key={user.id} className="accordion-item">
                                <h2 className="accordion-header" id={headingId}>
                                    <button
                                        className="accordion-button collapsed fw-bold"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#${collapseId}`}
                                    >
                                        {user.nome} {user.cognome}
                                    </button>
                                </h2>

                                <div
                                    id={collapseId}
                                    className="accordion-collapse collapse"
                                >
                                    <div className="accordion-body bg-accordion">
                                        <p><strong>Codice Fiscale:</strong> {user.codice_fiscale}</p>
                                        <p><strong>Cellulare:</strong> {user.numero}</p>
                                        <p><strong>Email:</strong> {user.email}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center my-5">
                    <Link to="/" className="btn btn-dark px-5">
                        Torna indietro
                    </Link>
                </div>

            </div>
        </section>
    );
}
