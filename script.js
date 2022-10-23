vokabeltest_lektion_anzeigen = false


document.getElementById('letzte_aktualisierung').innerHTML = "Stand: 22.10.22 01:46"


letzte_aktualisierung = document.getElementsByClassName('letzte_aktualisierung')
letzte_aktualisierung[0].classList.add('hidden');




//Suche
/*
$('th').on('click', function(){
	 column = $(this).data('colname')
	 order = $(this).data('order')
	 text = $(this).html()
	text = text.substring(0, text.length - 1);
	
	
	
	if (order == 'desc'){
		myArray = myArray.sort((a, b) => a[column] > b[column] ? 1 : -1)
        $(this).data("order","asc");
        text += '&#9660'
	}else{
		myArray = myArray.sort((a, b) => a[column] < b[column] ? 1 : -1)
        $(this).data("order","desc");
        text += '&#9650'
	}
	
    $(this).html(text)
    buildTable(myArray)
})
*/







random_background()

function random_background() {
	var random = Math.round(14 * Math.random()) + 1;
	console.log(random)
	document.getElementById("background").src = 'Bilder/' + random + '.jpg'
}



setInterval(() => {
	random_background()
}, 600000)
// Alle 10 Min. (Nur wenn aktiv)







insgesamtVokabeltest_Lektion = document.getElementsByClassName('insgesamtVokabeltest_Lektion')
lernen_auswählen_vokabeltest = document.getElementsByClassName('lernen_auswählen_vokabeltest')
auswahl_Vokabeltest = document.getElementsByClassName('auswahl_Vokabeltest')

insgesamtVokabeltest_Lektion[0].classList.add('hidden');
lernen_auswählen_vokabeltest[0].classList.add('hidden');
auswahl_Vokabeltest[0].classList.add('hidden');


if(vokabeltest_lektion_anzeigen == true) {
	insgesamtVokabeltest_Lektion[0].classList.remove('hidden');
	lernen_auswählen_vokabeltest[0].classList.remove('hidden');
	auswahl_Vokabeltest[0].classList.remove('hidden');




buildTableVokabeltest_Lektion(Vokabeltest_Lektion)

function buildTableVokabeltest_Lektion(data) {
	var tableVokabeltest_Lektion = document.getElementById('tableVokabeltest_Lektion')

	for (var i = 0; i < data.length; i++) {

		var row = `<tr class="row">
						<td class="first">${data[i].first}</td>
						<td class="second">${data[i].second}</td>
				  </tr>`
		tableVokabeltest_Lektion.innerHTML += row
	}
}

}




buildTableVokabeln_aus_keiner_Lektion(Vokabeln_aus_keiner_Lektion)

function buildTableVokabeln_aus_keiner_Lektion(data) {
	var tableVokabeln_aus_keiner_Lektion = document.getElementById('tableVokabeln_aus_keiner_Lektion')

	for (var i = 0; i < data.length; i++) {

		var row = `<tr class="row">
						<td class="first">${data[i].first}</td>
						<td class="second">${data[i].second}</td>
						<td>${data[i].third}</td>
				  </tr>`
		tableVokabeln_aus_keiner_Lektion.innerHTML += row
	}
}



buildTable01(Lektion01)

function buildTable01(data) {
	var table01 = document.getElementById('table01')

	for (var i = 0; i < data.length; i++) {

		var row = `<tr class="row">
						<td class="first">${data[i].first}</td>
						<td class="second">${data[i].second}</td>
						<td>${data[i].third}</td>
				  </tr>`
		table01.innerHTML += row
	}
}



buildTable02(Lektion02)

function buildTable02(data) {
	var table02 = document.getElementById('table02')

	for (var i = 0; i < data.length; i++) {

		var row = `<tr class="row">
						<td class="first">${data[i].first}</td>
						<td class="second">${data[i].second}</td>
						<td>${data[i].third}</td>
				  </tr>`
		table02.innerHTML += row
	}
}



buildTable03(Lektion03)

function buildTable03(data) {
	var table03 = document.getElementById('table03')

	for (var i = 0; i < data.length; i++) {

		var row = `<tr class="row">
						<td class="first">${data[i].first}</td>
						<td class="second">${data[i].second}</td>
						<td>${data[i].third}</td>
				  </tr>`
		table03.innerHTML += row
	}
}



buildTable04(Lektion04)

function buildTable04(data) {
	var table04 = document.getElementById('table04')

	for (var i = 0; i < data.length; i++) {

		var row = `<tr class="row">
						<td class="first">${data[i].first}</td>
						<td class="second">${data[i].second}</td>
						<td>${data[i].third}</td>
				  </tr>`
		table04.innerHTML += row
	}
}



buildTable05(Lektion05)

function buildTable05(data) {
	var table05 = document.getElementById('table05')

	for (var i = 0; i < data.length; i++) {

		var row = `<tr class="row">
						<td class="first">${data[i].first}</td>
						<td class="second">${data[i].second}</td>
						<td>${data[i].third}</td>
				  </tr>`
		table05.innerHTML += row
	}
}



buildTable06(Lektion06)

function buildTable06(data) {
	var table06 = document.getElementById('table06')

	for (var i = 0; i < data.length; i++) {

		var row = `<tr class="row">
						<td class="first">${data[i].first}</td>
						<td class="second">${data[i].second}</td>
						<td>${data[i].third}</td>
				  </tr>`
		table06.innerHTML += row
	}
}



buildTable07(Lektion07)

function buildTable07(data) {
	var table07 = document.getElementById('table07')

	for (var i = 0; i < data.length; i++) {

		var row = `<tr class="row">
						<td class="first">${data[i].first}</td>
						<td class="second">${data[i].second}</td>
						<td>${data[i].third}</td>
				  </tr>`
		table07.innerHTML += row
	}
}



buildTable08(Lektion08)

function buildTable08(data) {
	var table08 = document.getElementById('table08')

	for (var i = 0; i < data.length; i++) {

		var row = `<tr class="row">
						<td class="first">${data[i].first}</td>
						<td class="second">${data[i].second}</td>
						<td>${data[i].third}</td>
				  </tr>`
		table08.innerHTML += row
	}
}



buildTable09(Lektion09)

function buildTable09(data) {
	var table09 = document.getElementById('table09')

	for (var i = 0; i < data.length; i++) {

		var row = `<tr class="row">
						<td class="first">${data[i].first}</td>
						<td class="second">${data[i].second}</td>
						<td>${data[i].third}</td>
				  </tr>`
		table09.innerHTML += row
	}
}



buildTable10(Lektion10)

function buildTable10(data) {
	var table10 = document.getElementById('table10')

	for (var i = 0; i < data.length; i++) {

		var row = `<tr class="row">
						<td class="first">${data[i].first}</td>
						<td class="second">${data[i].second}</td>
						<td>${data[i].third}</td>
				  </tr>`
		table10.innerHTML += row
	}
}



buildTable11(Lektion11)

function buildTable11(data) {
	var table11 = document.getElementById('table11')

	for (var i = 0; i < data.length; i++) {

		var row = `<tr class="row">
						<td class="first">${data[i].first}</td>
						<td class="second">${data[i].second}</td>
						<td>${data[i].third}</td>
				  </tr>`
		table11.innerHTML += row
	}
}



buildTable12(Lektion12)

function buildTable12(data) {
	var table12 = document.getElementById('table12')

	for (var i = 0; i < data.length; i++) {

		var row = `<tr class="row">
						<td class="first">${data[i].first}</td>
						<td class="second">${data[i].second}</td>
						<td>${data[i].third}</td>
				  </tr>`
		table12.innerHTML += row
	}
}



buildTable13(Lektion13)

function buildTable13(data) {
	var table13 = document.getElementById('table13')

	for (var i = 0; i < data.length; i++) {

		var row = `<tr class="row">
						<td class="first">${data[i].first}</td>
						<td class="second">${data[i].second}</td>
						<td>${data[i].third}</td>
				  </tr>`
		table13.innerHTML += row
	}
}



buildTable14(Lektion14)

function buildTable14(data) {
	var table14 = document.getElementById('table14')

	for (var i = 0; i < data.length; i++) {

		var row = `<tr class="row">
						<td class="first">${data[i].first}</td>
						<td class="second">${data[i].second}</td>
						<td>${data[i].third}</td>
				  </tr>`
		table14.innerHTML += row
	}
}





buildTable15(Lektion15)

function buildTable15(data) {
	var table15 = document.getElementById('table15')

	for (var i = 0; i < data.length; i++) {

		var row = `<tr class="row">
						<td class="first">${data[i].first}</td>
						<td class="second">${data[i].second}</td>
						<td>${data[i].third}</td>
				  </tr>`
		table15.innerHTML += row


	}
}





buildTable16(Lektion16)

function buildTable16(data) {
	var table16 = document.getElementById('table16')

	for (var i = 0; i < data.length; i++) {

		var row = `<tr class="row">
						<td class="first">${data[i].first}</td>
						<td class="second">${data[i].second}</td>
						<td>${data[i].third}</td>
				  </tr>`
		table16.innerHTML += row


	}
}


buildTable17(Lektion17)


function buildTable17(data) {
	var table17 = document.getElementById('table17')

	for (var i = 0; i < data.length; i++) {

		var row = `<tr class="row">
						<td class="first">${data[i].first}</td>
						<td class="second">${data[i].second}</td>
						<td>${data[i].third}</td>
				  </tr>`
		table17.innerHTML += row


	}
}


buildTable18(Lektion18)

function buildTable18(data) {
	var table18 = document.getElementById('table18')

	for (var i = 0; i < data.length; i++) {

		var row = `<tr class="row">
						<td class="first">${data[i].first}</td>
						<td class="second">${data[i].second}</td>
						<td>${data[i].third}</td>
				  </tr>`
		table18.innerHTML += row
	}
}



buildTable19(Lektion19)

function buildTable19(data) {
	var table19 = document.getElementById('table19')

	for (var i = 0; i < data.length; i++) {

		var row = `<tr class="row">
						<td class="first">${data[i].first}</td>
						<td class="second">${data[i].second}</td>
						<td>${data[i].third}</td>
				  </tr>`
		table19.innerHTML += row
	}
}



buildTable20(Lektion20)

function buildTable20(data) {
	var table20 = document.getElementById('table20')

	for (var i = 0; i < data.length; i++) {

		var row = `<tr class="row">
						<td class="first">${data[i].first}</td>
						<td class="second">${data[i].second}</td>
						<td>${data[i].third}</td>
				  </tr>`
		table20.innerHTML += row
	}
}





buildTable21(Lektion21)

