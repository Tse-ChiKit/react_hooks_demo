import "./App.css";

import { useState, useEffect, useMemo } from "react";

function App() {
  const [users, setUsers] = useState(null);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    const doFetch = async () => {
      const res = await fetch("https://reqres.in/api/users");
      setUsers(await res.json());
    };
    doFetch();
  }, []);

  const usersToShow = useMemo(() => {
    if (!users) return null;

    return users.data.filter((user) => {
      return user.first_name.includes(searchKey);
    });
  }, [users, searchKey]);

  return (
    <div>
      <input
        type="text"
        value={searchKey}
        onChange={(evt) => setSearchKey(evt.target.value)}
      />
      <ul>
        {usersToShow &&
          usersToShow.length > 0 &&
          usersToShow.map((user) => {
            return <li key={user.id}>{user.first_name}</li>;
          })}
      </ul>
    </div>
  );
}

export default App;
