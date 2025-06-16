function estTableau(valeur) {
	if (typeof valeur === "object") {
		console.log("true");
	} else {
		console.log("false");
	}
}
console.log(estTableau([1, 2, 3])); // Résultat attendu : true
console.log(estTableau("chaîne")); // Résultat attendu : false
