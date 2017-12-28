const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => {

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
      res.send('success')
      res.send(stdout)
    });
  }

  //run('mkdir package')
  run('npm install jquery')
  run('firebase deploy --token "1/O-BMOMmPKMEQLSJmUyIA--l1knsCr94HerUmCZAjoEY"')


})


