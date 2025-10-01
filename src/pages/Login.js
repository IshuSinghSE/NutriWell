

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-green-50">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-80">
                <h2 className="text-2xl font-bold mb-6 text-center text-green-600">
                    Login
                </h2>

                <div className="mb-4">
                    <label className="block mb-2 font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                </div>

                <div className="mb-6">
                    <label className="block mb-2 font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        placeholder="Type your password"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                </div>

                <button className="w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition">
                    Login
                </button>

                <p className="text-center text-gray-500 text-sm mt-4">
                    Forgot your password?
                </p>
            </div>
        </div>
    );
};

export default Login;