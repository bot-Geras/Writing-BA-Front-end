import { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

export const BackToTop = () => {
    const [backToTopButton, setBackToTopButton] = useState<boolean>(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <div>
            {backToTopButton && (
                <button
                    style={{
                        position: "fixed",
                        bottom: "50px",
                        right: "50px",
                        height: "50px",
                        width: "50px",
                        fontSize: "25px",
                        borderRadius: "50px",
                        backgroundColor: "#535AE5",
                        color: "#FFFFFF",
                        padding: "12px"
                    }}
                    onClick={scrollUp}
                >
                    <AiOutlineArrowUp />
                </button>
            )}
        </div>
    )
}