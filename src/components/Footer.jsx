import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <>
            <footer className="bg-light">
                <div className="container d-flex p-3">
                    <div>
                        <h3 className="utilies">Utilità</h3>
                        <ul className="d-flex flex-column p-0 list-unstyled">
                            <li className="fs-6">
                                <Link className="social" to="/">Home</Link>
                            </li>
                            <li className="fs-6">
                                <Link className="social" to="/">Assistenza</Link>
                            </li>
                            <li className="fs-6">
                                <Link className="social" to="/">Guida all'accompagnatore</Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </footer>

        </>
    )
}