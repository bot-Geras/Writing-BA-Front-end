import notFound from "../../assets/images/404.png";
import { NavComponent } from "../../components";
import { NavMobile } from "../../components";
import './NoMatch.css';

export const NoMatch = () => {
    return (
        <main className="px-10 bg-gradient-to-b h-[100vh] from-[#F0F5FF] to-[#FFFFFF]">
            <NavComponent />
            <NavMobile />
            <div className="flex justify-center">
                <img className="bounce" src={notFound} alt="not found" />
            </div>
            <div className="flex justify-center">
                <h2 className="mt-10">Sorry the page is not found!</h2>
            </div>
        </main>
    )
}