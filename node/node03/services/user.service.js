let users = [];

export function resetUsers() {
  users = [];
}

// GET ALL
export async function getAllUsers() {
  return users;
}

// GET BY ID
export async function getUserById(id) {
  return users.find(u => u.id === Number(id));
}

// CREATE
export async function createUser(data) {
  const user = {
    id: Date.now(),
    ...data
  };

  users.push(user);
  return user;
}

// UPDATE
export async function updateUser(id, data) {
  const index = users.findIndex(u => u.id === Number(id));

  if (index === -1) return null;

  users[index] = { ...users[index], ...data };
  return users[index];
}

// DELETE
export async function deleteUser(id) {
  const index = users.findIndex(u => u.id === Number(id));

  if (index === -1) return null;

  const removed = users.splice(index, 1);
  return removed[0];
}

export const findUserByEmail = (email) => {
  return users.find((u) => u.email === email);
};