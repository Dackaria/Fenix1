import CartWidget from "../cartWidget/CartWidget";

const NavBar = () => {
    return (
        <div className="flex justify-between items-center px-8 py-2 bg-gray-800 w-full" >
           <div className="flex items-center w-full">
              <h1 className="mr-9 ml-8  text-white">Fenix</h1>
              <nav className="flex space-x-4">
                <a className="hover:text-blue-500 px-8 py-8">Mochilas</a>
                <a className="hover:text-blue-500 px-8 py-8">Bolsos</a>
                <a className="hover:text-blue-500 px-8 py-8">Billeteras</a>
             </nav>
            </div> 
            <div className="ml-8 mr-8"> 
                <CartWidget />
            </div>
        </div>
    )
}
export default NavBar;