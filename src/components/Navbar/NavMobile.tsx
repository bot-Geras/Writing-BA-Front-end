import logo from '../../assets/images/wbaLogo.png';
import { Link } from 'react-router-dom';

export const NavMobile = () => {
    return (
        <>
        <header className="md:hidden" data-aos="fade-down" data-aos-delay="1200" data-aos-duration="1000">
            <nav className="pt-[1.814375rem]">
                <Link to="/" className="nav_image">
                    <img src={logo} alt="nav_logo" />
                </Link>
                <div></div>
            </nav>
        </header></>
    )
}