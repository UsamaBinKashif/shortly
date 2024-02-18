"use client";
import { signupuser } from "@/app/lib/action";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUpForm = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setErrorMessage("");
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.password === ""
    ) {
      setLoader(false);
      setErrorMessage("Fill out all the fields!");
      return;
    }
    try {
      const data = await signupuser(
        formData.name,
        formData.email,
        formData.password,
      );
      if (data.success) {
        setFormData({
          name: "",
          email: "",
          password: "",
        });
        setLoader(false);
        router.replace("/sign-in");
      } else {
        setLoader(false);
        setErrorMessage(data?.message);
      }
    } catch (error) {
      setLoader(false);
      setErrorMessage(error?.message);
    }
  };
  return (
    <section>
      <header className="pb-5 md:text-sm">
        <div className="mx-auto max-w-screen-xl items-center gap-x-14 px-4 md:flex md:px-8">
          <div className="flex items-center justify-between py-5 md:block">
            <Link href="/" className="text-[25px] font-bold  tracking-[2px]">
              <h1 className="text-neutral-dark-blue">Shrinkly.</h1>
            </Link>
          </div>
        </div>
      </header>
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <div className="w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0  ">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-neutral-dark-blue md:text-2xl ">
              Sign up to new account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-neutral-dark-blue "
                >
                  Full Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="email"
                  value={formData.name}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-neutral-dark-blue outline-none sm:text-sm     "
                  placeholder="john doe"
                  required=""
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-neutral-dark-blue "
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-neutral-dark-blue outline-none sm:text-sm     "
                  placeholder="name@company.com"
                  required=""
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-neutral-dark-blue "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  value={formData.password}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-neutral-dark-blue outline-none sm:text-sm     "
                  required=""
                  onChange={(e) => handleChange(e)}
                />
                {errorMessage && (
                  <p className="absolute right-[50%]  w-full translate-x-[50%] text-[10px] tracking-[2px] text-red-500 ">
                    {errorMessage}
                  </p>
                )}
              </div>

              {loader ? (
                <button className="loader  cursor-not-allowed rounded border border-transparent bg-primary-cyan px-4 py-3  font-medium tracking-[2px] text-white hover:bg-opacity-80">
                  Signing up
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={errorMessage}
                  className={clsx(
                    "rounded border border-transparent bg-primary-cyan px-4 py-3   font-medium tracking-[2px] text-white hover:bg-opacity-80",
                    errorMessage ? "cursor-not-allowed" : "cursor-pointer",
                  )}
                >
                  Sign up
                </button>
              )}
              <p className="text-sm font-light text-gray-500 ">
                Don’t have an account yet?{" "}
                <Link
                  href="/sign-in"
                  className="text-primary-600 font-medium hover:underline "
                >
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;
