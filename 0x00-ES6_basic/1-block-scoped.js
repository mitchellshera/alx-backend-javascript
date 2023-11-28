export default function taskBlock(trueOrFalse) {
  let task = false;
  const task2 = true;

  if (trueOrFalse) {
    // Remove the redeclaration of task and task2
    task = true;
  }

  return [task, task2];
}
