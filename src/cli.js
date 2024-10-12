const args = process.argv.slice(2);
let username = '';

args.forEach(arg => {
  if (arg.startsWith('--username=')) {
    username = arg.split('=')[1]; 
  }
});

if (username) {
  console.log(`Welcome to the File Manager, ${username}!`);
} else {
  console.log('No username provided!');
}
