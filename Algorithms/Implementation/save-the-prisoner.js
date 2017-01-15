const i = (()=>{let a=[],b=0;return{append:b=>{a=[...a,...b.split("\n")]},read:c=>a[c||b++],readNumArr:c=>a[c||b++].split(" ").map(Number)}})();
process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", i.append);
process.stdin.on("end", () => main(i));

// https://www.hackerrank.com/challenges/save-the-prisoner

const main = input => {
	const tCount = Number(input.read()),
	      cases = Array(tCount).fill(null).map(input.readNumArr),
	      prisoners = cases.map(findPrisoner);

	prisoners.forEach(log);
	return prisoners;
};

const log = thing => console.log(thing)
const findPrisoner = ([ pCount, sCount, pId ]) => (
	((pId - 1 + sCount) % pCount) || pCount
);
