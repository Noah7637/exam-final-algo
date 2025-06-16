let i = 0;
function supprimerDoublons(tab) {
	while (i < tab.length) {
		if (tab[i] === tab[i + 1]) {
			tab.splice(i, i);
		} else {
		}
		i++;
	}
	console.log(tab);
}
console.log(supprimerDoublons([1, 2, 2, 3, 3, 3])); // Résultat attendu : [1, 2, 3] tab -= tab[i + 1];
