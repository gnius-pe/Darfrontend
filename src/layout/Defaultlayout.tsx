import { Link } from "react-router-dom";

interface DefaultLayoutProps{
    children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps){
    return (
        <>
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Login "Solo administradores"</Link>
                    </li>
                    <li>
                        <Link to="/reserva">Reserva</Link>
                    </li>
                </ul>
            </nav>
        </header>

        <main>{children}</main>
        </>
    )
}