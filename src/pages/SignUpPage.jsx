import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axiosInstance, { getErrorMessage } from "../api/axios";
import { Link, useHistory } from "react-router-dom";
import { useClientStore } from "../store/client";

const STORE_ROLE_NAMES = ["store", "mağaza"];
const isStoreRole = (role) => STORE_ROLE_NAMES.includes(role?.name?.toLowerCase());

const Signup = () => {
  const roles = useClientStore((state) => state.roles);
  const fetchRoles = useClientStore((state) => state.fetchRoles);

  const [apiError, setApiError] = useState("");

  const history = useHistory();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();

  const password = watch("password");
  const roleId = watch("role_id");

  useEffect(() => {
    fetchRoles();
  }, []);

  // select the first role once the roles are loaded, so role_id is never empty
  useEffect(() => {
    if (roles.length > 0) {
      setValue("role_id", String(roles[0].id));
    }
  }, [roles, setValue]);

  const onSubmit = async (data) => {
    setApiError("");

    const selectedRole = roles.find((r) => r.id === Number(data.role_id));

    const formattedData = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: Number(data.role_id),
      ...(isStoreRole(selectedRole) && {
        store_name: data.store_name,
        store_phone: data.store_phone,
        store_tax_no: data.tax_no,
        store_bank_account: data.bank_account,
      }),
    };

    try {
      await axiosInstance.post("/signup", formattedData);

      toast.success("Account created! Please log in.");
      history.push("/login");
    } catch (error) {
      setApiError(getErrorMessage(error, "Something went wrong"));
    }
  };

  return (
    <div className="max-w-lg mx-auto px-10 py-30 lg:px-2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 text-xl"
      >
        {apiError && (
          <p className="text-red-500">{apiError}</p>
        )}

        <input
          placeholder="Name"
          {...register("name", {
            required: "Name is required",
            minLength: { value: 3, message: "Min 3 characters" },
          })}
          className="border p-2"
        />
        {errors.name && <p>{errors.name.message}</p>}

        <input
          placeholder="Email"
          {...register("email", {
            required: "Email required",
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
            required: "Password required",
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
              message: "Weak password",
            },
          })}
          className="border p-2"
        />
        {errors.password && <p>{errors.password.message}</p>}

        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword", {
            validate: (value) =>
              value === password || "Passwords not match",
          })}
          className="border p-2"
        />
        {errors.confirmPassword && (
          <p>{errors.confirmPassword.message}</p>
        )}

        <select
          {...register("role_id")}
          className="border p-2"
        >
          {roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
        </select>

        {isStoreRole(roles.find((r) => r.id === Number(roleId))) && (
          <>
            <input
              placeholder="Store Name"
              {...register("store_name", {
                required: "Required",
                minLength: { value: 3, message: "Min 3" },
              })}
              className="border p-2"
            />
            {errors.store_name && (
              <p>{errors.store_name.message}</p>
            )}

            <input
              placeholder="Store Phone"
              {...register("store_phone", {
                required: "Required",
                pattern: {
                  value: /^(?:\+90|0)?5\d{9}$/,
                  message: "Invalid phone",
                },
              })}
              className="border p-2"
            />
            {errors.store_phone && (
              <p>{errors.store_phone.message}</p>
            )}

            <input
              placeholder="Tax ID"
              {...register("tax_no", {
                required: "Required",
                pattern: {
                  value: /^T\d{4}V\d{6}$/,
                  message: "Format TXXXXVXXXXXX",
                },
              })}
              className="border p-2"
            />
            {errors.tax_no && <p>{errors.tax_no.message}</p>}

            <input
              placeholder="IBAN"
              {...register("bank_account", {
                required: "Required",
                pattern: {
                  value: /^TR\d{2}[0-9A-Z]{22}$/,
                  message: "Invalid IBAN",
                },
              })}
              className="border p-2"
            />
            {errors.bank_account && (
              <p>{errors.bank_account.message}</p>
            )}
          </>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-sky-500 text-white p-2 font-semibold"
        >
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
      </form>
      <div className="pt-6 text-xl">
        <p className="text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-sky-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;