function buildTable21(data) {
	var table21 = document.getElementById('table21')

	for (var i = 0; i < data.length; i++) {

		var row = `<tr class="row">
						<td class="first">${data[i].first}</td>
						<td class="second">${data[i].second}</td>
						<td>${data[i].third}</td>
				  </tr>`
		table21.innerHTML += row
	}
}



buildTable22(Lektion22)

function buildTable22(data) {
	var table22 = document.getElementById('table22')

	for (var i = 0; i < data.length; i++) {

		var row = `<tr class="row">
						<td class="first">${data[i].first}</td>
						<td class="second">${data[i].second}</td>
						<td>${data[i].third}</td>
				  </tr>`
		table22.innerHTML += row
	}
}


buildTable23(Lektion23)

function buildTable23(data) {
	var table23 = document.getElementById('table23')

	for (var i = 0; i < data.length; i++) {

		var row = `<tr class="row">
						<td class="first">${data[i].first}</td>
						<td class="second">${data[i].second}</td>
						<td>${data[i].third}</td>
				  </tr>`
		table23.innerHTML += row
	}
}



buildTable24(Lektion24)

function buildTable24(data) {
	var table24 = document.getElementById('table24')

	for (var i = 0; i < data.length; i++) {

		var row = `<tr class="row">
						<td class="first">${data[i].first}</td>
						<td class="second">${data[i].second}</td>
						<td>${data[i].third}</td>
				  </tr>`
		table24.innerHTML += row
	}
}


buildTable25(Lektion25)

function buildTable25(data) {
	var table25 = document.getElementById('table25')

	for (var i = 0; i < data.length; i++) {

		var row = `<tr class="row">
						<td class="first">${data[i].first}</td>
						<td class="second">${data[i].second}</td>
						<td>${data[i].third}</td>
				  </tr>`
		table25.innerHTML += row
	}
}



buildTable26(Lektion26)

function buildTable26(data) {
	var table26 = document.getElementById('table26')

	for (var i = 0; i < data.length; i++) {

		var row = `<tr class="row">
						<td class="first">${data[i].first}</td>
						<td class="second">${data[i].second}</td>
						<td>${data[i].third}</td>
				  </tr>`
		table26.innerHTML += row
	}
}


buildTable27(Lektion27)

function buildTable27(data) {
	var table27 = document.getElementById('table27')

	for (var i = 0; i < data.length; i++) {

		var row = `<tr class="row">
						<td class="first">${data[i].first}</td>
						<td class="second">${data[i].second}</td>
						<td>${data[i].third}</td>
				  </tr>`
		table27.innerHTML += row
	}
}

buildTable28(Lektion28)

function buildTable28(data) {
	var table28 = document.getElementById('table28')

	for (var i = 0; i < data.length; i++) {

		var row = `<tr class="row">
						<td class="first">${data[i].first}</td>
						<td class="second">${data[i].second}</td>
						<td>${data[i].third}</td>
				  </tr>`
		table28.innerHTML += row
	}
}



buildTable29(Lektion29)

function buildTable29(data) {
	var table29 = document.getElementById('table29')

	for (var i = 0; i < data.length; i++) {

		var row = `<tr class="row">
						<td class="first">${data[i].first}</td>
						<td class="second">${data[i].second}</td>
						<td>${data[i].third}</td>
				  </tr>`
		table29.innerHTML += row
	}
}







buildTableEnglisch_Klasse_8_Unit1_Text_smart_1_Drama(Englisch_Klasse_8_Unit1_Text_smart_1_Drama)


function buildTableEnglisch_Klasse_8_Unit1_Text_smart_1_Drama(data) {
	var table_Englisch_Klasse_8_Unit1_Text_smart_1_Drama = document.getElementById('table_Englisch_Klasse_8_Unit1_Text_smart_1_Drama')
	//console.log(table_Englisch_Klasse_8_Unit1_Text_smart_1_Drama)
	for (var i = 0; i < data.length; i++) {

		var row = `<tr class="row">
		<td class="eng_first">${data[i].first}</td>
		<td class="eng_second">${data[i].second}</td>
		</tr>`
		table_Englisch_Klasse_8_Unit1_Text_smart_1_Drama.innerHTML += row


	}
}





buildTableEnglisch_Klasse_8_AC2_cultures_2_the_USA(Englisch_Klasse_8_AC2_cultures_2_the_USA)


function buildTableEnglisch_Klasse_8_AC2_cultures_2_the_USA(data) {
	var table_Englisch_Klasse_8_AC2_cultures_2_the_USA = document.getElementById('table_Englisch_Klasse_8_AC2_cultures_2_the_USA')

	for (var i = 0; i < data.length; i++) {

		var row = `<tr class="row">
						<td class="eng_first">${data[i].first}</td>
						<td class="eng_second">${data[i].second}</td>
				  </tr>`
		table_Englisch_Klasse_8_AC2_cultures_2_the_USA.innerHTML += row


	}
}




buildTableEnglisch_Klasse_8_Unit_2_S_174(Englisch_Klasse_8_Unit_2_S_174)


function buildTableEnglisch_Klasse_8_Unit_2_S_174(data) {
	var table_Englisch_Klasse_8_Unit_2_S_174 = document.getElementById('table_Englisch_Klasse_8_Unit_2_S_174')

	for (var i = 0; i < data.length; i++) {

		var row = `<tr class="row">
						<td class="eng_first">${data[i].first}</td>
						<td class="eng_second">${data[i].second}</td>
				  </tr>`
		table_Englisch_Klasse_8_Unit_2_S_174.innerHTML += row


	}
}




buildTableEnglisch_Klasse_8_Unit_2_S_179_180(Englisch_Klasse_8_Unit_2_S_179_180)


function buildTableEnglisch_Klasse_8_Unit_2_S_179_180(data) {
	var table_Englisch_Klasse_8_Unit_2_S_179_180 = document.getElementById('table_Englisch_Klasse_8_Unit_2_S_179_180')

	for (var i = 0; i < data.length; i++) {

		var row = `<tr class="row">
						<td class="eng_first">${data[i].first}</td>
						<td class="eng_second">${data[i].second}</td>
				  </tr>`
		table_Englisch_Klasse_8_Unit_2_S_179_180.innerHTML += row


	}
}




buildTableEnglisch_Klasse_8_Unit_2_S_181(Englisch_Klasse_8_Unit_2_S_181)


function buildTableEnglisch_Klasse_8_Unit_2_S_181(data) {
	var table_Englisch_Klasse_8_Unit_2_S_181 = document.getElementById('table_Englisch_Klasse_8_Unit_2_S_181')

	for (var i = 0; i < data.length; i++) {

		var row = `<tr class="row">
						<td class="eng_first">${data[i].first}</td>
						<td class="eng_second">${data[i].second}</td>
				  </tr>`
		table_Englisch_Klasse_8_Unit_2_S_181.innerHTML += row


	}
}



buildTableEnglisch_Klasse_8_Unit_3_S_184(Englisch_Klasse_8_Unit_3_S_184)


function buildTableEnglisch_Klasse_8_Unit_3_S_184(data) {
	var table_Englisch_Klasse_8_Unit_3_S_184 = document.getElementById('table_Englisch_Klasse_8_Unit_3_S_184')

	for (var i = 0; i < data.length; i++) {

		var row = `<tr class="row">
						<td class="eng_first">${data[i].first}</td>
						<td class="eng_second">${data[i].second}</td>
				  </tr>`
		table_Englisch_Klasse_8_Unit_3_S_184.innerHTML += row


	}
}


buildTableEnglisch_Klasse_8_Unit_3_S_188(Englisch_Klasse_8_Unit_3_S_188)


function buildTableEnglisch_Klasse_8_Unit_3_S_188(data) {
	var table_Englisch_Klasse_8_Unit_3_S_188 = document.getElementById('table_Englisch_Klasse_8_Unit_3_S_188')

	for (var i = 0; i < data.length; i++) {

		var row = `<tr class="row">
						<td class="eng_first">${data[i].first}</td>
						<td class="eng_second">${data[i].second}</td>
				  </tr>`
		table_Englisch_Klasse_8_Unit_3_S_188.innerHTML += row


	}
}



buildTableEnglisch_Klasse_9_Unit_1_S_149(Englisch_Klasse_9_Unit_1_S_149)


function buildTableEnglisch_Klasse_9_Unit_1_S_149(data) {
	var table_Englisch_Klasse_9_Unit_1_S_149 = document.getElementById('table_Englisch_Klasse_9_Unit_1_S_149')

	for (var i = 0; i < data.length; i++) {

		var row = `<tr class="row">
						<td class="eng_first">${data[i].first}</td>
						<td class="eng_second">${data[i].second}</td>
				  </tr>`
		table_Englisch_Klasse_9_Unit_1_S_149.innerHTML += row


	}
}






