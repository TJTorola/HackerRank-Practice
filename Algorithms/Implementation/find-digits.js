const log = thing => console.log(thing);const logEach = arr => arr.forEach(log);
const input = (()=>{
	let a="",b=0;const readTimes=(c,d=[])=>0===c?d:readTimes(c-1,[...d,a[b++]]);
	return{append:b=>{a=[...a,...b.split("\n")]},read:c=>a[c||b++],readNumArr:c=>a[c||b++].split(" ").map(Number),readTimes};
})();

process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", input.append);
process.stdin.on("end", () => logEach(main(input)));

const main = input => {
	const tCount = Number(input.read()),
	      tests = input.readTimes(tCount).map(Number);

	return tests.map(ddMapper);
};

const ddMapper = num => divisibleDigits(num, num);
const divisibleDigits = (num, digits, count = 0) => {
	if (digits === 0) return count;
	const digit = digits % 10,
	      divisible = num % digit === 0;

	return divisibleDigits(num, Math.floor(digits / 10), count + (divisible ? 1 : 0));
};
