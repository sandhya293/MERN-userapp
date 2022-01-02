import "./App.css";
import axios from "axios";

function App() {
  const fetchUsers = () => {
    axios.get("/api/list").then((res) => console.log(res.data));
  };

  const user = {
    username: "",
    password: "",
    name: "",
    age: 0,
  };

  const registerUsers = () => {
    axios.post("/api/registration", user).then((res) => console.log(res.data));
  };

  return (
    <div className="App">
      <button onClick={fetchUsers}>Fetch Users</button>
      <input
        placeholder="username"
        onChange={(e) => (user.username = e.target.value)}
      />
      <input
        placeholder="password"
        onChange={(e) => (user.password = e.target.value)}
      />
      <input
        placeholder="name"
        onChange={(e) => (user.name = e.target.value)}
      />
      <input
        placeholder="age"
        onChange={(e) => (user.age = Number(e.target.value))}
      />
      <button onClick={registerUsers}>Register User</button>
    </div>
  );
}

export default App;
