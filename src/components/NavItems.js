import { WavyLink } from "react-wavy-transitions";

function NavItems() {
    return (
        <ul>
            <li>
                <WavyLink to="/" color="#FFA9E7">
                    Home
                </WavyLink>
            </li>
            <li>
                <WavyLink to="/about" color="#DF6EE1">
                    All products
                </WavyLink>
            </li>
            <li>
                <WavyLink to="/cart" color="#FF84E8">
                    <i class="fa-solid fa-cart-shopping"></i>
                </WavyLink>
            </li>
        </ul>
    );
}

export default NavItems;