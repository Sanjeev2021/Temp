import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Payment = () => {
    return (
        <>
            <section className="payment-container">
                    <div className="img-box">
                        <figure>
                            <LazyLoadImage src={process.env.PUBLIC_URL + '/images/payment.jpeg'} className="img-fluid"/>
                        </figure>
                        </div>
            </section>
        </>
    );
};

export default Payment;