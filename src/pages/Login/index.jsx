import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { auth } from "../../api";
import styles from "./style.module.css";
import Header from "../../components/Header";
import SectionHeader from "../../components/SectionHeader";

const Login = () => {

    const navigate = useNavigate();

    const authenticate = localStorage.getItem("auth");

    useEffect(() => {
        if (authenticate) {
            authenticate.roles === "user" ?
                navigate("/")
                :
                navigate("/admin")
        }
    })

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        if (username === "admin@bukapedia.com" && password === "admin123") {
            const auth = {
                token: "tokenadmin",
                roles: "admin"
            }
            localStorage.setItem("auth", JSON.stringify(auth));
            navigate("/admin");
            Swal.fire({
                title: "Login Success",
                icon: "success"
            })
        } else {
            auth({ username, password })
                .then(res => {
                    const auth = {
                        token: res.data.token,
                        roles: "user"
                    }
                    localStorage.setItem("auth", JSON.stringify(auth));
                    navigate("/");
                    Swal.fire({
                        title: "Login Success",
                        icon: "success"
                    })
                })
                .catch(_err => {
                    Swal.fire({
                        title: "Login Error",
                        text: "Username/Password wrong or something wrong",
                        icon: "error"
                    })
                })
        }
        setUsername("");
        setPassword("");
    }

    return (
        <>
            <Header />
            <div className="flex flex-wrap justify-center items-center min-h-screen w-full  " >
            <div className=" w-full justify-center items-center max-w-xs">
            <SectionHeader title="Login" />
            <p className="font-medium text-slate-400 pt-3">Selamat Datang, tolong masukkan data anda</p>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="block text-slate-700 text-sm font-bold mb-2">Username</Form.Label>
                    <Form.Control 
                        className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50 shadow-md"
                        type="text"
                        placeholder="Type your username..."
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="block text-slate-700 text-sm font-bold mb-2">Password</Form.Label>
                    <Form.Control 
                        className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50 shadow-md"
                        type="password"
                        placeholder="Type your password..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>
                <button className="h-10 px-6 font-semibold rounded-md bg-blue-600 hover:bg-blue-800  text-white w-full shadow-md" onClick={handleLogin} type="submit">
                    Login
                </button>
            </Form>
            <div className="flex flex-col justify-end w-full">
                    <div className="py-3">
                        <span>Default User : </span> <br />
                        <span>username = <b> jimmie_k </b></span> <br />
                        <span>password = klein*#%*</span>
                        
                    </div>
                    <div>
                        <span>Default Admin:</span> <br />
                        <span>username = <b>admin@bukapedia.com </b> </span> <br />
                        <span>password = admin123</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Login;