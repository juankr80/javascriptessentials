// Mock database for users
let users = [
  { id: 1, name: 'Juan', email: 'juan@example.com' },
  { id: 2, name: 'Maria', email: 'maria@example.com' }
];

let nextId = 3;

// GET all users
export function getAllUsers() {
  return users;
}

// GET user by ID
export function getUserById(id) {
  return users.find(user => user.id === parseInt(id));
}

// CREATE a new user
export function createUser(userData) {
  const newUser = {
    id: nextId++,
    name: userData.name,
    email: userData.email
  };
  users.push(newUser);
  return newUser;
}

// UPDATE a user
export function updateUser(id, userData) {
  const user = users.find(user => user.id === parseInt(id));
  if (user) {
    user.name = userData.name || user.name;
    user.email = userData.email || user.email;
    return user;
  }
  return null;
}

// DELETE a user
export function deleteUser(id) {
  const index = users.findIndex(user => user.id === parseInt(id));
  if (index !== -1) {
    const deletedUser = users.splice(index, 1);
    return deletedUser[0];
  }
  return null;
}
