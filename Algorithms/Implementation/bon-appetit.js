const i = (()=>{let a=[],b=0;return{append:b=>{a=[...a,...b.split("\n")]},read:c=>a[c||b++],readNumArr:c=>a[c||b++].split(" ").map(Number)}})();
process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", i.append);
process.stdin.on("end", () => main(i));

// https://www.hackerrank.com/challenges/bon-appetit

const main = input => {
	const [ _, unshared ] = input.readNumArr(),
	      items = input.readNumArr(),
	      diff = items[unshared] / 2,
	      total = items.reduce((sum, item) => sum + item),
	      split = Number(input.read()),
	      correct = (split === (total / 2 - diff));

	if (correct) {
		console.log("Bon Appetit");
		return 0;
	} else {
		console.log(diff);
		return diff;
	}
};
