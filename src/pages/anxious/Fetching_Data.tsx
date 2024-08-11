import axios from "axios"
import { useEffect, useState } from "react"

interface user {
  id:number,
  name:string;
}
const Fetching_Data = () => {

  const [users, setUsers] = useState<user[]>([])
  const[error, setError] = useState('');

  useEffect(() => {
    axios.get<user[]>('https://jsonplaceholder.typicode.com/xusers')
    .then(res => setUsers(res.data))
    .catch(err => setError(err.message))
    
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