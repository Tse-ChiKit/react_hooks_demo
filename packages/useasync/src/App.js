import React, { useEffect } from "react";
import useAsync from "./useAsync";

function App() {
  // 通过 useAsync 这个函数，只需要提供异步逻辑的实现

  console.log("running app");

  const {
    execute: fetchUsers,
    data: users,
    loading,
    error,
  } = useAsync(async () => {
    console.log("running async in app");

    const res = await fetch("https://reqres.in/api/users");
    const json = await res.json();
    return json.data;
  });

  useEffect(() => {
    fetchUsers(); // eslint-disable-next-line
  }, []);

  // Conditional rendering based on loading and error states
  if (loading || !users) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error: {error.message}
        <button onClick={fetchUsers}>Try again.</button>
      </div>
    );
  }

  // Render the list of users when data is available
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id} {user.first_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
