const express = require('express')
const app = express()
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

app.get('/', (req, res) => {
  //return;
  console.log('Hello, I\'m supper man in here')
  console.log('Now, I will build your earth')
  //run('mkdir package')
//  run('npm install jquery')
//  run('firebase use production --token "1/O-BMOMmPKMEQLSJmUyIA--l1knsCr94HerUmCZAjoEY"')
//  run('firebase deploy --token "1/O-BMOMmPKMEQLSJmUyIA--l1knsCr94HerUmCZAjoEY"')
  run("mkdir test")
  run("ls")
  res.send('Hello World!')
})

app.listen(process.env.PORT || 5000, () => {})


