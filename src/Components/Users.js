import React, { useState, useEffect }  from 'react'
import _ from 'lodash';

const getUsers = async () => {
  // Get list of users
  const response = await fetch('http://localhost:5000/api/v1/users');
  const json = await response.json();
  return json;
}
const Users = () => {
  const [users, setUsers] = useState( { status: 'loading', users: [] });

  useEffect( () => {
     getUsers()
       .then(users => setUsers({status: 'loaded', users}));
  }, [])

  // debugger;
  return (
    <div>
      { users.status === 'loading' && <span>Loading users...</span>}
      { users.status === 'loaded' && _.size(users.users) === 0 && <span>There are no users</span> }
      { users.status === 'loaded' && _.size(users.users) > 0 &&_.map(users.users, user => (
        <div key={user.id}>
          <b>id:</b> { user.id } - &nbsp;
          <b>name:</b> { user.name } - &nbsp;
          <b>greeting:</b> { user.greeting }
        </div>
        ))
      }
    </div>
  )
}

export default Users;
