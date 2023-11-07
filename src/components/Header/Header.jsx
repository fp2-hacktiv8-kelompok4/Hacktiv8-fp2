import { Link, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import Swal from "sweetalert2";


const Header = () => {
    const navigate = useNavigate();

    const auth = JSON.parse(localStorage.getItem("auth"));

    const handleLogout = () => {
        Swal.fire({
            title: "Are you sure to logout?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Logout!"
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem("auth");
                navigate("/");
                Swal.fire({
                    title: "Logout Success",
                    icon: "success"
                });
            }
        });
    };

    return (
        <Navbar className=" bg-slate-200 h-full">
            <Container className="flex mx-5 items-center justify-center py-5 ">
                <Navbar.Brand
                    as={Link}
                    to={auth ? auth.roles === "user" ? "/" : "/admin" : "/"}
                    className="flex w-full justify-between items-center text-2xl font-bold"    
                >
                    Bukapedia
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="flex mx-2 my-2 my-lg-0 items-center justify-center" 
                        navbarScroll
                    >
                        <Nav.Link
                            className="mx-2 text-lg font-semibold text-blue-600 hover:text-blue-900"
                            as={Link}
                            to={auth ? auth.roles === "user" ? "/" : "/admin" : "/"}
                        >
                            Home
                        </Nav.Link>
                        {
                            auth ?
                                auth.roles === "user" ?
                                    <Nav.Link className="mx-2 text-lg font-semibold text-blue-600 hover:text-blue-900" as={Link} to="/cart">Cart</Nav.Link>
                                    :
                                    <Nav.Link className="mx-2 text-lg font-semibold text-blue-600 hover:text-blue-900" as={Link} to="/admin/rekap">Rekap Penjualan</Nav.Link>
                                :
                                <Nav.Link className="text-lg font-semibold text-blue-600 hover:text-blue-900" as={Link} to="/login">Login</Nav.Link>
                        }
                        {
                            auth ? <Nav.Link className="mx-2 text-lg font-semibold text-red-600 hover:text-red-900" onClick={handleLogout}>Logout</Nav.Link> : <></>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;