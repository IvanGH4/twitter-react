import "./RegisterPage.css";

function RegisterPage() {
  return (
    <div className="login-wrapper">
      <div className="content">
        <div className="login-logo">
          <svg
            viewBox="0 0 24 24"
            className="r-k200y r-jwli3a r-4qtqp9 r-yyyyoo r-5sfk15 r-dnmrzs r-1mi0q7o r-bnwqim r-1plcrui r-lrvibr"
          >
            <g>
              <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
            </g>
          </svg>
        </div>
        <div className="title">
          <h2>Iniciar sesion en Twitter</h2>
        </div>
        <form className="register_form" action="/registro" method="POST">
          <div className="form">
            <input
              type="text"
              name="firstName"
              id="firstName"
              required
              autocomplete="off"
            />
            <label htmlFor="firstName" className="label-name">
              <span className="content-name">Nombre</span>
            </label>
          </div>
          <div className="form">
            <input
              id="lastName"
              type="text"
              name="lastName"
              required
              autocomplete="off"
            />
            <label htmlFor="lastName" className="label-name">
              <span className="content-name">Apellido</span>
            </label>
          </div>
          <div className="form">
            <input
              id="userName"
              type="text"
              name="userName"
              required
              autocomplete="off"
            />
            <label htmlFor="userName" className="label-name">
              <span className="content-name">Nombre de usuario</span>
            </label>
          </div>
          <div className="form">
            <input
              id="email"
              type="text"
              name="email"
              required
              autocomplete="off"
            />
            <label htmlFor="email" className="label-name">
              <span className="content-name">Email</span>
            </label>
          </div>
          <div className="form">
            <input
              id="password"
              type="password"
              name="password"
              required
              autocomplete="off"
            />
            <label htmlFor="password" className="label-name">
              <span className="content-name">Contraseña</span>
            </label>
          </div>
          <div className="btn-wrapper">
            <button type="submit">Iniciar sesion</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
