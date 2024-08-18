import axios, { CanceledError } from "axios"
import { useEffect, useState } from "react"

interface user {
  id:number,
  name:string;
}
const Fetching_Data = () => {

  const [users, setUsers] = useState<user[]>([])
  const[error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    axios
    .get<user[]>('https://jsonplaceholder.typicode.com/users', { signal:controller.signal})
    .then(res => setUsers(res.data))
    .catch(err => 
    {
      if (err instanceof CanceledError) return;
          setError(err.message)})
    

    return () => controller.abort();
    
  }, []);

  return (
    <>
    {
      error &&
      <p className="text-red-500">{error}</p>
    }
    {users.map((user) => (
      <li  key={user.id}>{user.name}</li>
    ))}
    </>
  )
}

export default Fetching_Data