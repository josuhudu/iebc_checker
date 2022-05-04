require('dotenv').config(); // TODO  https://nodejs.dev/learn/how-to-read-environment-variables-from-nodejs
const axios = require('axios'); // 
const { exec, spawn } = require('child_process'); 

// TODO  https://nodejs.dev/learn/how-to-read-environment-variables-from-nodejs
// process.env.USER_ID; // "239482"
// process.env.USER_KEY; // "foobar"
// process.env.NODE_ENV; // "development"
const url = process.env.URL;
const interval = process.env.INTERVAL;

const statusCodes = {
	isUp: 200,
	isDown: 2,
	invalidDomain: 3,
};

async function isUp(url) {
	try {
		const response = await axios.get(url);
		// console.log(response);
		console.error('Site is available')
		return response.status === statusCodes.isUp;
	} catch (error) {
		// console.error(error);
		console.error('Site cannot be reached')
	}
}

function playAudio(status_up) {
	let file;
	if(status_up) {
		file = 'mixkit-retro-game-notification-212.wav';
	} else {
		file = 'mixkit-wrong-answer-bass-buzzer-948.wav';
	}

	exec(`powershell -c (New-Object Media.SoundPlayer '${file}').PlaySync()`, (err, stdout, stderr) => {
		if (err) {
			console.error(err);
			return;
		}
		// console.log(stdout);
	});
}

// TODO https://nodejs.org/en/docs/guides/timers-in-node/#infinite-loop-execution-setinterval
async function intervalFunc() {
	// console.log('Cant stop me now!');
	const status_up = await isUp(url)
	playAudio(status_up)
}
  
setInterval(intervalFunc, interval);

module.exports = isUp