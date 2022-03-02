function getLL() {
	console.error("...")
	let length = document.getElementsByClassName("rena-wish") ? document.getElementsByClassName("rena-wish").length : 0

	if (length) {
		document.getElementsByClassName("rena-wish")[length - 1].click()
		setTimeout(() => {
			document.getElementsByClassName("hb-close") &&
				document.getElementsByClassName("hb-close").length &&
				document.getElementsByClassName("hb-close")[0].click()
			console.error("...尝试点红包")

			setTimeout(() => {
				getLL()
			}, 50)
			getLL()
		}, 0)
	} else {
		setTimeout(() => {
			getLL()
		}, 20)
	}
}
