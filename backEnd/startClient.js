const args = [ 'start' ];
const opts = { stdio: 'inherit', cwd: '../frontEnd/demographic', shell: true };
require('child_process').spawn('npm', args, opts);
