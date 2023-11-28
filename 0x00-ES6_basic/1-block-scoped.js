export default function taskBlock(trueOrFalse) {
  let task = false;
  const task2 = true;

  if (trueOrFalse) {
    // Removed the unused variables
    task = true;
    // task2 is not modified in the conditional block, so no need to redeclare it
  }

  return [task, task2];
}
