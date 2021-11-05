import image from "./assets/bg-desktop-light.jpg"

const Hero = () => {
    return (
        <>
            <section className="hero w-full h-screen bg-no-repeat bg-center bg-contain object-cover">
                <img src={ image } alt="" />
            </section>
        </>
    )
}

export default Hero

