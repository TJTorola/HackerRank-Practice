const i = (()=>{let a=[],b=0;return{append:b=>{a=[...a,...b.split("\n")]},read:c=>a[c||b++],readNumArr:c=>a[c||b++].split(" ").map(Number)}})();
process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", i.append);
process.stdin.on("end", () => main(i));

// https://www.hackerrank.com/challenges/bon-appetit

const readTimes = (input, times, output = []) => {
	if (times === 0) return output;
	return readTimes(input, times - 1, [...output, input.readNumArr()])
};

const parseData = (data, tests = []) => {
	if (data.length === 0) return tests;
	const [ info, times, ...rest ] = data,
	      test = { times, threshold: info[1] };

	return parseData(rest, [...tests, test]);
};

const main = input => {
	const testCnt = Number(input.read()),
	      data = readTimes(input, testCnt * 2),
	      tests = parseData(data),
	      results = tests.map(isClassCancelled);

	results.forEach(announce);
	return results;
};

const isClassCancelled = test => {
	const { threshold, times } = test,
	      onTimeCount = negativeCount(times);

	return (onTimeCount < threshold);
};

const negativeCount = arr => (
	arr.reduce(((cnt, el) => (el <= 0) ? cnt + 1 : cnt), 0)
);

const announce = cancelled => {
	if (cancelled) {
		console.log("YES");
	} else {
		console.log("NO");
	}
};