var urlMenu = document.getElementById('Lektion_select');
urlMenu.onchange = function () {
	var userOption = this.options[this.selectedIndex];
	if (userOption.value != "all") {
		window.open(userOption.value, "idk", "");
	}
	if (userOption.value == "#all") {
		all()
	}
	if (userOption.value == "#all_latein") {
		all_latein()
	}
	if (userOption.value == "#all_englisch") {
		all_englisch()
	}
	if (userOption.value == "#all_klasse_8") {
		all_klasse_8_englisch()
	}
	if (userOption.value == "#all_klasse_9") {
		all_klasse_9_englisch()
	}
	if (userOption.value == "#lek_Vokabeltest_Lektion") {
		hide_all_außerVokabeltest_Lektion()
	}
	if (userOption.value == "#lek_Vokabeln_aus_keiner_Lektion") {
		hide_all_außerVokabeln_aus_keiner_Lektion()
	}
	if (userOption.value == "#lek_01") {
		hide_all_außer01()
	}
	if (userOption.value == "#lek_02") {
		hide_all_außer02()
	}
	if (userOption.value == "#lek_03") {
		hide_all_außer03()
	}
	if (userOption.value == "#lek_04") {
		hide_all_außer04()
	}
	if (userOption.value == "#lek_05") {
		hide_all_außer05()
	}
	if (userOption.value == "#lek_06") {
		hide_all_außer06()
	}
	if (userOption.value == "#lek_07") {
		hide_all_außer07()
	}
	if (userOption.value == "#lek_08") {
		hide_all_außer08()
	}
	if (userOption.value == "#lek_09") {
		hide_all_außer09()
	}
	if (userOption.value == "#lek_10") {
		hide_all_außer10()
	}
	if (userOption.value == "#lek_11") {
		hide_all_außer11()
	}
	if (userOption.value == "#lek_12") {
		hide_all_außer12()
	}
	if (userOption.value == "#lek_13") {
		hide_all_außer13()
	}
	if (userOption.value == "#lek_14") {
		hide_all_außer14()
	}
	if (userOption.value == "#lek_15") {
		hide_all_außer15()
	}
	if (userOption.value == "#lek_16") {
		hide_all_außer16()
	}
	if (userOption.value == "#lek_17") {
		hide_all_außer17()
	}
	if (userOption.value == "#lek_18") {
		hide_all_außer18()
	}
	if (userOption.value == "#lek_19") {
		hide_all_außer19()
	}
	if (userOption.value == "#lek_20") {
		hide_all_außer20()
	}
	if (userOption.value == "#lek_21") {
		hide_all_außer21()
	}
	if (userOption.value == "#lek_22") {
		hide_all_außer22()
	}
	if (userOption.value == "#lek_23") {
		hide_all_außer23()
	}
	if (userOption.value == "#lek_24") {
		hide_all_außer24()
	}
	if (userOption.value == "#lek_25") {
		hide_all_außer25()
	}
	if (userOption.value == "#lek_26") {
		hide_all_außer26()
	}
	if (userOption.value == "#lek_27") {
		hide_all_außer27()
	}
	if (userOption.value == "#lek_28") {
		hide_all_außer28()
	}
	if (userOption.value == "#lek_29") {
		hide_all_außer29()
	}
	if (userOption.value == "#p_Englisch_Klasse_8_Unit1_Text_smart_1_Drama") {
		hide_all_außer_Englisch_Klasse_8_Unit1_Text_smart_1_Drama()
	}
	if (userOption.value == "#p_Englisch_Klasse_8_AC2_cultures_2_the_USA") {
		hide_all_außer_Englisch_Klasse_8_AC2_cultures_2_the_USA()
	}
	if (userOption.value == "#p_Englisch_Klasse_8_Unit_2_S_174") {
		hide_all_außer_Englisch_Klasse_8_Unit_2_S_174()
	}
	if (userOption.value == "#p_Englisch_Klasse_8_Unit_2_S_179_180") {
		hide_all_außer_Englisch_Klasse_8_Unit_2_S_179_180()
	}
	if (userOption.value == "#p_Englisch_Klasse_8_Unit_2_S_181") {
		hide_all_außer_Englisch_Klasse_8_Unit_2_S_181()
	}
	if (userOption.value == "#p_Englisch_Klasse_8_Unit_3_S_184") {
		hide_all_außer_Englisch_Klasse_8_Unit_3_S_184()
	}
	if (userOption.value == "#p_Englisch_Klasse_8_Unit_3_S_188") {
		hide_all_außer_Englisch_Klasse_8_Unit_3_S_188()
	}
	if (userOption.value == "#p_Englisch_Klasse_9_Unit_1_S_149") {
		hide_all_außer_Englisch_Klasse_9_Unit_1_S_149()
	}
}



body = document.getElementsByClassName('body')

version_div_groß = document.getElementsByClassName('version_div')
version_info_groß = document.getElementsByClassName('version_info')
version_headline_groß = document.getElementsByClassName('version_headline')
version_number_latest_groß = document.getElementsByClassName('version_number_latest')
version_hide_menü_x_btn_groß = document.getElementsByClassName('version_hide_menü_x_btn')
patch_notes_groß = document.getElementsByClassName('patch_notes')
fehler_seite_groß = document.getElementsByClassName('fehler_seite')
fehler_seite_zurück_pfeil_btn_ = document.getElementsByClassName('fehler_seite_zurück_pfeil_btn')





selected_Vokabeltest_Lektion = document.getElementsByClassName('insgesamtVokabeltest_Lektion')
selected_Vokabeln_aus_keiner_Lektion = document.getElementsByClassName('insgesamtVokabeln_aus_keiner_Lektion')
selected_01 = document.getElementsByClassName('insgesamt01')
selected_02 = document.getElementsByClassName('insgesamt02')
selected_03 = document.getElementsByClassName('insgesamt03')
selected_04 = document.getElementsByClassName('insgesamt04')
selected_05 = document.getElementsByClassName('insgesamt05')
selected_06 = document.getElementsByClassName('insgesamt06')
selected_07 = document.getElementsByClassName('insgesamt07')
selected_08 = document.getElementsByClassName('insgesamt08')
selected_09 = document.getElementsByClassName('insgesamt09')
selected_10 = document.getElementsByClassName('insgesamt10')
selected_11 = document.getElementsByClassName('insgesamt11')
selected_12 = document.getElementsByClassName('insgesamt12')
selected_13 = document.getElementsByClassName('insgesamt13')
selected_14 = document.getElementsByClassName('insgesamt14')
selected_15 = document.getElementsByClassName('insgesamt15')
selected_16 = document.getElementsByClassName('insgesamt16')
selected_17 = document.getElementsByClassName('insgesamt17')
selected_18 = document.getElementsByClassName('insgesamt18')
selected_19 = document.getElementsByClassName('insgesamt19')
selected_20 = document.getElementsByClassName('insgesamt20')
selected_21 = document.getElementsByClassName('insgesamt21')
selected_22 = document.getElementsByClassName('insgesamt22')
selected_23 = document.getElementsByClassName('insgesamt23')
selected_24 = document.getElementsByClassName('insgesamt24')
selected_25 = document.getElementsByClassName('insgesamt25')
selected_26 = document.getElementsByClassName('insgesamt26')
selected_27 = document.getElementsByClassName('insgesamt27')
selected_28 = document.getElementsByClassName('insgesamt28')
selected_29 = document.getElementsByClassName('insgesamt29')
insgesamt_Englisch_Klasse_8_Unit1_Text_smart_1_Drama = document.getElementsByClassName('insgesamt_Englisch_Klasse_8_Unit1_Text_smart_1_Drama')
insgesamt_Englisch_Klasse_8_AC2_cultures_2_the_USA = document.getElementsByClassName('insgesamt_Englisch_Klasse_8_AC2_cultures_2_the_USA')
insgesamt_Englisch_Klasse_8_Unit_2_S_174 = document.getElementsByClassName('insgesamt_Englisch_Klasse_8_Unit_2_S_174')
insgesamt_Englisch_Klasse_8_Unit_2_S_179_180 = document.getElementsByClassName('insgesamt_Englisch_Klasse_8_Unit_2_S_179_180')
insgesamt_Englisch_Klasse_8_Unit_2_S_181 = document.getElementsByClassName('insgesamt_Englisch_Klasse_8_Unit_2_S_181')
insgesamt_Englisch_Klasse_8_Unit_3_S_184 = document.getElementsByClassName('insgesamt_Englisch_Klasse_8_Unit_3_S_184')
insgesamt_Englisch_Klasse_8_Unit_3_S_188 = document.getElementsByClassName('insgesamt_Englisch_Klasse_8_Unit_3_S_188')
insgesamt_Englisch_Klasse_9_Unit_1_S_149 = document.getElementsByClassName('insgesamt_Englisch_Klasse_9_Unit_1_S_149')
all_lernen = document.getElementsByClassName('all_lernen')

all_lernen[0].classList.add('hidden');
fehler_seite_groß[0].classList.remove('fehler_seite_groß');
fehler_seite_groß[0].classList.add('hidden');
fehler_seite_zurück_pfeil_btn_[0].classList.add('hidden');


function hide_all() {
	
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.remove('hidden');
		}	
		
	selected_Vokabeln_aus_keiner_Lektion[0].classList.add('hidden');
	selected_01[0].classList.add('hidden');
	selected_02[0].classList.add('hidden');
	selected_03[0].classList.add('hidden');
	selected_04[0].classList.add('hidden');
	selected_05[0].classList.add('hidden');
	selected_06[0].classList.add('hidden');
	selected_07[0].classList.add('hidden');
	selected_08[0].classList.add('hidden');
	selected_09[0].classList.add('hidden');
	selected_10[0].classList.add('hidden');
	selected_11[0].classList.add('hidden');
	selected_12[0].classList.add('hidden');
	selected_13[0].classList.add('hidden');
	selected_14[0].classList.add('hidden');
	selected_15[0].classList.add('hidden');
	selected_16[0].classList.add('hidden');
	selected_17[0].classList.add('hidden');
	selected_18[0].classList.add('hidden');
	selected_19[0].classList.add('hidden');
	selected_20[0].classList.add('hidden');
	selected_21[0].classList.add('hidden');
	selected_22[0].classList.add('hidden');
	selected_23[0].classList.add('hidden');
	selected_24[0].classList.add('hidden');
	selected_25[0].classList.add('hidden');
	selected_26[0].classList.add('hidden');
	selected_27[0].classList.add('hidden');
	selected_28[0].classList.add('hidden');
	selected_29[0].classList.add('hidden');
	insgesamt_Englisch_Klasse_8_Unit1_Text_smart_1_Drama[0].classList.add('hidden');
	insgesamt_Englisch_Klasse_8_AC2_cultures_2_the_USA[0].classList.add('hidden');
	insgesamt_Englisch_Klasse_8_Unit_2_S_174[0].classList.add('hidden');
	insgesamt_Englisch_Klasse_8_Unit_2_S_179_180[0].classList.add('hidden');
	insgesamt_Englisch_Klasse_8_Unit_2_S_181[0].classList.add('hidden');
	insgesamt_Englisch_Klasse_8_Unit_3_S_184[0].classList.add('hidden');
	insgesamt_Englisch_Klasse_8_Unit_3_S_188[0].classList.add('hidden');
	insgesamt_Englisch_Klasse_9_Unit_1_S_149[0].classList.add('hidden');

}

function all() {

	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.remove('hidden');
		}

	selected_Vokabeln_aus_keiner_Lektion[0].classList.remove('hidden');
	selected_01[0].classList.remove('hidden');
	selected_02[0].classList.remove('hidden');
	selected_03[0].classList.remove('hidden');
	selected_04[0].classList.remove('hidden');
	selected_05[0].classList.remove('hidden');
	selected_06[0].classList.remove('hidden');
	selected_07[0].classList.remove('hidden');
	selected_08[0].classList.remove('hidden');
	selected_09[0].classList.remove('hidden');
	selected_10[0].classList.remove('hidden');
	selected_11[0].classList.remove('hidden');
	selected_12[0].classList.remove('hidden');
	selected_13[0].classList.remove('hidden');
	selected_14[0].classList.remove('hidden');
	selected_15[0].classList.remove('hidden');
	selected_16[0].classList.remove('hidden');
	selected_17[0].classList.remove('hidden');
	selected_18[0].classList.remove('hidden');
	selected_19[0].classList.remove('hidden');
	selected_20[0].classList.remove('hidden');
	selected_21[0].classList.remove('hidden');
	selected_22[0].classList.remove('hidden');
	selected_23[0].classList.remove('hidden');
	selected_24[0].classList.remove('hidden');
	selected_25[0].classList.remove('hidden');
	selected_26[0].classList.remove('hidden');
	selected_27[0].classList.remove('hidden');
	selected_28[0].classList.remove('hidden');
	selected_29[0].classList.remove('hidden');
	insgesamt_Englisch_Klasse_8_Unit1_Text_smart_1_Drama[0].classList.remove('hidden');
	insgesamt_Englisch_Klasse_8_AC2_cultures_2_the_USA[0].classList.remove('hidden');
	insgesamt_Englisch_Klasse_8_Unit_2_S_174[0].classList.remove('hidden');
	insgesamt_Englisch_Klasse_8_Unit_2_S_179_180[0].classList.remove('hidden');
	insgesamt_Englisch_Klasse_8_Unit_2_S_181[0].classList.remove('hidden');
	insgesamt_Englisch_Klasse_8_Unit_3_S_184[0].classList.remove('hidden');
	insgesamt_Englisch_Klasse_8_Unit_3_S_188[0].classList.remove('hidden');
	insgesamt_Englisch_Klasse_9_Unit_1_S_149[0].classList.remove('hidden');

}

