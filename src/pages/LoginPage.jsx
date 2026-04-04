import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { loginThunk } from "../store/thunks/clientThunk";

const LoginPage = () => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const result = await loginThunk(data);

    if (result.success) {
      history.goBack();
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <input
          placeholder="Email"
          {...register("email", {
            required: "Required",
            pattern: {
              value:
                /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              message: "Invalid email",
            },
          })}
          className="border p-2"
        />
        {errors.email && <p>{errors.email.message}</p>}

        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Required",
          })}
          className="border p-2"
        />

        <label className="flex text-lg">
          <input type="checkbox" {...register("remember")} className="mr-3!"/>
          Remember me
        </label>

        <button
          disabled={isSubmitting}
          className="bg-blue-500 text-white p-2"
        >
          Login
        </button>
      </form>
      <div className="pt-6 text-xl">
        <p>
            New here?{" "}
            <Link to="/signup" className="text-sky-600 hover:underline">
            Create an account
            </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;