import { Link } from "react-router-dom"


const AccountInfo = () => {
  return (
    <div className="flex items-center gap-x-5">
        <button className="bg-primary-green text-primary-dark-blue font-medium px-6 py-1 rounded hover:bg-teal-500/80 transition">
            <Link to="/login">Login</Link>
        </button>

        {/* Unfinished */}
        <button>
            Cart
        </button>
    </div>
  )
}

export default AccountInfo