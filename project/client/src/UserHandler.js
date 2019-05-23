//TODO: This function is under development
export function login(email, password) {
  /*state.setState({email:state.email});
  if (users[state.email].password===password){
  state.setState({login:true});
  }*/
}

/* Sends a new user to the server to add it.
Returns a Promise. Access the status code by chaining .then() to this function call. */
export async function addUser(email, fname, lname, tel, password) {
  var newUser = ({ fname: fname, lname: lname, tel: tel, bikes: [], password: password });

  return fetch('/add-user', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: newUser,
      email: email
    })
  })
  .then(response => {
    return response.json();
  })
  .then(json => {
    return json.addedUser;
  });
}

//Returns all bikes that belongs to a certain user
export async function getMyBikes(email) {
  return fetch('/user-bikes', {
    method: 'POST',
    headers: {
      'Accept': 'text/plain',
      'Content-Type': 'text/plain'
    },
    body: email
  })
  .then(response => {
    return response.json();
  });
}
