/**
 * STEP 35: ThisType Utility Type
 */
interface LoggerContext {
  log(message: string): void;
}

const actions: { run: () => void } & ThisType<LoggerContext> = {
  run() {
    this.log("Step 35: ThisType verified successfully.");
  }
};

const context: LoggerContext = {
  log(msg) { console.log(msg); }
};

actions.run.call(context);
