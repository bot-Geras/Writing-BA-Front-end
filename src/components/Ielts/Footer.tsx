import logo from '../../assets/images/wbaLogo.png';
import { CiFacebook } from 'react-icons/ci';
import { IoLogoInstagram } from 'react-icons/io';
import { TiSocialTwitterCircular } from 'react-icons/ti';

export const Footer = () => {
    return (
        <section className="xl:my-[31.03px] px-3 md:px-5 lg:px-[100px] xl:px-[100px]" data-aos="fade-down">
            <div className="container mx-auto relative">
                <div className="md:flex md:items-center lg:flex-nowrap md:flex-wrap md:space-x-16 lg:space-x-[264px]">
                    {/* logo */}
                    <img src={logo} alt="logo" />
                    {/* copyright */}
                    <div className='flex items-center'>
                        <h3 className="xl:max-w-[29px] text-[#0D1259] font-[600] leading-[48px] text-[36px]">&#169;</h3>
                        <p className="ml-[16px] xl:max-w-[235px] font-[600] text-[18px] leading-[24px] text-[#0D1259]">Copyright WritingBA 2023</p>
                    </div>
                    {/* social handles */}
                    <div className="flex space-x-[16px] text-[#515AE5] items-center">
                        <button className="text-[35px] font-[600]"><CiFacebook /></button>
                        <button className='text-[35px] font-[600]'><IoLogoInstagram /></button>
                        <button className="text-[35px] font-[600]"><TiSocialTwitterCircular /></button>
                    </div>
                </div>
            </div>
        </section>
    )
}