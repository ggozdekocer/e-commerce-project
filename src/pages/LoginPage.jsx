import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { loginThunk } from "../store/thunks/clientThunk";
import { toast } from 'react-toastify'; // ToastContainer'ı App.js'e koyduğumuz için burada sadece toast yetiyor

const LoginPage = () => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      remember: false
    }
  });

  const onSubmit = async (data) => {
  const result = await loginThunk(data);

  if (result.success) {
    toast.success("Login successful! Redirecting...", {
      position: "top-right",
      autoClose: 2000,
    });

    setTimeout(() => {
      history.push("/"); 
    }, 1500);
    
  } else {
    toast.error(result.message || "Giriş başarısız.", {
      position: "top-right"
    });
  }
};

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-1">
          <input
            placeholder="Email"
            {...register("email", {
              required: "Email zorunludur",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: "Geçerli bir email adresi giriniz",
              },
            })}
            className={`border p-2 rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div className="flex flex-col gap-1">
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Şifre zorunludur",
            })}
            className={`border p-2 rounded ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        <label className="flex items-center text-sm cursor-pointer">
          <input 
            type="checkbox" 
            {...register("remember")} 
            className="mr-2 w-4 h-4"
          />
          Remember me
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`p-2 rounded text-white font-semibold transition-colors ${
            isSubmitting ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>

      <div className="pt-6 text-center">
        <p className="text-gray-600">
          New here?{" "}
          <Link to="/signup" className="text-sky-600 font-semibold hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;