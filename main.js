/* minty v1.0
 * Calvin Wang
 */

function main() {
	if (!document.getElementById('budgetSummary2')) {
		var newBudget = document.createElement("div");
		newBudget.innerHTML = "<div id='budgetSummary2' class='budget-summary'><div class='head small_head'><h2>Actual spending...</h2></div><div class='body'><div class='calc_leftover'><div class='calc_row income'><p class='label'>Income:</p><p class='value'><span class='transaction-type hide' title='debit'>-</span><abbr class='currency' title='USD'>$</abbr><span class='amount' id='actual-income'></span></p></div><div class='calc_row spending'><p class='label'>Spending:</p><p class='value negative'><span class='transaction-type' title='debit'>-</span><abbr class='currency' title='USD'>$</abbr><span class='amount' id='actual-spend'></span></p></div><div class='calc_row total'><p class='label'>Net:</p><p id='val' class='value up'><span class='transaction-type hide' title='debit'>-</span><abbr class='currency' title='USD'>$</abbr><span class='amount' id='actual-left'></span></p></div></div></div></div>";

		document.getElementById('right_col').insertBefore(newBudget, document.getElementsByClassName("OffersWidgetView")[0]); 
	}

	var income = getIncome().innerText; 
	var spending = getSpend().innerText; 
	var left = (parseFloat(income.replace(',','')) - parseFloat(spending.replace(',',''))).toLocaleString(); 
	
	if (left.charAt(0) == '-') { document.getElementById("val").className = "value negative" }; 
	
	document.getElementById("actual-income").innerText = income; 
	document.getElementById("actual-spend").innerText = spending; 
	document.getElementById("actual-left").innerText = left;

	console.log("%c[minty v1.0] loaded spendbox", "color: green");
}

function getIncome() {
	return document.evaluate("//*[@id='incomeBudget-list']/div[1]/p/strong/var/span[2]", document).iterateNext();
}

function getSpend() {
	return document.evaluate("//*[@id='spendingBudget-list']/div[1]/p/strong/var/span[2]", document).iterateNext();
}

if (window.location.href == "https://mint.intuit.com/planning.event") {
	var checkExist = setInterval(function() {
		if (getIncome() && getSpend() && document.getElementById('budgetSummary')) {
			main();
			clearInterval(checkExist);
		}
	}, 1000);
}