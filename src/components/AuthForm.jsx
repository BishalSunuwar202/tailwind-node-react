import React from "react";
import { Form, Link, useActionData, useSearchParams } from "react-router-dom";

//useSearchParams is used in component only

const AuthForm = () => {
  const data = useActionData();

  const [searchParams, setSearchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">
        {isLogin ? "Log In" : "Create a new user"}
      </h1>

      {data && data.errors && (
        <ul>
          {data.errors.map((err, index) => (
            <li key={index}>{err.msg}</li>
          ))}
        </ul>
      )}
      {data && data.message && <p>{data.message}</p>}
      {/* <form onSubmit={handleSubmit} className='flex flex-col gap-4'> */}

      <Form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="username"
          //   onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
          //   onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
          //   onChange={handleChange}
        />

        <button
          //   disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          Save
          {/* {loading ? 'Loading...' : 'Sign Up'} */}
        </button>
        {/* <OAuth/> */}
      </Form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
          <span className="text-blue-700">
            {isLogin ? "Create new user" : "Login"}
          </span>
        </Link>
      </div>
      {/* {error && <p className='text-red-500 mt-5'>{error}</p>} */}
    </div>
  );
};

export default AuthForm;
