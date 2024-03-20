import axios from "axios";
import { useState } from "react";

export const useFetchUsers = () => {
    const [userList, setUserList] = useState([{id: 1}]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);


    const onClickFetchUser = () => {
        axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then((result) => {
            const users = result.data.map((user) => ({
              id: user.id,
              name: user.name,
              username: user.username,
              email: user.email,
            }));
    
            setUserList(users);
          })
          .catch(() => setIsError(true))
          .finally(() => setIsLoading(false));
      };

      return {userList, onClickFetchUser, isLoading, isError};
}