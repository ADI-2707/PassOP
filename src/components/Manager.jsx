import React, { useEffect } from "react";
import { useRef, useState } from "react";

const Manager = () => {
  const ref = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    alert("show the password");
    if (
      ref.current.src ===
      "https://img.icons8.com/?size=100&id=100236&format=png&color=000000"
    ) {
      ref.current.src =
        "https://img.icons8.com/?size=100&id=60022&format=png&color=000000";
    } else {
      ref.current.src =
        "https://img.icons8.com/?size=100&id=100236&format=png&color=000000";
    }
  };

  const savePassword = () => {
    const newPasswords = [...passwordArray, form];
    setpasswordArray(newPasswords);
    localStorage.setItem("passwords", JSON.stringify(newPasswords));
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="mx-auto container">
        <h1 className="text-4xl font-bold text-center">
          <span className="">&lt;</span>
          Pass
          <span className="text-green-500">OP/ &gt;</span>
        </h1>
        <p className="text-green-500 text-center text-lg">
          Your own password manager
        </p>
        <div className="text-black flex flex-col p-4 gap-5 items-center">
          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Enter website URL"
            type="text"
            name="site"
            id=""
            className="rounded-full border border-green-500 w-full px-4 py-1"
          />
          <div className="flex w-full justify-between gap-8">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter username"
              type="text"
              name="username"
              id=""
              className="rounded-full border border-green-500 px-4 py-1 flex-1"
            />
            <div className="relative flex-1">
              <input
                value={form.password}
                onChange={handleChange}
                placeholder="Enter password"
                type="text"
                name="password"
                id=""
                className="rounded-full border border-green-500 px-4 py-1 w-full"
              />
              <span
                className="absolute right-0 px-3 py-1 cursor-pointer"
                onClick={showPassword}
              >
                <img
                  ref={ref}
                  src="https://img.icons8.com/?size=100&id=60022&format=png&color=000000"
                  height={15}
                  width={26}
                  className=""
                />
              </span>
            </div>
          </div>
          <button
            onClick={savePassword}
            className="cursor-pointer flex items-center justify-center bg-green-400 rounded-full gap-2 px-8 py-2 w-fit border border-green-900 hover:bg-green-500"
          >
            <lord-icon
              src="https://cdn.lordicon.com/efxgwrkc.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
        <div className="passwords">
          <h2 className="text-gray-400 py-3">Your passwords:</h2>
          {passwordArray.length === 0 && <div>No passwords saved</div>}
          {passwordArray.length != 0 && (
            <table className="table-auto w-full">
              <thead className="bg-green-500 text-white">
                <tr>
                  <th className="py-2">Website</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                </tr>
              </thead>
              <tbody className="bg-green-100 rounded-md overflow-hidden">
                {passwordArray.map((item, index) => (
                    <tr key={index}>
                      <td className="py-2 border border-white text-center w-32">
                        {item.site}
                      </td>
                      <td className="py-2 border border-white text-center w-32">
                        {item.username}
                      </td>
                      <td className="py-2 border border-white text-center w-32">
                        {item.password}
                      </td>
                    </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};
export default Manager;
