import React, { useState } from 'react';

const Contact = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  let  name, value;
  const getUserData = (event) => {
   name= event.target.name;
   value= event.target.value;

   setUser({...user, [name]: value});
};

  const postData = async(e) => {
    e.preventDefault();
    const{first_name,last_name,email,phone,address,message} = user;
    if  ((first_name && last_name && phone)){
      const response = await fetch("https://dnyanarjan-education-943dc-default-rtdb.firebaseio.com/dnyanarjanform.json",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // passing data
      body: JSON.stringify({
        first_name,
    last_name,
    email,
    phone,
    address,
    message,
      })
    });
//to make fields empy after submission
    if (response) {
      setUser({
        first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
      });
    }

      alert("Data Stored Succcessfully, Thank You!");
    }else{
      alert("Please atleast fill your First name, Lastname, phone number")
    }


  };

    return (
        <div>
        <section className="contactus-section">
        <div className="container">
          <div className="row d-flex mt-5 justify-content-center align-items-center">
            <div className="col-12 col-lg-10 d-flex justify-content-center m-md-2 align-items-center">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5 d-flex flex-column justify-content-center align-items-center">
                  <h1 className="main-heading fw-bold">
                    Connect With Us
                  </h1>
                  {/* <p className="main-hero-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt eaque alias similique.
                  </p> */}
                  <ul>
                    <li><span><i class="fas fa-home"></i></span><span> D7/002, Annapurna nagar, Adharwadi, Kalyan (West), Thane, Maharashtra</span></li>
                    <li>
                        <span><i class="fa fa-phone" aria-hidden="true"></i></span>
                        <span><a href="tel:9653205099" > 9653205099</a></span>
                    </li>
                    <li>
                        <span><i class="fa fa-phone" aria-hidden="true"></i></span>
                        <span><a href="tel:8454084820" > 8454084820</a></span>
                    </li>
                    <li>
                        <span><i class="fa fa-envelope" aria-hidden="true"></i></span>
                        <span><a href="mailto:dnyanarjaneducation@gmail.com;"> dnyanarjaneducation@gmail.com</a></span>
                    </li>
                    {/* <li>
                        <span><i class="fa fa-envelope" aria-hidden="true"></i></span>
                        <span><a href="mailto:sagarkhule1970@gmail.com">sagarkhule1970@gmail.com</a></span>
                    </li> */}
                  </ul>
                  {/* <figure>
                    <img
                      src="./images/hero1.jpg"
                      alt="contatUsImg"
                      className="img-fluid"
                    />
                  </figure> */}
                </div>

                {/* right side contact form  */}
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="first_name"
                          value={user.first_name}
                          onChange={getUserData}
                          className="form-control"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="last_name"
                          value={user.last_name}
                          onChange={getUserData}
                          className="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="phone"
                          value={user.phone}
                          onChange={getUserData}
                          className="form-control"
                          placeholder="Phone Number "
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="email"
                          value={user.email}
                          onChange={getUserData}
                          className="form-control"
                          placeholder="Email ID"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name="address"
                          value={user.address}
                          onChange={getUserData}
                          className="form-control"
                          placeholder="Add Address"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 ">
                        <input
                          type="text"
                          name="message"
                          value={user.message}
                          onChange={getUserData}
                          className="form-control"
                          placeholder="Enter Your Message"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-style w-100 mt-5 " onClick={postData}>
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default Contact;