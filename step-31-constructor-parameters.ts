/**
 * STEP 31: ConstructorParameters Utility Type
 */
class UserSession {
  constructor(public token: string, public expiration: number) {}
}

type SessionParams = ConstructorParameters<typeof UserSession>;
const sessionArgs: SessionParams = ["jwt-token-xyz-123", 3600];
const session = new UserSession(...sessionArgs);

console.log("Step 31: ConstructorParameters verified. Token:", session.token);
