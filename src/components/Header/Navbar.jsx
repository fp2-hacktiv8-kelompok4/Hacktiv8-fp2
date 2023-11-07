import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {

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
                navigate("/login");
                Swal.fire({
                    title: "Logout Success",
                    icon: "success"
                });
            }else if(result.isDenied || result.isDismissed){
                navigate(auth.roles === "user" ? "/" : "/admin")
                Swal.fire({
                    title: "Logout Canceled",
                    icon: "error"
                });
            }
        });
    };


  return (
<div>
<nav className="bg-gray-800">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="flex flex-1 justify-center items-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center justify-center">
          <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />

          <Link to={auth ? auth.roles === "user" ? "/" : "/admin" : "/"} className=" text-white  hover:text-white rounded-md px-3 py-2 text-lg font-bold">Bukapedia</Link>
        </div>
        <div className="flex w-full justify-end items-center sm:ml-6">
        {
            auth ?
                auth.roles === "user" ?
                    <Link to="/cart" className=" flex items-center text-gray-300  hover:text-white rounded-md  py-2 text-sm font-medium">Cart</Link>
                    :
                    <Link to="/admin/rekap" className="flex items-center text-gray-300  hover:text-white rounded-md px-3 py-2 text-sm font-medium">Rekap Penjualan</Link>
                :
                <Link to="/login" className="flex  items-center text-gray-300  hover:text-white rounded-md px-3 text-sm font-medium">Login</Link>
        }
        {
            auth ?  <Link to="/logout" className="flex  items-center text-gray-300  hover:text-white rounded-md px-3 py-2 text-sm font-medium" onClick={handleLogout}>Logout</Link> : <></>
        }
          <div className="flex space-x-4">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Mobile menu, show/hide based on menu state. --> */}
  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
      {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
      <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
    </div>
  </div>
</nav>
</div>
  )
}


export default Navbar