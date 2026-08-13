function createAccount(username: string, age: number, isActive: boolean) {
  return {
    username,
    age,
    isActive
  };
}

type CreateAccountParams = Parameters<typeof createAccount>;

const args: CreateAccountParams = ["alireza", 27, true];

const account = createAccount(...args);

console.log(account);
