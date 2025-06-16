let i = 1;
function plusGrand(tab) {
	let grand = tab[0];
	while (i < tab.length) {
		if (tab[i] > grand) {
			grand = tab[i];
		}
		i++;
	}
	console.log(grand);
}
console.log(plusGrand([4, 15, 2, 9]));
