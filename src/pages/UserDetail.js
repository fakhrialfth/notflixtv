import axios from "axios"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

export default function UserDetail() {
  const token = useSelector((state) => state.token);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserDetail = async() => {
      try {
        const response = await axios({
          method: 'GET',
          url: 'https://notflixtv.herokuapp.com/api/v1/users/me',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        dispatch({ type: 'user/save-user', payload: response.data.data })
      } catch(error) {
        console.log(error);
      }
    }

    getUserDetail();
  }, [dispatch, token])

  return (
    <div>
      user details:
      first name: {user.first_name}
    </div>
  )
}