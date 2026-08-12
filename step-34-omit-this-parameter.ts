/**
 * STEP 34: OmitThisParameter Utility Type
 */
function logIdentifier(this: { id: string }, prefix: string) {
  console.log(`${prefix}: ${this.id}`);
}

type PlainLogFn = OmitThisParameter<typeof logIdentifier>;
const boundLog: PlainLogFn = logIdentifier.bind({ id: "999" });
boundLog("Step 34: OmitThisParameter verified");
