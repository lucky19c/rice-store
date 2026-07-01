function Contact() {

    return (

        <div
        style={{
            padding:"50px",
            textAlign:"center"
        }}
        >

            <h1>Contact Us</h1>

            <p
            style={{
                marginTop:"10px",
                marginBottom:"30px"
            }}
            >
                We'd love to hear from you. Feel free to contact us for inquiries and orders.
            </p>

            <div
            style={{
                display:"flex",
                justifyContent:"center",
                gap:"30px",
                flexWrap:"wrap"
            }}
            >

                <div
                style={{
                    width:"300px",
                    padding:"20px",
                    border:"1px solid #ddd",
                    borderRadius:"10px"
                }}
                >

                    <h3>Telephone</h3>

                    <p>981-4658</p>

                </div>


                <div
                style={{
                    width:"300px",
                    padding:"20px",
                    border:"1px solid #ddd",
                    borderRadius:"10px"
                }}
                >

                    <h3>Email</h3>

                    <p>johnrichmondelacruz@email.com</p>

                </div>


                <div
                style={{
                    width:"300px",
                    padding:"20px",
                    border:"1px solid #ddd",
                    borderRadius:"10px"
                }}
                >

                    <h3>Address</h3>

                    <p>Stall #G-53 Lipa City Public Market, Lipa City, Batangas</p>

                </div>

            </div>

            <div
            style={{
                marginTop:"50px"
            }}
            >

                <h2>Find Us</h2>

                <iframe
                title="map"
                width="100%"
                height="400"
                style={{
                    border:"0",
                    borderRadius:"10px"
                }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d968.0629614304553!2d121.1600636695736!3d13.94360459915429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6d0014a4ce09%3A0xdcb6e42fc558e95e!2sAmang%20and%20Beth%20Rice%20Store!5e0!3m2!1sen!2sph!4v1782877537435!5m2!1sen!2sph"
                >
                </iframe>

            </div>

        </div>

    );

}

export default Contact;