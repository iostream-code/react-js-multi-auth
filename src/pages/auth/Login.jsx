import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
    const loginAPI = 'https://tararoutray.com/demo/react-auth/login.php';
    const navigate = useNavigate();

    const submitLoginForm = (event) => {

        event.preventDefault();

        const formElement = document.querySelector('#loginForm');
        const formData = new FormData(formElement);
        const formDataJSON = Object.fromEntries(formData);
        const btnPointer = document.querySelector('#login-btn');

        btnPointer.innerHTML = 'Please wait..';
        btnPointer.setAttribute('disabled', true);

        axios.post(loginAPI, formDataJSON).then((response) => {

            btnPointer.innerHTML = 'Login';
            btnPointer.removeAttribute('disabled');

            const data = response.data;
            const token = data.token;

            if (!token) {
                alert('Unable to login. Please try after some time.');
                return;
            }

            localStorage.clear();
            localStorage.setItem('user-token', token);

            setTimeout(() => {
                navigate('/');
            }, 500);

        }).catch((error) => {

            btnPointer.innerHTML = 'Login';
            btnPointer.removeAttribute('disabled');

            alert("Oops! Some error occured.");
        });
    }

    return (
        <main>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login Now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={submitLoginForm} className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}