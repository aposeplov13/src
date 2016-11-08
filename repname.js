export default function repname(url){
    var name = url;
		if (name ==""){ // проверка на пустую строку
			return nameout = "Invalid fullname";
		}
		name = name.replace(/%20/g, " ");// заменяем %20 на пробелы
		if (name.match(/[^\s\a-zа-яёó']+/gi) !=null){ //проверяем на наличие символов кроме букв
			return nameout = "Invalid fullname";
		}
		var result = name.match(/[\a-zа-яёó]+/gi);
		var x = result.length;
		if (x > 3) {
			return nameout = "Invalid fullname";
		}
		 
		var nameout = result[x-1];
		for (var i = 0; i < result.length-1; i++){
			nameout = nameout + ' ' + result[i][0] + '.';
		}
			return strBigString(nameout);
} 

function strBigString(str) { //Функция Замены первых букв слов на На Верхний Регистр
			str = str.toLowerCase();
			var strChange = str[0].toUpperCase() + str.slice(1); // Автозамена первого Симлова строки на Заглавный
			str = strChange; // Обязательная перезапись строки с новой первой заглавной
			for (var i = 1; i < str.length; i++) {
				if (str.charCodeAt(i) == 32) { //цикл для поиска символов после пробела
					var strBig = (str.charAt(i+1)).toUpperCase(); // смена буквы после пробела
					strChange = str.substring(0, i+1) + strBig + str.substring(i+2, str.length); // создание новой строки с заглавной буквой и склейка из кусков старой
					str = strChange; // обязательная перезапись изначальной строки после изменения
				}
								
			}
			return strChange;
};