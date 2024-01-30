const welcomeMessage = 'Welcome to Holberton School! What is your name?\n';
const closingMessage = 'This important software is now closing\n';

process.stdout.write(welcomeMessage);

process.stdin.on('data', (data) => {
  const input = data.toString().trim();

  if (input.toLowerCase() === 'exit') {
    process.stdout.write(closingMessage);
    process.exit();
  }

  process.stdout.write(`Your name is: ${input}\n${welcomeMessage}`);
});

process.on('exit', () => {
  process.stdout.write(closingMessage);
});
