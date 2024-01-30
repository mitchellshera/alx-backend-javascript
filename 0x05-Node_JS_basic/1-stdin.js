// 1-stdin.js

// Display the initial prompt
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Set the encoding for stdin to utf8
process.stdin.setEncoding('utf8');

// Listen for data events on stdin
process.stdin.on('data', (data) => {
  // Trim the input to remove leading/trailing whitespaces
  const input = data.trim();

  // Check if the user entered 'exit', if so, close the program
  if (input === 'exit') {
    console.log('This important software is now closing');
    process.exit();
  }

  // Display the user's name
  console.log(`Your name is: ${input}`);

  // Display the prompt again
  process.stdout.write('Welcome to Holberton School, what is your name?\n');
});

// Listen for SIGINT (Ctrl+C) event to close the program gracefully
process.on('SIGINT', () => {
  console.log('This important software is now closing');
  process.exit();
});
