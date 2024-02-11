"use client"
import { signinuser } from "@/app/lib/action";
import Link from "next/link";
import { useState } from "react";

const SigninForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await signinuser(formData.email, formData.password);
      setFormData({
        email: "",
        password: "",
      });
    } catch (error) {
      throw error;
    }
  };
  return (
    <section>
      <header className=" pb-5 md:text-sm">
        <div className="mx-auto max-w-screen-xl items-center gap-x-14 px-4 md:flex md:px-8">
          <div className="flex items-center justify-between py-5 md:block">
            <Link href="/" className="text-[25px] font-bold  tracking-[2px]">
              <h1 className="text-neutral-dark-blue">Shrinkly.</h1>
            </Link>
          </div>
        </div>
      </header>
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <div className="w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0 dark:border  ">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-neutral-dark-blue md:text-2xl ">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  for="email"
                  className="mb-2 block text-sm font-medium text-neutral-dark-blue "
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-neutral-dark-blue outline-none sm:text-sm     "
                  placeholder="name@company.com"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label
                  for="password"
                  className="mb-2 block text-sm font-medium text-neutral-dark-blue "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-neutral-dark-blue outline-none sm:text-sm     "
                  required
                  value={formData.password}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-primary-cyan px-5 py-2.5 text-center text-sm font-medium text-white outline-none hover:bg-opacity-80"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 ">
                Don’t have an account yet?{" "}
                <Link
                  href="/sign-up"
                  className="text-primary-600 font-medium hover:underline "
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SigninForm;
