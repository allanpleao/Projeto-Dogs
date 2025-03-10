import { Link } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import { useForm } from "../../Hooks/useForm";
import { useContext } from "react";
import UserContext from "../../Context/UserContext";
import Error from "../Helper/Error";
import styles from "./LoginForm.module.css";
import buttonStyles from '../Forms/Button.module.css'
import Head from "../Helper/Head";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Login"/>
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <button className={buttonStyles.button} disabled>
            Carregando...
          </button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link className={styles.perdeu} to="/login/lost">
        Perdeu a senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site</p>
        <Link className={buttonStyles.button} to="/login/create">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
