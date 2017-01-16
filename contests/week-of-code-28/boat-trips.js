const i = (()=>{let a=[],b=0;return{append:b=>{a=[...a,...b.split("\n")]},read:c=>a[c||b++],readNumArr:c=>a[c||b++].split(" ").map(Number)}})();
process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", i.append);
process.stdin.on("end", () => main(i));

const main = input => {
	const [ _, bCapacity, bCount ] = input.readNumArr(),
	      totalCapacity = bCapacity * bCount,
	      trips = input.readNumArr(),
	      tripsUnderCapacity = trips.every(trip => trip <= totalCapacity);

	console.log(tripsUnderCapacity ? "Yes" : "No");
	return tripsUnderCapacity;
};
