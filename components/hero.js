
const Hero = () => (
        <div className="hero">
            <video className="responsive-video" muted loop autoPlay>
            <source src="/static/video/hero2.m4v" type="video/mp4" />
            </video>
            <div className="hero-overlay"></div>
            <div className="over-video">
            <div className="inbox">
                <div>
                <img className="logo" src="/static/img/logo.png" alt="logo" />
                <h1 className="logo-title">Tech View Ventures</h1>
                </div>
            </div>
            </div>
        </div>
)

export default Hero