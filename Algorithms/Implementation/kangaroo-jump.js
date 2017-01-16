process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
	input_stdin += data;
});

process.stdin.on('end', function () {
	input_stdin_array = input_stdin.split("\n");
	main();    
});

function readLine() {
	return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
	const [
		xLeft,
		vLeft,
		xRight,
		vRight
	] = readLine().split(' ').map(Number);

	const dist = xRight - xLeft,
		  gain = vLeft - vRight;
	
	if (dist === 0)        return yes();
	if (gain <= 0)         return no();
	if (dist % gain === 0) return yes();
	else                   return no();
}

const no = () => {
	console.log('NO');
	return false;
}

const yes = () => {
	console.log('YES');
	return true;
}