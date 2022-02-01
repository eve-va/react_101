import logo from '../images/logo.png'

export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt='logo' className="nav--logo" />
        </nav>
    )
}