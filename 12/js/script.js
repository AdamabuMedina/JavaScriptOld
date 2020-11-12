const percentHeightOfField = 90
const topPointGoal = 42
const bottomPointGoal = 50
const leftEndField = 0
const rightEndField = 95
const ballAnimationTime = 1000
const ball = $(".ball")

ball.click(function () {
	if (ball.css("left") == leftEndField + "px") {
		kickTheBall(rightEndField)
	} else {
		kickTheBall(leftEndField)
	}
})

function kickTheBall(endPoint) {
	ball.animate({
		left: endPoint + "%",
		top: getRandomNumber(percentHeightOfField) + "%"
	}, ballAnimationTime, function () {
		sayGoal()
		ball.toggleClass("rotate360")
	})
}

function sayGoal() {
	if (ball.css("top") >= topPointGoal + "%" && ball.css("top") <= bottomPointGoal + "%") {
		alert('Гооол!')
	}
}

function getRandomNumber(maxRandomNum) {
	return Math.floor(Math.random() * maxRandomNum);
}