function all_latein() {
	hide_all()

	if(vokabeltest_lektion_anzeigen == true) {
	selected_Vokabeltest_Lektion[0].classList.remove('hidden');
	}

	selected_Vokabeln_aus_keiner_Lektion[0].classList.remove('hidden');
	selected_01[0].classList.remove('hidden');
	selected_02[0].classList.remove('hidden');
	selected_03[0].classList.remove('hidden');
	selected_04[0].classList.remove('hidden');
	selected_05[0].classList.remove('hidden');
	selected_06[0].classList.remove('hidden');
	selected_07[0].classList.remove('hidden');
	selected_08[0].classList.remove('hidden');
	selected_09[0].classList.remove('hidden');
	selected_10[0].classList.remove('hidden');
	selected_11[0].classList.remove('hidden');
	selected_12[0].classList.remove('hidden');
	selected_13[0].classList.remove('hidden');
	selected_14[0].classList.remove('hidden');
	selected_15[0].classList.remove('hidden');
	selected_16[0].classList.remove('hidden');
	selected_17[0].classList.remove('hidden');
	selected_18[0].classList.remove('hidden');
	selected_19[0].classList.remove('hidden');
	selected_20[0].classList.remove('hidden');
	selected_21[0].classList.remove('hidden');
	selected_22[0].classList.remove('hidden');
	selected_23[0].classList.remove('hidden');
	selected_24[0].classList.remove('hidden');
	selected_25[0].classList.remove('hidden');
	selected_26[0].classList.remove('hidden');
	selected_27[0].classList.remove('hidden');
	selected_28[0].classList.remove('hidden');
	selected_29[0].classList.remove('hidden');

}

function all_englisch() {
	hide_all()
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}

		hide_all()
		if(vokabeltest_lektion_anzeigen == true) {
			selected_Vokabeltest_Lektion[0].classList.add('hidden');
			}
	
		insgesamt_Englisch_Klasse_8_Unit1_Text_smart_1_Drama[0].classList.remove('hidden');
		insgesamt_Englisch_Klasse_8_AC2_cultures_2_the_USA[0].classList.remove('hidden');
		insgesamt_Englisch_Klasse_8_Unit_2_S_174[0].classList.remove('hidden');
		insgesamt_Englisch_Klasse_8_Unit_2_S_179_180[0].classList.remove('hidden');
		insgesamt_Englisch_Klasse_8_Unit_2_S_181[0].classList.remove('hidden');
		insgesamt_Englisch_Klasse_8_Unit_3_S_184[0].classList.remove('hidden');
		insgesamt_Englisch_Klasse_8_Unit_3_S_188[0].classList.remove('hidden');

		insgesamt_Englisch_Klasse_9_Unit_1_S_149[0].classList.remove('hidden');

}

function all_klasse_8_englisch() {
	hide_all()
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}

	insgesamt_Englisch_Klasse_8_Unit1_Text_smart_1_Drama[0].classList.remove('hidden');
	insgesamt_Englisch_Klasse_8_AC2_cultures_2_the_USA[0].classList.remove('hidden');
	insgesamt_Englisch_Klasse_8_Unit_2_S_174[0].classList.remove('hidden');
	insgesamt_Englisch_Klasse_8_Unit_2_S_179_180[0].classList.remove('hidden');
	insgesamt_Englisch_Klasse_8_Unit_2_S_181[0].classList.remove('hidden');
	insgesamt_Englisch_Klasse_8_Unit_3_S_184[0].classList.remove('hidden');
	insgesamt_Englisch_Klasse_8_Unit_3_S_188[0].classList.remove('hidden');

}

function all_klasse_9_englisch() {
	hide_all()
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}

	insgesamt_Englisch_Klasse_9_Unit_1_S_149[0].classList.remove('hidden');

}


function hide_all_außerVokabeltest_Lektion() {
	hide_all()
	selected_Vokabeltest_Lektion[0].classList.remove('hidden');
}

