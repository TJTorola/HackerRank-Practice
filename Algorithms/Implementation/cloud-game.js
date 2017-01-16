const i = (()=>{let a=[],b=0;return{append:b=>{a=[...a,...b.split("\n")]},read:c=>a[c||b++],readNumArr:c=>a[c||b++].split(" ").map(Number)}})();
process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", i.append);
process.stdin.on("end", () => main(i));

// https://www.hackerrank.com/challenges/save-the-prisoner

const main = input => {
	const [ _, jump ] = input.readNumArr(),
	      clouds = input.readNumArr(),
	      end = endOnCloud(0, 100, jump, clouds);

	console.log(end);
	return end;
};

const endOnCloud = (cloud, energy, jump, clouds) => {
	const next = (cloud + jump) % clouds.length,
	      thunder = clouds[next] === 1,
	      newEnergy = energy - (thunder ? 3 : 1);

	if (next === 0) return newEnergy;
	return endOnCloud(next, newEnergy, jump, clouds);
}
