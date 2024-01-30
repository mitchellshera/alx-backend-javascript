const welcomeMessage = 'Welcome to Holberton School, what is your name?\n';
const closingMessage = 'This important software is now closing\n';

process.stdout.write(welcomeMessage);

if (process.stdin.isTTY) {
  process.stdin.on('data', (data) => {
    process.stdout.write(`Your name is: ${data.toString()}`);
    process.exit();
  });
} else {
  process.stdin.on('data', (data) => {
    process.stdout.write(`Your name is: ${data.toString()}`);
    process.exit();
  });

  process.on('exit', () => {
    process.stdout.write(closingMessage);
  });
}
