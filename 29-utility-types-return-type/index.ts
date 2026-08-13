type User = {
  id: number;
  name: string;
  isAdmin: boolean;
};

function createUser(): User {
  return {
    id: 1,
    name: "Alireza",
    isAdmin: false
  };
}

type CreatedUser = ReturnType<typeof createUser>;

const user: CreatedUser = createUser();

console.log(user);
