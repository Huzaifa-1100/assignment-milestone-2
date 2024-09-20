import Link from "next/link";

function NavBar (){
    return(
        <div className=" md:flex text-xl font-bold text-gray-700 ">
            <Link className="px-3 hover:text-red-700" href={"/"}>Home</Link>
            <Link className="px-3 hover:text-red-700" href={"/about"}>About</Link>
            <Link className="px-3 hover:text-red-700" href={"/contact"}>Contact</Link>
        </div>
    )
}

export default NavBar