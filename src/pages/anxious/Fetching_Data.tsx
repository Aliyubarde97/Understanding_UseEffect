import axios from "axios"
import { useEffect, useState } from "react"

interface user {
  id:number,
  name:string;
}
const Fetching_Data = () => {

  const [users, setUsers] = useState<user[]>([])

  useEffect(() => {
    axios.get<user[]>('https://jsonplaceholder.typicode.com/users')
    .then(res => setUsers(res.data))
    
  }, []);

  return <ul>
    {users.map(user => <li key={user.id}>{user.name}</li>)}
  </ul>
}

export default Fetching_Data