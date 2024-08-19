import axios, { CanceledError } from "axios"
import { useEffect, useState } from "react"

interface User {
  id: number,
  name: string;
}
const Fetching_Data = () => {

  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false)


  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users', { signal: controller.signal })
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
      const deleteUser = (user:User) => {
        const originalUsers = [...users]
        setUsers(users.filter( u => u.id !== user.id))
        axios.delete('https://jsonplaceholder.typicode.com/users' + user.id)
        .catch(err => {
          setError(err.message);
          setUsers(originalUsers)

        })
      }
  return (
    <>
  
      { error &&  <p className="text-red-500">{error}</p>}
      { isLoading && <div className="animate-spin rounded-full h-32 w-32 border-4 border-blue-500 border-t-transparent border-b-transparent mx-auto"></div>}

      <ul className="border">
        {users.map((user) => (
          <li key={user.id} className="flex justify-content-between">{user.name} 
          <button className="bg-red-400 rounded-md outline" onClick={() =>
          deleteUser(user)} >Delete</button></li>
        ))}
      </ul>
    </>
  )
}

export default Fetching_Data