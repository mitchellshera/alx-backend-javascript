process.stdout.write('Welcome to the interactive Holberton School program!\n');

if (process.stdin.isTTY) {
  process.stdout.write('What is your name?\n');

  process.stdin.on('data', (data) => {
    const input = data.toString().trim();

    if (input.toLowerCase() === 'exit') {
      process.stdout.write('This important software is now closing\n');
      process.exit();
    }

    process.stdout.write(`Your name is: ${input}\n`);
    process.stdout.write('What is your name?\n');
  });
} else {
  process.stdin.on('data', (data) => {
    const input = data.toString().trim();

    if (input.toLowerCase() === 'exit') {
      process.stdout.write('This important software is now closing\n');
      process.exit();
    }

    process.stdout.write(`Your name is: ${input}\n`);
    process.exit();
  });

  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });
}
