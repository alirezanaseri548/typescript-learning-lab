/**
 * STEP 30: Parameters Utility Type
 */
function updateProfile(username: string, age: number, isAdmin: boolean): void {
  console.log(`Updating configuration for ${username}`);
}

type UpdateProfileParams = Parameters<typeof updateProfile>;
const argumentsList: UpdateProfileParams = ["alirezanaseri548", 27, true];

console.log("Step 30: Parameters Utility Type verified.");
