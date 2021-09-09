import * as React from 'react';

const NewsLetter = () => {
    return(
        <div className="newsletter">
            {/* newsletter */}
            <div className="newsletter__container">
                <div className="newsletter__container__title">
                    <h2>SIGN UP TO OUR NEWSLETTER FOR FREE TIPS, AND INSIGHTS ON ISLAMIC FASHION</h2>
                </div>
                <div className="newsletter__container__form">
                    <form action="">
                        <input type="text" placeholder="Your Email"/>
                        <button type="submit">Join</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default NewsLetter;