import { useState } from "react";

const App = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()";

    if (length === 0) {
      alert("Password length must be higher than 0");
      return;
    }

    let chars = "";
    if (
      !includeUppercase &&
      !includeLowercase &&
      !includeNumbers &&
      !includeSymbols
    ) {
      alert("You must select one of the following options to include");
      return;
    }

    if (includeUppercase) chars += uppercase;
    if (includeLowercase) chars += lowercase;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;

    if (chars.length === 0) return;

    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(result);
  };

  const copyToClipboard = () => {
    if (password !== "") {
      navigator.clipboard
        .writeText(password)
        .then(() => {
          alert("Password copied to clipboard!");
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    } else {
      alert("You haven't generated password yet");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white px-6 py-8 rounded shadow-md">
        <h1 className="text-3xl font-bold text-center">
          <span className="text-red-500">A</span>
          <span className="text-orange-500">l</span>
          <span className="text-yellow-300">l</span>
          <span className="text-green-500">i</span>
          <span className="text-blue-500">s</span>
          <span className="text-violet-500">o</span>
          <span className="text-red-500">n</span>{" "}
          <span className="text-orange-500">B</span>
          <span className="text-yellow-300">u</span>
          <span className="text-green-500">r</span>
          <span className="text-blue-500">g</span>
          <span className="text-violet-500">e</span>
          <span className="text-red-500">r</span>
          <span className="text-orange-500">s</span> Password Generator
        </h1>
        <div>
          <h2 className="text-lg mt-4 mb-1">Generated Password:</h2>
          <div className="flex items-center justify-center">
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded-lg pl-4 pr-6 py-2 w-full"
              disabled
              placeholder="Your generated password here"
            />
            <button
              onClick={copyToClipboard}
              className="px-4 py-2 ml-2 bg-blue-500 rounded hover:bg-blue-600 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                width="20"
                height="20"
              >
                <path
                  d="M192 0c-41.8 0-77.4 26.7-90.5 64L64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-37.5 0C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM112 192l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                  fill="lightgray"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-4">
          <label className="block mb-2">Password Length:</label>

          <input
            type="number"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            min="1"
            className="border border-gray-300 rounded-lg pl-4 pr-6 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
          />
        </div>
        <div className="mt-4">
          <label className="block mb-2">Include:</label>
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={includeUppercase}
                onChange={() => setIncludeUppercase(!includeUppercase)}
              />
              <span className="ml-2">Uppercase Letters</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={includeLowercase}
                onChange={() => setIncludeLowercase(!includeLowercase)}
              />
              <span className="ml-2">Lowercase Letters</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={() => setIncludeNumbers(!includeNumbers)}
              />
              <span className="ml-2">Numbers</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={() => setIncludeSymbols(!includeSymbols)}
              />
              <span className="ml-2">Symbols</span>
            </label>
          </div>
        </div>
        <div className="flex justify-center self-center mt-2">
          <button
            onClick={generatePassword}
            className=" bg-blue-500
          hover:bg-blue-600
          text-white
          font-semibold
          py-2
          px-4
          ml-2
          rounded-lg
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:ring-offset-2"
          >
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
