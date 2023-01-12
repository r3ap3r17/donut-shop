import '../assets/dist/hamburger.css';

function NavButton({ active, activeHandler }) {

    return (
        <button onClick={ activeHandler }
            class={ active ? "hamburger hamburger--elastic is-active" : "hamburger hamburger--elastic" } type="button">
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>
    );
}

export default NavButton;