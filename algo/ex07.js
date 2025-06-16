let i = 0;
function fusion(tab1, tab2) {
	tab1 += `,${tab2}`;
	console.log(tab1);
}
console.log(fusion([1, 2], [3, 4])); // Résultat attendu : [1, 2, 3, 4]
