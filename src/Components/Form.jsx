import React from "react";
import "./form.css";
import { Link } from "react-router-dom";
import { createHouse } from "../Redux/Action";
import { useDispatch } from "react-redux";

function validate(input) {
  let errors = {};
  if (!input.user) {
    errors.user = "User is require";
  } else if (!input.email) {
    errors.email = "Email is require";
  } else if (!input.message) {
    errors.message = "Message is require";
  }
  return errors;
}

export function Form() {
  const statesForms = {
    user: "",
    email: "",
    message: "",
  };

  const [input, setInput] = React.useState(statesForms);
  const [errors, setErrors] = React.useState({});

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(errors).length > 0) {
      alert("Please complete the information required");
    } else if (
      input.user === "" &&
      input.email === "" &&
      input.message === ""
    ) {
      alert("Please complete the form");
    } else {
      dispatch(createHouse(input));
      alert("New recipe added successfully!");
      setInput({
        user: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <body className="bodyF">
    <div className="div-formo">
      <footer className="footero">
        <div className="dag-footero"></div>
        <div className="ejeZfootero">
          <Link to="/">
            <div className="btn-backo">
              <button className="btn-detailso">Back</button>
            </div>
          </Link>

          <div className="footer-contento">
            <div className="footer-tittleo">
              <h2>Contact</h2>
            </div>

            <div className="formulario-contento">
              <form onSubmit={(e) => handleSubmit(e)} id="formulario">
                <label for="user">Name</label>
                <input
                  type="text"
                  id="user"
                  name="user"
                  value={input.user}
                  onChange={(e) => handleInputChange(e)}
                  placeholder="Ingress name"
                />
                {errors.user && <p className="errors">{errors.user}</p>}

                <label for="user">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={input.email}
                  onChange={(e) => handleInputChange(e)}
                  placeholder="Ingress email"
                />
                {errors.email && <p className="errors">{errors.email}</p>}

                <label for="user">Write your message</label>
                <textarea
                  name="message"
                  id="message"
                  value={input.message}
                  onChange={(e) => handleInputChange(e)}
                ></textarea>
                {errors.message && <p className="errors">{errors.message}</p>}

                <div className="sendo">
                  <button className="btno">Send</button>
                </div>

                <div className="mensaje-formo">
                  <p>
                    Escribenos un mensaje, con gusto tendras una respuesta de
                    parte de nosotros en muy poco tiempo.
                  </p>
                </div>
              </form>
            </div>
            <div className="footer-texto">
              <p>&copy;Djs London | Todos los derechos reservados</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </body>
  );
}
