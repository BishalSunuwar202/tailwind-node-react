import React from "react";
import MainNavigation from "../components/MainNavigation";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "an error occurred";
  let message = "somehing went wrong";

  if (error.status === 500) {
    //message = JSON.parse(error.data).message;
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "not found!";
    message = "Could not find resource or page";
  }
  return (
    <>
      <MainNavigation />
      <div className="m-4 text-center">
        {/* you can create pageCOntent component where you can wrap this for styling */}
        <h1 className="text-lg font-bold m-4">{title}</h1>
        <p>{message}</p>
      </div>
    </>
  );
};

export default ErrorPage;