function hide_all_außerVokabeln_aus_keiner_Lektion() {
	hide_all()
	selected_Vokabeln_aus_keiner_Lektion[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer01() {
	hide_all()
	selected_01[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer02() {
	hide_all()
	selected_02[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer03() {
	hide_all()
	selected_03[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer04() {
	hide_all()
	selected_04[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer05() {
	hide_all()
	selected_05[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer06() {
	hide_all()
	selected_06[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer07() {
	hide_all()
	selected_07[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer08() {
	hide_all()
	selected_08[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer09() {
	hide_all()
	selected_09[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer10() {
	hide_all()
	selected_10[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer11() {
	hide_all()
	selected_11[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer12() {
	hide_all()
	selected_12[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer13() {
	hide_all()
	selected_13[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer14() {
	hide_all()
	selected_14[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer15() {
	hide_all()
	selected_15[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer16() {
	hide_all()
	selected_16[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer17() {
	hide_all()
	selected_17[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer18() {
	hide_all()
	selected_18[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer19() {
	hide_all()
	selected_19[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer19() {
	hide_all()
	selected_19[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer20() {
	hide_all()
	selected_20[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer21() {
	hide_all()
	selected_21[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}
function hide_all_außer22() {
	hide_all()
	selected_22[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}
function hide_all_außer23() {
	hide_all()
	selected_23[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}
function hide_all_außer24() {
	hide_all()
	selected_24[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}
function hide_all_außer25() {
	hide_all()
	selected_25[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}
function hide_all_außer26() {
	hide_all()
	selected_26[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}
function hide_all_außer27() {
	hide_all()
	selected_27[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}
function hide_all_außer28() {
	hide_all()
	selected_28[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer29() {
	hide_all()
	selected_29[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer_Englisch_Klasse_8_Unit1_Text_smart_1_Drama() {
	hide_all()
	insgesamt_Englisch_Klasse_8_Unit1_Text_smart_1_Drama[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer_Englisch_Klasse_8_AC2_cultures_2_the_USA() {
	hide_all()
	insgesamt_Englisch_Klasse_8_AC2_cultures_2_the_USA[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer_Englisch_Klasse_8_Unit_2_S_174() {
	hide_all()
	insgesamt_Englisch_Klasse_8_Unit_2_S_174[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer_Englisch_Klasse_8_Unit_2_S_179_180() {
	hide_all()
	insgesamt_Englisch_Klasse_8_Unit_2_S_179_180[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer_Englisch_Klasse_8_Unit_2_S_181() {
	hide_all()
	insgesamt_Englisch_Klasse_8_Unit_2_S_181[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer_Englisch_Klasse_8_Unit_3_S_184() {
	hide_all()
	insgesamt_Englisch_Klasse_8_Unit_3_S_184[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}
function hide_all_außer_Englisch_Klasse_8_Unit_3_S_188() {
	hide_all()
	insgesamt_Englisch_Klasse_8_Unit_3_S_188[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}
function hide_all_außer_Englisch_Klasse_9_Unit_1_S_149() {
	hide_all()
	insgesamt_Englisch_Klasse_9_Unit_1_S_149[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}



lernen_auswahl_englisch_oder_latein = document.getElementsByClassName('lernen_auswahl_englisch_oder_latein')
lernen_auswahl_latein = document.getElementsByClassName('lernen_auswahl_latein')
lernen_auswahl_englisch = document.getElementsByClassName('lernen_auswahl_englisch')
all_all = document.getElementsByClassName('all_all')
search_div = document.getElementsByClassName('search_div')

all_lernen_einfach = document.getElementsByClassName('all_lernen_einfach')
btn_gewusst_nichtgewusst = document.getElementsByClassName('btn_gewusst_nichtgewusst')


lernen_auswahl_englisch_oder_latein[0].classList.add('hidden');
lernen_auswahl_latein[0].classList.add('hidden');
lernen_auswahl_englisch[0].classList.add('hidden');


function lernen() {

	lernen_auswahl_englisch_oder_latein[0].classList.remove('hidden');
	all_all[0].classList.add('hidden');
	search_div[0].classList.add('hidden');



}


function lernen_hide_menü() {
	lernen_auswahl_englisch_oder_latein[0].classList.add('hidden');
	lernen_auswahl_englisch[0].classList.add('hidden');
	lernen_auswahl_latein[0].classList.add('hidden');
	all_all[0].classList.remove('hidden');
	search_div[0].classList.remove('hidden');


}

function zurück_pfeil_btn() {
	lernen_auswahl_englisch[0].classList.add('hidden');
	lernen_auswahl_latein[0].classList.add('hidden');
	lernen_auswahl_englisch_oder_latein[0].classList.remove('hidden');
}



function latein_lektion_auswahlmenü() {
	ausgewählte_sprache = "latein"
	lernen_auswahl_englisch_oder_latein[0].classList.add('hidden');
	lernen_auswahl_latein[0].classList.remove('hidden');



}



function englisch_lektion_auswahlmenü() {
	ausgewählte_sprache = "englisch"
	lernen_auswahl_englisch_oder_latein[0].classList.add('hidden');
	lernen_auswahl_englisch[0].classList.remove('hidden');


}

document.getElementById('länge_Vokabeltest_Lektion').innerHTML = Vokabeltest_Lektion.length
document.getElementById('länge_01').innerHTML = Lektion01.length
document.getElementById('länge_02').innerHTML = Lektion02.length
document.getElementById('länge_03').innerHTML = Lektion03.length
document.getElementById('länge_04').innerHTML = Lektion04.length
document.getElementById('länge_05').innerHTML = Lektion05.length
document.getElementById('länge_06').innerHTML = Lektion06.length
document.getElementById('länge_07').innerHTML = Lektion07.length
document.getElementById('länge_08').innerHTML = Lektion08.length
document.getElementById('länge_09').innerHTML = Lektion09.length
document.getElementById('länge_10').innerHTML = Lektion10.length
document.getElementById('länge_11').innerHTML = Lektion11.length
document.getElementById('länge_12').innerHTML = Lektion12.length
document.getElementById('länge_13').innerHTML = Lektion13.length
document.getElementById('länge_14').innerHTML = Lektion14.length
document.getElementById('länge_15').innerHTML = Lektion15.length
document.getElementById('länge_16').innerHTML = Lektion16.length
document.getElementById('länge_17').innerHTML = Lektion17.length
document.getElementById('länge_18').innerHTML = Lektion18.length
document.getElementById('länge_19').innerHTML = Lektion19.length
document.getElementById('länge_20').innerHTML = Lektion20.length
document.getElementById('länge_21').innerHTML = Lektion21.length
document.getElementById('länge_22').innerHTML = Lektion22.length
document.getElementById('länge_23').innerHTML = Lektion23.length
document.getElementById('länge_24').innerHTML = Lektion24.length
document.getElementById('länge_25').innerHTML = Lektion25.length
document.getElementById('länge_26').innerHTML = Lektion26.length
document.getElementById('länge_27').innerHTML = Lektion27.length
document.getElementById('länge_28').innerHTML = Lektion28.length
document.getElementById('länge_29').innerHTML = Lektion29.length
document.getElementById('länge_Englisch_Klasse_8_Unit1_Text_smart_1_Drama').innerHTML = Englisch_Klasse_8_Unit1_Text_smart_1_Drama.length
document.getElementById('länge_Englisch_Klasse_8_AC2_cultures_2_the_USA').innerHTML = Englisch_Klasse_8_AC2_cultures_2_the_USA.length
document.getElementById('länge_Englisch_Klasse_8_Unit_2_S_174').innerHTML = Englisch_Klasse_8_Unit_2_S_174.length
document.getElementById('länge_Englisch_Klasse_8_Unit_2_S_179_180').innerHTML = Englisch_Klasse_8_Unit_2_S_179_180.length
document.getElementById('länge_Englisch_Klasse_8_Unit_2_S_181').innerHTML = Englisch_Klasse_8_Unit_2_S_181.length
document.getElementById('länge_Englisch_Klasse_8_Unit_3_S_184').innerHTML = Englisch_Klasse_8_Unit_3_S_184.length
document.getElementById('länge_Englisch_Klasse_8_Unit_3_S_188').innerHTML = Englisch_Klasse_8_Unit_3_S_188.length
document.getElementById('länge_Englisch_Klasse_9_Unit_1_S_149').innerHTML = Englisch_Klasse_9_Unit_1_S_149.length





aktuell_lernen = false


function lernen_einfach_weiter() {
	lernen_modus = "einfach"
	lernen_weiter()
}



function lernen_standard_weiter() {
	lernen_modus = "standard"
	lernen_weiter()
}


function lernen_weiter() {
	if (ausgewählte_sprache == "latein") {
		checkboxField = document.forms[0].lernen_checked;
	} else {
		checkboxField = document.forms[2].lernen_checked;
	}
	for (i = 0; i < checkboxField.length; i++) {
		if (checkboxField[i].checked) {
			console.log(checkboxField[i].value); //loggt die ausgewählte Lektion

			ausgewählt_lektion = checkboxField[i]










			checkboxField_formen = document.forms[1].checkbox_haken_mit_ohne_sonstige_formen_checked;

			if (checkboxField_formen.checked) {
				mit_formen = true
			} else {
				mit_formen = false
			}





			all_all[0].classList.add('hidden');

			all_lernen[0].classList.remove('hidden');
			all_lernen[0].classList.add('lernen_design_css');

			lernen_auswahl_latein[0].classList.add('hidden');
			lernen_auswahl_englisch[0].classList.add('hidden');
			search_div[0].classList.add('hidden');


			lernen_lat = document.getElementsByClassName("lernen_lat")
			lernen_de_sonst = document.getElementsByClassName("lernen_de_sonst")
			div_lernen_de_sonst = document.getElementsByClassName("div_lernen_de_sonst")

			lernen_einfach_btn_1_1 = document.getElementsByClassName("lernen_einfach_btn_1")
			lernen_einfach_btn_2_1 = document.getElementsByClassName("lernen_einfach_btn_2")
			lernen_einfach_btn_3_1 = document.getElementsByClassName("lernen_einfach_btn_3")



			if (lernen_modus == "standard") {
				div_lernen_de_sonst[0].classList.remove('hidden');
				all_lernen_einfach[0].classList.add('hidden');
			} else {
				btn_gewusst_nichtgewusst[0].classList.add('hidden');
				div_lernen_de_sonst[0].classList.add('hidden');
			}
			aktuell_lernen = true




			geschafte_wörter = [];
			gesehene_wörter = [];
			gesamt_fehleranzahl = [];
			nicht_beim_ersten_mal = [];


			lösung_angezeigt = false


			neue_vok()




			if (checkboxField[i].value == "Vokabeltest_Lektion") {
				lernen_noch_länge = Vokabeltest_Lektion.length
			}
			if (checkboxField[i].value == "Lektion01") {
				lernen_noch_länge = Lektion01.length
			}
			if (checkboxField[i].value == "Lektion02") {
				lernen_noch_länge = Lektion02.length
			}
			if (checkboxField[i].value == "Lektion03") {
				lernen_noch_länge = Lektion03.length
			}
			if (checkboxField[i].value == "Lektion04") {
				lernen_noch_länge = Lektion04.length
			}
			if (checkboxField[i].value == "Lektion05") {
				lernen_noch_länge = Lektion05.length
			}
			if (checkboxField[i].value == "Lektion06") {
				lernen_noch_länge = Lektion06.length
			}
			if (checkboxField[i].value == "Lektion07") {
				lernen_noch_länge = Lektion07.length
			}
			if (checkboxField[i].value == "Lektion08") {
				lernen_noch_länge = Lektion08.length
			}
			if (checkboxField[i].value == "Lektion09") {
				lernen_noch_länge = Lektion09.length
			}
			if (checkboxField[i].value == "Lektion10") {
				lernen_noch_länge = Lektion10.length
			}
			if (checkboxField[i].value == "Lektion11") {
				lernen_noch_länge = Lektion11.length
			}
			if (checkboxField[i].value == "Lektion12") {
				lernen_noch_länge = Lektion12.length
			}
			if (checkboxField[i].value == "Lektion13") {
				lernen_noch_länge = Lektion13.length
			}
			if (checkboxField[i].value == "Lektion14") {
				lernen_noch_länge = Lektion14.length
			}
			if (checkboxField[i].value == "Lektion15") {
				lernen_noch_länge = Lektion15.length
			}
			if (checkboxField[i].value == "Lektion16") {
				lernen_noch_länge = Lektion16.length
			}
			if (checkboxField[i].value == "Lektion17") {
				lernen_noch_länge = Lektion17.length
			}
			if (checkboxField[i].value == "Lektion18") {
				lernen_noch_länge = Lektion18.length
			}
			if (checkboxField[i].value == "Lektion19") {
				lernen_noch_länge = Lektion19.length
			}
			if (checkboxField[i].value == "Lektion20") {
				lernen_noch_länge = Lektion20.length
			}
			if (checkboxField[i].value == "Lektion21") {
				lernen_noch_länge = Lektion21.length
			}
			if (checkboxField[i].value == "Lektion22") {
				lernen_noch_länge = Lektion22.length
			}
			if (checkboxField[i].value == "Lektion23") {
				lernen_noch_länge = Lektion23.length
			}
			if (checkboxField[i].value == "Lektion24") {
				lernen_noch_länge = Lektion24.length
			}
			if (checkboxField[i].value == "Lektion25") {
				lernen_noch_länge = Lektion25.length
			}
			if (checkboxField[i].value == "Lektion26") {
				lernen_noch_länge = Lektion26.length
			}
			if (checkboxField[i].value == "Lektion27") {
				lernen_noch_länge = Lektion27.length
			}
			if (checkboxField[i].value == "Lektion28") {
				lernen_noch_länge = Lektion28.length
			}
			if (checkboxField[i].value == "Lektion29") {
				lernen_noch_länge = Lektion29.length
			}
			if (checkboxField[i].value == "Englisch_Klasse_8_Unit1_Text_smart_1_Drama") {
				lernen_noch_länge = Englisch_Klasse_8_Unit1_Text_smart_1_Drama.length
			}
			if (checkboxField[i].value == "Englisch_Klasse_8_AC2_cultures_2_the_USA") {
				lernen_noch_länge = Englisch_Klasse_8_AC2_cultures_2_the_USA.length
			}
			if (checkboxField[i].value == "Englisch_Klasse_8_Unit_2_S_174") {
				lernen_noch_länge = Englisch_Klasse_8_Unit_2_S_174.length
			}
			if (checkboxField[i].value == "Englisch_Klasse_8_Unit_2_S_179_180") {
				lernen_noch_länge = Englisch_Klasse_8_Unit_2_S_179_180.length
			}
			if (checkboxField[i].value == "Englisch_Klasse_8_Unit_2_S_181") {
				lernen_noch_länge = Englisch_Klasse_8_Unit_2_S_181.length
			}
			if (checkboxField[i].value == "Englisch_Klasse_8_Unit_3_S_184") {
				lernen_noch_länge = Englisch_Klasse_8_Unit_3_S_184.length
			}
			if (checkboxField[i].value == "Englisch_Klasse_8_Unit_3_S_188") {
				lernen_noch_länge = Englisch_Klasse_8_Unit_3_S_188.length
			}
			if (checkboxField[i].value == "Englisch_Klasse_9_Unit_1_S_149") {
				lernen_noch_länge = Englisch_Klasse_9_Unit_1_S_149.length
			}
			window.addEventListener("keydown", lösung_anzeigen_event, false)

			function lösung_anzeigen_event(key) {

				if (lernen_modus == "standard") {

					if (key.keyCode == "32") {
						setTimeout(() => {
							lösung_angezeigt = true
						}, 400);

						lösung_anzeigen()

						function lösung_anzeigen() {




							if (mit_formen == true) {
								document.getElementById("lernen_de_sonst").innerHTML = zweites_wort + "<br/><br/>" + drittes_wort
							} else {
								document.getElementById("lernen_de_sonst").innerHTML = zweites_wort + "<br/><br/>"
							}


							lernen_lat[0].classList.add('lösung_gezeigt_lat');
							lernen_de_sonst[0].classList.add('lösung_gezeigt_de_sonst');
							lernen_de_sonst[0].classList.remove('hidden');
						}
					}
					if (key.keyCode == "67" | key.keyCode == "86") {
						nicht_gewusst()


					} else {
						if (key.keyCode == "78" | key.keyCode == "77") {
							gewusst()
						}
					}
				}
			}
		}
	}
}

function gewusst() {

	if (lernen_modus == "standard") {

		if (lernen_noch_länge == 1) {
			geschaft_kürzer_1()
		} else {
			geschaft_länger_1()
		}
	} else {

		if (lernen_noch_länge == 3) {
			geschaft_kürzer_1()
		} else {
			geschaft_länger_1()
		}

	}
}

function nicht_gewusst() {
	if (lernen_modus == "standard") {

		if (lernen_noch_länge == 1) {
			nicht_geschaft_kürzer_1()
		} else {
			nicht_geschaft_länger_1()
		}
	} else {

		if (lernen_noch_länge == 3) {
			nicht_geschaft_kürzer_1()
		} else {
			nicht_geschaft_länger_1()
		}

	}

}

function nicht_geschaft_länger_1() {
	if (lösung_angezeigt == true) {
		gesamt_fehleranzahl ++
		document.getElementById("gesamt_fehleranzahl").innerHTML = "Gesamte <br> Fehleranzahl: " + gesamt_fehleranzahl
		neue_vok()
		//lösung_angezeigt = true
		lösung_angezeigt = false
	}
}

function nicht_geschaft_kürzer_1() {
	lernen_fertig()
}

function geschaft_länger_1() {
	if (lösung_angezeigt == true) {
		geschaft()
		neue_vok()
		//lösung_angezeigt = true
		lösung_angezeigt = false
	}
}

function geschaft_kürzer_1() {
	lernen_fertig()
}

function lernen_einfach_btn_1() {
	lernen_einfach_btn_selected = 1
	lernen_einfach_richtig_oder_nicht()
}


function lernen_einfach_btn_2() {
	lernen_einfach_btn_selected = 2
	lernen_einfach_richtig_oder_nicht()
}


function lernen_einfach_btn_3() {
	lernen_einfach_btn_selected = 3
	lernen_einfach_richtig_oder_nicht()
}

function lernen_einfach_richtig_oder_nicht() {
	if (random_3 == lernen_einfach_btn_selected) {
		lösung_angezeigt = true
		gewusst()

		if (lernen_einfach_btn_selected == 1) {
			console.log("gewusst 1")
			lernen_einfach_btn_1_1[0].classList.add('lernen_einfach_richtig');
			setTimeout(() => {
				lernen_einfach_btn_1_1[0].classList.remove('lernen_einfach_richtig');
			}, 1000);

		}
		if (lernen_einfach_btn_selected == 2) {
			console.log("gewusst 2")
			lernen_einfach_btn_2_1[0].classList.add('lernen_einfach_richtig');

			setTimeout(() => {
				lernen_einfach_btn_2_1[0].classList.remove('lernen_einfach_richtig');

			}, 1000);

		}
		if (lernen_einfach_btn_selected == 3) {
			console.log("gewusst 3")
			lernen_einfach_btn_3_1[0].classList.add('lernen_einfach_richtig');
			setTimeout(() => {
				lernen_einfach_btn_3_1[0].classList.remove('lernen_einfach_richtig');

			}, 1000);

		}




	} else {
		lösung_angezeigt = true
		nicht_gewusst()


		if (lernen_einfach_btn_selected == 1) {
			console.log("nicht gewusst 1")
			lernen_einfach_btn_1_1[0].classList.add('lernen_einfach_falsch');
			setTimeout(() => {
				lernen_einfach_btn_1_1[0].classList.remove('lernen_einfach_falsch');
			}, 1000);
		}
		if (lernen_einfach_btn_selected == 2) {
			console.log("nicht gewusst 2")
			lernen_einfach_btn_2_1[0].classList.add('lernen_einfach_falsch');

			setTimeout(() => {
				lernen_einfach_btn_2_1[0].classList.remove('lernen_einfach_falsch');

			}, 1000);
		}
		if (lernen_einfach_btn_selected == 3) {
			console.log("nicht gewusst 3")
			lernen_einfach_btn_3_1[0].classList.add('lernen_einfach_falsch');
			setTimeout(() => {
				lernen_einfach_btn_3_1[0].classList.remove('lernen_einfach_falsch');

			}, 1000);
		}




		if (lernen_einfach_btn_richtig == 1) {
			console.log("richtig 1")
			lernen_einfach_btn_1_1[0].classList.add('lernen_einfach_richtig');
			setTimeout(() => {
				lernen_einfach_btn_1_1[0].classList.remove('lernen_einfach_richtig');
			}, 1000);

		}
		if (lernen_einfach_btn_richtig == 2) {
			console.log("richtig 2")
			lernen_einfach_btn_2_1[0].classList.add('lernen_einfach_richtig');

			setTimeout(() => {
				lernen_einfach_btn_2_1[0].classList.remove('lernen_einfach_richtig');

			}, 1000);

		}
		if (lernen_einfach_btn_richtig == 3) {
			console.log("richtig 3")
			lernen_einfach_btn_3_1[0].classList.add('lernen_einfach_richtig');
			setTimeout(() => {
				lernen_einfach_btn_3_1[0].classList.remove('lernen_einfach_richtig');

			}, 1000);
		}




		/*
	setTimeout(() => {  
		
		lernen_einfach_btn_1_1[0].classList.remove('lernen_einfach_richtig');
		lernen_einfach_btn_1_1[0].classList.remove('lernen_einfach_falsch');
		lernen_einfach_btn_2_1[0].classList.remove('lernen_einfach_richtig');
		lernen_einfach_btn_2_1[0].classList.remove('lernen_einfach_falsch');
		lernen_einfach_btn_3_1[0].classList.remove('lernen_einfach_richtig');
		lernen_einfach_btn_3_1[0].classList.remove('lernen_einfach_falsch');

	 }, 1000);
	 */
	}
}







function lernen_fertig() {

	document.getElementById("gesamt_fehleranzahl").innerHTML = ""

	aktuell_lernen = false

	all_lernen[0].classList.remove('lernen_design_css');

	all_lernen[0].classList.add('hidden');
	btn_gewusst_nichtgewusst[0].classList.remove('hidden');

	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.remove('hidden');
		}

	selected_01[0].classList.remove('hidden');
	selected_02[0].classList.remove('hidden');
	selected_03[0].classList.remove('hidden');
	selected_04[0].classList.remove('hidden');
	selected_05[0].classList.remove('hidden');
	selected_06[0].classList.remove('hidden');
	selected_07[0].classList.remove('hidden');
	selected_08[0].classList.remove('hidden');
	selected_09[0].classList.remove('hidden');
	selected_10[0].classList.remove('hidden');
	selected_11[0].classList.remove('hidden');
	selected_12[0].classList.remove('hidden');
	selected_13[0].classList.remove('hidden');
	selected_14[0].classList.remove('hidden');
	selected_15[0].classList.remove('hidden');
	selected_16[0].classList.remove('hidden');
	selected_17[0].classList.remove('hidden');
	selected_18[0].classList.remove('hidden');
	selected_19[0].classList.remove('hidden');
	selected_20[0].classList.remove('hidden');
	selected_21[0].classList.remove('hidden');
	selected_22[0].classList.remove('hidden');
	selected_23[0].classList.remove('hidden');
	selected_24[0].classList.remove('hidden');
	selected_25[0].classList.remove('hidden');
	selected_26[0].classList.remove('hidden');
	selected_27[0].classList.remove('hidden');
	selected_28[0].classList.remove('hidden');
	selected_29[0].classList.remove('hidden');
	insgesamt_Englisch_Klasse_8_Unit1_Text_smart_1_Drama[0].classList.remove('hidden');
	insgesamt_Englisch_Klasse_8_AC2_cultures_2_the_USA[0].classList.remove('hidden');
	insgesamt_Englisch_Klasse_8_Unit_2_S_174[0].classList.remove('hidden');
	insgesamt_Englisch_Klasse_8_Unit_2_S_179_180[0].classList.remove('hidden');
	insgesamt_Englisch_Klasse_8_Unit_2_S_181[0].classList.remove('hidden');
	insgesamt_Englisch_Klasse_8_Unit_3_S_184[0].classList.remove('hidden');
	insgesamt_Englisch_Klasse_8_Unit_3_S_188[0].classList.remove('hidden');
	insgesamt_Englisch_Klasse_9_Unit_1_S_149[0].classList.remove('hidden');



	all_all[0].classList.remove('blur');
	search_div[0].classList.remove('blur');



	all_all[0].classList.remove('hidden');
	lernen_auswahl_latein[0].classList.add('hidden');
	lernen_auswahl_englisch[0].classList.add('hidden');
	lernen_auswahl_englisch_oder_latein[0].classList.add('hidden');
	search_div[0].classList.remove('hidden');

	all_lernen_einfach[0].classList.remove('hidden');


	document.getElementById("noch_länge_lek").innerHTML = ""
}






function neue_vok() {

	if (lernen_modus == "standard") {
		neue_vok_standard()
	} else {

		neue_vok_einfach()

		function neue_vok_einfach() {




			neue_vok_standard()
			if (mit_formen == true) {
				lernen_einfach_erste_option = zweites_wort + "<br/><br/>" + drittes_wort
			} else {
				lernen_einfach_erste_option = zweites_wort
			}
			lernen_einfach_erste_option_abgleich = erstes_wort

			neue_vok_standard()
			if (mit_formen == true) {
				lernen_einfach_zweite_option = zweites_wort + "<br/><br/>" + drittes_wort
			} else {
				lernen_einfach_zweite_option = zweites_wort
			}
			lernen_einfach_zweite_option_abgleich = erstes_wort

			neue_vok_standard()
			if (mit_formen == true) {
				lernen_einfach_dritte_option = zweites_wort + "<br/><br/>" + drittes_wort
			} else {
				lernen_einfach_dritte_option = zweites_wort
			}
			lernen_einfach_dritte_option_abgleich = erstes_wort

			lernen_einfach_abgleich = erstes_wort

			console.log(lernen_einfach_abgleich)
			if ((lernen_einfach_abgleich == lernen_einfach_erste_option_abgleich) || (lernen_einfach_abgleich == lernen_einfach_zweite_option_abgleich) || (lernen_einfach_abgleich == lernen_einfach_dritte_option_abgleich)) {

			} else {

				console.log("Abgleich")
				neue_vok()

			}




			if ((lernen_einfach_erste_option == lernen_einfach_zweite_option) | (lernen_einfach_erste_option == lernen_einfach_dritte_option) | (lernen_einfach_zweite_option == lernen_einfach_dritte_option)) {
				console.log("Mind. eine Übereinstimmung")
				neue_vok()
			}



		}

		setTimeout(() => {



			random_3 = Math.round(2 * Math.random()) + 1;

			if (random_3 == 1) {
				//console.log(random_3)

				document.getElementById('lernen_einfach_btn_3').innerHTML = lernen_einfach_erste_option
				document.getElementById('lernen_einfach_btn_2').innerHTML = lernen_einfach_zweite_option
				document.getElementById('lernen_einfach_btn_1').innerHTML = lernen_einfach_dritte_option

				lernen_einfach_btn_richtig = 1
			}
			if (random_3 == 2) {
				console.log(random_3)
				document.getElementById('lernen_einfach_btn_1').innerHTML = lernen_einfach_erste_option
				document.getElementById('lernen_einfach_btn_3').innerHTML = lernen_einfach_zweite_option
				document.getElementById('lernen_einfach_btn_2').innerHTML = lernen_einfach_dritte_option

				lernen_einfach_btn_richtig = 2
			}
			if (random_3 == 3) {
				console.log(random_3)
				document.getElementById('lernen_einfach_btn_1').innerHTML = lernen_einfach_erste_option
				document.getElementById('lernen_einfach_btn_2').innerHTML = lernen_einfach_zweite_option
				document.getElementById('lernen_einfach_btn_3').innerHTML = lernen_einfach_dritte_option

				lernen_einfach_btn_richtig = 3
			}


		}, 1000);

	}
}


function neue_vok_standard() {







	if (ausgewählt_lektion.value == "Vokabeltest_Lektion") {
		random_item = Vokabeltest_Lektion[Math.floor(Math.random() * Vokabeltest_Lektion.length)];
		lernen_lektion_anzeige = "Vokabeltest"
		länge_lek = "Gesamt : " + Vokabeltest_Lektion.length + " Wörter"
		länge_lek_number = Vokabeltest_Lektion.length
	}
	if (ausgewählt_lektion.value == "Lektion01") {
		random_item = Lektion01[Math.floor(Math.random() * Lektion01.length)];
		lernen_lektion_anzeige = "Lektion " + 01
		länge_lek = "Gesamt : " + Lektion01.length + " Wörter"
		länge_lek_number = Lektion01.length
	}
	if (ausgewählt_lektion.value == "Lektion02") {
		random_item = Lektion02[Math.floor(Math.random() * Lektion02.length)];
		lernen_lektion_anzeige = "Lektion " + 02
		länge_lek = "Gesamt : " + Lektion02.length + " Wörter"
		länge_lek_number = Lektion02.length
	}
	if (ausgewählt_lektion.value == "Lektion03") {
		random_item = Lektion03[Math.floor(Math.random() * Lektion03.length)];
		lernen_lektion_anzeige = "Lektion " + 03
		länge_lek = "Gesamt : " + Lektion03.length + " Wörter"
		länge_lek_number = Lektion03.length
	}
	if (ausgewählt_lektion.value == "Lektion04") {
		random_item = Lektion04[Math.floor(Math.random() * Lektion04.length)];
		lernen_lektion_anzeige = "Lektion " + 04
		länge_lek = "Gesamt : " + Lektion04.length + " Wörter"
		länge_lek_number = Lektion04.length
	}
	if (ausgewählt_lektion.value == "Lektion05") {
		random_item = Lektion05[Math.floor(Math.random() * Lektion05.length)];
		lernen_lektion_anzeige = "Lektion " + 05
		länge_lek = "Gesamt : " + Lektion05.length + " Wörter"
		länge_lek_number = Lektion05.length
	}
	if (ausgewählt_lektion.value == "Lektion06") {
		random_item = Lektion06[Math.floor(Math.random() * Lektion06.length)];
		lernen_lektion_anzeige = "Lektion " + 06
		länge_lek = "Gesamt : " + Lektion06.length + " Wörter"
		länge_lek_number = Lektion06.length
	}
	if (ausgewählt_lektion.value == "Lektion07") {
		random_item = Lektion07[Math.floor(Math.random() * Lektion07.length)];
		lernen_lektion_anzeige = "Lektion " + 07
		länge_lek = "Gesamt : " + Lektion07.length + " Wörter"
		länge_lek_number = Lektion07.length
	}
	if (ausgewählt_lektion.value == "Lektion08") {
		random_item = Lektion08[Math.floor(Math.random() * Lektion08.length)];
		lernen_lektion_anzeige = "Lektion " + 08
		länge_lek = "Gesamt : " + Lektion08.length + " Wörter"
		länge_lek_number = Lektion08.length
	}
	if (ausgewählt_lektion.value == "Lektion09") {
		random_item = Lektion09[Math.floor(Math.random() * Lektion09.length)];
		lernen_lektion_anzeige = "Lektion " + 09
		länge_lek = "Gesamt : " + Lektion09.length + " Wörter"
		länge_lek_number = Lektion09.length
	}
	if (ausgewählt_lektion.value == "Lektion10") {
		random_item = Lektion10[Math.floor(Math.random() * Lektion10.length)];
		lernen_lektion_anzeige = "Lektion " + 10
		länge_lek = "Gesamt : " + Lektion10.length + " Wörter"
		länge_lek_number = Lektion10.length
	}
	if (ausgewählt_lektion.value == "Lektion11") {
		random_item = Lektion11[Math.floor(Math.random() * Lektion11.length)];
		lernen_lektion_anzeige = "Lektion " + 11
		länge_lek = "Gesamt : " + Lektion11.length + " Wörter"
		länge_lek_number = Lektion11.length
	}
	if (ausgewählt_lektion.value == "Lektion12") {
		random_item = Lektion12[Math.floor(Math.random() * Lektion12.length)];
		lernen_lektion_anzeige = "Lektion " + 12
		länge_lek = "Gesamt : " + Lektion12.length + " Wörter"
		länge_lek_number = Lektion12.length
	}
	if (ausgewählt_lektion.value == "Lektion13") {
		random_item = Lektion13[Math.floor(Math.random() * Lektion13.length)];
		lernen_lektion_anzeige = "Lektion " + 13
		länge_lek = "Gesamt : " + Lektion13.length + " Wörter"
		länge_lek_number = Lektion13.length
	}
	if (ausgewählt_lektion.value == "Lektion14") {
		random_item = Lektion14[Math.floor(Math.random() * Lektion14.length)];
		lernen_lektion_anzeige = "Lektion " + 14
		länge_lek = "Gesamt : " + Lektion14.length + " Wörter"
		länge_lek_number = Lektion14.length
	}
	if (ausgewählt_lektion.value == "Lektion15") {
		random_item = Lektion15[Math.floor(Math.random() * Lektion15.length)];
		lernen_lektion_anzeige = "Lektion " + 15
		länge_lek = "Gesamt : " + Lektion15.length + " Wörter"
		länge_lek_number = Lektion15.length
	}
	if (ausgewählt_lektion.value == "Lektion16") {
		random_item = Lektion16[Math.floor(Math.random() * Lektion16.length)];
		lernen_lektion_anzeige = "Lektion " + 16
		länge_lek = "Gesamt : " + Lektion16.length + " Wörter"
		länge_lek_number = Lektion16.length
	}
	if (ausgewählt_lektion.value == "Lektion17") {
		random_item = Lektion17[Math.floor(Math.random() * Lektion17.length)];
		lernen_lektion_anzeige = "Lektion " + 17
		länge_lek = "Gesamt : " + Lektion17.length + " Wörter"
		länge_lek_number = Lektion17.length
	}
	if (ausgewählt_lektion.value == "Lektion18") {
		random_item = Lektion18[Math.floor(Math.random() * Lektion18.length)];
		lernen_lektion_anzeige = "Lektion " + 18
		länge_lek = "Gesamt : " + Lektion18.length + " Wörter"
		länge_lek_number = Lektion18.length
	}
	if (ausgewählt_lektion.value == "Lektion19") {
		random_item = Lektion19[Math.floor(Math.random() * Lektion19.length)];
		lernen_lektion_anzeige = "Lektion " + 19
		länge_lek = "Gesamt : " + Lektion19.length + " Wörter"
		länge_lek_number = Lektion19.length
	}
	if (ausgewählt_lektion.value == "Lektion20") {
		random_item = Lektion20[Math.floor(Math.random() * Lektion20.length)];
		lernen_lektion_anzeige = "Lektion " + 20
		länge_lek = "Gesamt : " + Lektion20.length + " Wörter"
		länge_lek_number = Lektion20.length
	}
	if (ausgewählt_lektion.value == "Lektion21") {
		random_item = Lektion21[Math.floor(Math.random() * Lektion21.length)];
		lernen_lektion_anzeige = "Lektion " + 21
		länge_lek = "Gesamt : " + Lektion21.length + " Wörter"
		länge_lek_number = Lektion21.length
	}
	if (ausgewählt_lektion.value == "Lektion22") {
		random_item = Lektion22[Math.floor(Math.random() * Lektion22.length)];
		lernen_lektion_anzeige = "Lektion " + 22
		länge_lek = "Gesamt : " + Lektion22.length + " Wörter"
		länge_lek_number = Lektion22.length
	}
	if (ausgewählt_lektion.value == "Lektion23") {
		random_item = Lektion23[Math.floor(Math.random() * Lektion23.length)];
		lernen_lektion_anzeige = "Lektion " + 23
		länge_lek = "Gesamt : " + Lektion23.length + " Wörter"
		länge_lek_number = Lektion23.length
	}
	if (ausgewählt_lektion.value == "Lektion24") {
		random_item = Lektion24[Math.floor(Math.random() * Lektion24.length)];
		lernen_lektion_anzeige = "Lektion " + 24
		länge_lek = "Gesamt : " + Lektion24.length + " Wörter"
		länge_lek_number = Lektion24.length
	}
	if (ausgewählt_lektion.value == "Lektion25") {
		random_item = Lektion25[Math.floor(Math.random() * Lektion25.length)];
		lernen_lektion_anzeige = "Lektion " + 25
		länge_lek = "Gesamt : " + Lektion25.length + " Wörter"
		länge_lek_number = Lektion25.length
	}
	if (ausgewählt_lektion.value == "Lektion26") {
		random_item = Lektion26[Math.floor(Math.random() * Lektion26.length)];
		lernen_lektion_anzeige = "Lektion " + 26
		länge_lek = "Gesamt : " + Lektion26.length + " Wörter"
		länge_lek_number = Lektion26.length
	}
	if (ausgewählt_lektion.value == "Lektion27") {
		random_item = Lektion27[Math.floor(Math.random() * Lektion27.length)];
		lernen_lektion_anzeige = "Lektion " + 27
		länge_lek = "Gesamt : " + Lektion27.length + " Wörter"
		länge_lek_number = Lektion27.length
	}
	if (ausgewählt_lektion.value == "Lektion28") {
		random_item = Lektion28[Math.floor(Math.random() * Lektion28.length)];
		lernen_lektion_anzeige = "Lektion " + 28
		länge_lek = "Gesamt : " + Lektion28.length + " Wörter"
		länge_lek_number = Lektion28.length
	}
	if (ausgewählt_lektion.value == "Lektion29") {
		random_item = Lektion29[Math.floor(Math.random() * Lektion29.length)];
		lernen_lektion_anzeige = "Lektion " + 29
		länge_lek = "Gesamt : " + Lektion29.length + " Wörter"
		länge_lek_number = Lektion29.length
	}
	if (ausgewählt_lektion.value == "Englisch_Klasse_8_Unit1_Text_smart_1_Drama") {
		random_item = Englisch_Klasse_8_Unit1_Text_smart_1_Drama[Math.floor(Math.random() * Englisch_Klasse_8_Unit1_Text_smart_1_Drama.length)];
		lernen_lektion_anzeige = "Englisch 8 Unit 1 Drama"
		länge_lek = "Gesamt : " + Englisch_Klasse_8_Unit1_Text_smart_1_Drama.length + " Wörter"
		länge_lek_number = Englisch_Klasse_8_Unit1_Text_smart_1_Drama.length
	}
	if (ausgewählt_lektion.value == "Englisch_Klasse_8_AC2_cultures_2_the_USA") {
		random_item = Englisch_Klasse_8_AC2_cultures_2_the_USA[Math.floor(Math.random() * Englisch_Klasse_8_AC2_cultures_2_the_USA.length)];
		lernen_lektion_anzeige = "Englisch Klasse 8 AC2 cultures 2 the USA"
		länge_lek = "Gesamt : " + Englisch_Klasse_8_AC2_cultures_2_the_USA.length + " Wörter"
		länge_lek_number = Englisch_Klasse_8_AC2_cultures_2_the_USA.length
	}
	if (ausgewählt_lektion.value == "Englisch_Klasse_8_Unit_2_S_174") {
		random_item = Englisch_Klasse_8_Unit_2_S_174[Math.floor(Math.random() * Englisch_Klasse_8_Unit_2_S_174.length)];
		lernen_lektion_anzeige = "Englisch Klasse 8 Unit 2 S. 174"
		länge_lek = "Gesamt : " + Englisch_Klasse_8_Unit_2_S_174.length + " Wörter"
		länge_lek_number = Englisch_Klasse_8_Unit_2_S_174.length
	}
	if (ausgewählt_lektion.value == "Englisch_Klasse_8_Unit_2_S_179_180") {
		random_item = Englisch_Klasse_8_Unit_2_S_179_180[Math.floor(Math.random() * Englisch_Klasse_8_Unit_2_S_179_180.length)];
		lernen_lektion_anzeige = "Englisch Klasse 8 Unit 2 S. 179 + 180"
		länge_lek = "Gesamt : " + Englisch_Klasse_8_Unit_2_S_179_180.length + " Wörter"
		länge_lek_number = Englisch_Klasse_8_Unit_2_S_179_180.length
	}
	if (ausgewählt_lektion.value == "Englisch_Klasse_8_Unit_2_S_181") {
		random_item = Englisch_Klasse_8_Unit_2_S_181[Math.floor(Math.random() * Englisch_Klasse_8_Unit_2_S_181.length)];
		lernen_lektion_anzeige = "Englisch Klasse 8 Unit 2 S. 181"
		länge_lek = "Gesamt : " + Englisch_Klasse_8_Unit_2_S_181.length + " Wörter"
		länge_lek_number = Englisch_Klasse_8_Unit_2_S_181.length
	}
	if (ausgewählt_lektion.value == "Englisch_Klasse_8_Unit_3_S_184") {
		random_item = Englisch_Klasse_8_Unit_3_S_184[Math.floor(Math.random() * Englisch_Klasse_8_Unit_3_S_184.length)];
		lernen_lektion_anzeige = "Englisch Klasse 8 Unit 3 S. 184"
		länge_lek = "Gesamt : " + Englisch_Klasse_8_Unit_3_S_184.length + " Wörter"
		länge_lek_number = Englisch_Klasse_8_Unit_3_S_184.length
	}
	if (ausgewählt_lektion.value == "Englisch_Klasse_8_Unit_3_S_188") {
		random_item = Englisch_Klasse_8_Unit_3_S_188[Math.floor(Math.random() * Englisch_Klasse_8_Unit_3_S_188.length)];
		lernen_lektion_anzeige = "Englisch Klasse 8 Unit 3 S. 188"
		länge_lek = "Gesamt : " + Englisch_Klasse_8_Unit_3_S_188.length + " Wörter"
		länge_lek_number = Englisch_Klasse_8_Unit_3_S_188.length
	}
	if (ausgewählt_lektion.value == "Englisch_Klasse_9_Unit_1_S_149") {
		random_item = Englisch_Klasse_9_Unit_1_S_149[Math.floor(Math.random() * Englisch_Klasse_9_Unit_1_S_149.length)];
		lernen_lektion_anzeige = "Englisch Klasse 9 Unit 1 S. 149"
		länge_lek = "Gesamt : " + Englisch_Klasse_9_Unit_1_S_149.length + " Wörter"
		länge_lek_number = Englisch_Klasse_9_Unit_1_S_149.length
	}


	setTimeout(() => {
		lernen_de_sonst[0].classList.add('hidden');
	}, 300);


	lernen_lat[0].classList.remove('lösung_gezeigt_lat');
	lernen_de_sonst[0].classList.remove('lösung_gezeigt_de_sonst');


	all_lernen[0].classList.remove('hidden');




	console.log(random_item)
	random_item = JSON.stringify(random_item)

	// +1 wegen der suche. sonst nicht
	// erster Buchstabe : plus 2
	erster_doppelpunkt = random_item.indexOf(":") + 1
	zweiter_doppelpunkt = random_item.indexOf(":", erster_doppelpunkt) + 1
	dritter_doppelpunkt = random_item.indexOf(":", zweiter_doppelpunkt) + 1


	anfang_erstes_wort = erster_doppelpunkt + 1
	anfang_zweites_wort = zweiter_doppelpunkt + 1
	anfang_drittes_wort = dritter_doppelpunkt + 1



	ende_erstes_wort = anfang_zweites_wort - 12
	ende_zweites_wort = anfang_drittes_wort - 11
	ende_drittes_wort = random_item.length - 2

	erstes_wort = random_item.slice(anfang_erstes_wort, ende_erstes_wort)
	zweites_wort = random_item.slice(anfang_zweites_wort, ende_zweites_wort)
	drittes_wort = random_item.slice(anfang_drittes_wort, ende_drittes_wort)




	/*
	//		Statistik
	if (gesehene_wörter.includes(erstes_wort)) {
		console.log("**Ist** schon in 'gesehene Wörter' drin")
		if (nicht_beim_ersten_mal.includes(erstes_wort)){
		}else{
			nicht_beim_ersten_mal.push(erstes_wort);
			console.log("nicht_beim_ersten_mal : " + nicht_beim_ersten_mal)
		}
	}else{
		console.log("Ist noch **nicht** in 'gesehene Wörter' drin")
	gesehene_wörter.push(erstes_wort);
	console.log("gesehene_wörter : " + gesehene_wörter)
	}
	*/

	// prozent_beim_ersten_mal =   nicht_beim_ersten_mal.length / länge_lek_number
	//console.log(prozent_beim_ersten_mal)






	if (geschafte_wörter.includes(erstes_wort)) {
		neue_vok_standard()
	} else {


		document.getElementById("lernen_lek").innerHTML = lernen_lektion_anzeige
		document.getElementById("länge_lek").innerHTML = länge_lek

		if (lernen_modus == "standard") {
			setTimeout(() => {
				document.getElementById("lernen_lat").innerHTML = erstes_wort
			}, 300);
		} else {
			setTimeout(() => {
				document.getElementById("lernen_lat").innerHTML = erstes_wort
			}, 1000);
		}

		lernen_einfach_abgleich = erstes_wort


	}



} //neu_vok_standard ende


function geschaft() {

	if (geschafte_wörter.includes(erstes_wort)) {
		neue_vok()
	}
	geschafte_wörter.push(erstes_wort);
	console.log("geschafte_wörter : " + geschafte_wörter);

	lernen_noch_länge = lernen_noch_länge - 1
	setTimeout(() => {
		document.getElementById("noch_länge_lek").innerHTML = "Noch : " + lernen_noch_länge + " Wörter"
	}, 300);

}


patch_notes_groß[0].classList.add('hidden');
// Damit beim suchen auf der Seite nicht auch Suchergebnisse aus den Patch Notes mit angezeigt werden

function version_info() {
	version_div_groß[0].classList.add('version_div_groß');
	version_info_groß[0].classList.add('version_info_groß');
	version_headline_groß[0].classList.add('version_headline_groß');
	version_hide_menü_x_btn_groß[0].classList.add('version_hide_menü_x_btn_groß');
	version_number_latest_groß[0].classList.add('version_number_latest_groß');
	patch_notes_groß[0].classList.add('patch_notes_groß');
	letzte_aktualisierung[0].classList.remove('hidden');
	fehler_seite_zurück_pfeil_btn()
	all_all[0].classList.add('hidden');
	body[0].classList.add('noscroll');
}

function hide_version_div_btn() {

	version_div_groß[0].classList.remove('version_div_groß');
	version_info_groß[0].classList.remove('version_info_groß');
	version_headline_groß[0].classList.remove('version_headline_groß');
	version_hide_menü_x_btn_groß[0].classList.remove('version_hide_menü_x_btn_groß');
	patch_notes_groß[0].classList.remove('patch_notes_groß');
	version_number_latest_groß[0].classList.remove('version_number_latest_groß');
	letzte_aktualisierung[0].classList.add('hidden');

	fehler_seite_zurück_pfeil_btn()
	
	patch_notes_groß[0].classList.add('hidden');


	if (aktuell_lernen == false) {
		all_all[0].classList.remove('hidden');
		body[0].classList.remove('noscroll');
	}
}

function fehler_seite() {
	patch_notes_groß[0].classList.add('hidden');
	fehler_seite_groß[0].classList.add('fehler_seite_groß');
	fehler_seite_groß[0].classList.remove('hidden');
	fehler_seite_zurück_pfeil_btn_[0].classList.remove('hidden');

}

function fehler_seite_zurück_pfeil_btn() {
	patch_notes_groß[0].classList.remove('hidden');
	fehler_seite_groß[0].classList.remove('fehler_seite_groß');
	fehler_seite_zurück_pfeil_btn_[0].classList.add('hidden');
}

//test 1