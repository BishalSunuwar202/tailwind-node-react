import "./App.css";

function App() {
  return (
    <div className="bg-slate-900 grid place-content-center  h-screen">
      <h1 className=" text-4xl text-white m-6 ">hello</h1>;
      <div className="">
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center  space-x-4">
          <div>
            <img
              className="h-12 w-12 "
              src="https://seeklogo.com/images/M/mugiwara-logo-303FD55C54-seeklogo.com.png"
              alt=""
            />
          </div>
          <div>
            <div className="text-2xl font-medium text-black">
              Tailwind Css
              <p className="text-slate-500 text-base"> By Bishal Sunuwar</p>
            </div>
          </div>
        </div>
      </div>
      <button className="bg-sky-500 text-center mt-2 text-white text-base p-2 rounded-xl dark:bg-red-600 hover:bg-white hover:text-black">
        Buy Now
      </button>
    </div>
  );
}

export default App;
