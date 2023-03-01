import logo from '../../assets/images/wbaLogo.png';

export const NavMobile = () => {
    return (
        <>
        <header className="md:hidden" data-aos="fade-down" data-aos-delay="1200" data-aos-duration="1000">
            <nav className="pt-[1.814375rem]">
                <div className="nav_image">
                    <img src={logo} alt="nav_logo" />
                </div>
                <div></div>
            </nav>
        </header></>
    )
}