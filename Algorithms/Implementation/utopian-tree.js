const i = (()=>{let a=[],b=0;return{append:b=>{a=[...a,...b.split("\n")]},read:c=>a[c||b++],readNumArr:c=>a[c||b++].split(" ").map(Number)}})();
process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", i.append);
process.stdin.on("end", () => main(i));

// https://www.hackerrank.com/challenges/utopian-tree
const readTimes = (input, times, output = []) => {
	if (times === 0) return output;
	return readTimes(input, times - 1, [...output, input.read()])
};

const main = input => {
	const testCnt = Number(input.read()),
	      tests = readTimes(input, testCnt).map(Number),
	      sizes = tests.map(grow);

	sizes.forEach(log);
	return sizes;
};

const grow = cycles => growth(cycles);
const growth = (cycles, size = 1, spring = true) => {
	if (cycles <= 0) return size;
	return growth(cycles - 1, (spring ? size * 2 : size + 1), !spring);
}

const log = something => console.log(something);