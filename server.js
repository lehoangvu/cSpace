console.log('Hello, I\'m supper man in here')
console.log('Now, I will build your earth')

const { exec } = require('child_process');
function run(cmd) {
  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.error('error');
      console.error(error);
      return;
    }
    console.log('success')
    console.log(stdout)
  });
}

//run('mkdir package')
run('npm install jquery')
run('ls')
