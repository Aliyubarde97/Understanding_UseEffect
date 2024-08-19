import axios, { CanceledError } from "axios"
import { useEffect, useState } from "react"

interface user {
  id: number,
  name: string;
}
const Fetching_Data = () => {

  const [users, setUsers] = useState<user[]>([])
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false)


  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    axios
      .get<user[]>('https://jsonplaceholder.typicode.com/users', { signal: controller.signal })
      .then((res) => {
        setUsers(res.data);
        setLoading(false)
      })


      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false)
      });
     


    return () => controller.abort();

  }, []);

  return (
    <>
      { error &&  <p className="text-red-500">{error}</p>}
      { isLoading && <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500">isLoading</div>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  )
}

export default Fetching_Data