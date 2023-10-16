import React from "react";
import {
  Form,
  Link,
  useActionData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";

//useSearchParams is used in component only

const AuthForm = () => {
  const data = useActionData();
  const navigation = useNavigation();

  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const isSaving = navigation.state === "submitting";

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
      {data && data.msg}

      <Form method="post" className="flex flex-col gap-4">
        {!isLogin && (
          <>
            <label>Username</label>
            <input
              type="text"
              placeholder="username"
              className="border p-3 rounded-lg"
              id="username"
              name="username"
              required
              //   onChange={handleChange}
            />
          </>
        )}
        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
          name="email"
          required
          //   onChange={handleChange}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
          name="password"
          required
          //   onChange={handleChange}
        />

        <button
          disabled={isSaving}
          //   disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {isSaving ? "Saving..." : "Save"}
          {/* {loading ? 'Loading...' : 'Sign Up'} */}
        </button>
        {/* <OAuth/> */}
        <div className="flex gap-2 mt-5">
          <p>Have an account?</p>
          <span className="text-blue-700">
            <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
              {isLogin ? "Create new user" : "Login"}
            </Link>
          </span>
        </div>
      </Form>
      {/* {error && <p className='text-red-500 mt-5'>{error}</p>} */}
    </div>
  );
};

export default AuthForm;
