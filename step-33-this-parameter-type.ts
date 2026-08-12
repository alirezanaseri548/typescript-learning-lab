/**
 * STEP 33: ThisParameterType Utility Type
 */
function toHex(this: Number) {
  return this.toString(16);
}

type ThisTypeHex = ThisParameterType<typeof toHex>;
const numberContext: ThisTypeHex = 255;
console.log("Step 33: ThisParameterType verified. Context:", numberContext);
