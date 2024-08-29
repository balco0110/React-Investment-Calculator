import logo from '../assets/logo.png';

export default function Header() {
    return (
        <header id="header">
            <img src={logo}></img>
            <h1>Investment Calculator</h1>
            <p>
                This calculator helps you estimate the future value of your
                investments.
            </p>
        </header>
    );
}
