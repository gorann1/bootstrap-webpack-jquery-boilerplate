import 'bootstrap';
import fullpage from 'fullpage.js';

import '../scss/index.scss';

$('#alert').click(() => {
  alert('jQuery works!');
});

// Your jQuery code
//

// Initializing it
// eslint-disable-next-line no-unused-vars
var fullPageInstance = new fullpage('#myFullpage', {
  navigation: true,
  sectionsColor: ['#ff5f45', '#0798ec', '#fc6c7c', 'grey'],
  licenseKey: 'YOUR_KEY_HERE',
});
