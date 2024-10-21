import React from "react";



const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div
                className="footer-top"
                style={{ backgroundImage: "url('./src/assets/footer-illustration.png')" }}>
                <div className='container'>
                    <div className="footer-brand">

                        <a href="" className="logo">Foodie<span className="span">.</span></a>

                        <p className="footer-text">
                            Financial experts support or help you to to find out which way you can raise your funds more.
                        </p>
                        

                        {/* <ul className="social-list"> */}
{/* 
                            <li>
                                <a href="#" className="social-link">
                                    <div
                                        className="md hydrated"
                                        aria-label="logo facebook">
                                        <FacebookLogo />
                                    </div>
                                </a>
                            </li> */}

                            {/* <li>
                                <a href="#" className="social-link">
                                    <img
                                        role="img"
                                        className="md hydrated"
                                        aria-label="logo twitter">
                                    </img>
                                </a>
                            </li> */}

                            {/* <li>
                  <a href="#" class="social-link">
                    <ion-icon name="logo-instagram" role="img" class="md hydrated" aria-label="logo instagram"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" class="social-link">
                    <ion-icon name="logo-pinterest" role="img" class="md hydrated" aria-label="logo pinterest"></ion-icon>
                  </a>
                </li> */}

                        {/* </ul> */}

                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;