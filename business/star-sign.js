module.exports = {
  zodiacSign: function(birthdate) {
    let {day, month} = formatDate(birthdate)
    let response = ''

    switch (month) {
      case 01:
        response =  (day < 20 ? "Capricorn" : "Aquarius");
        break;
      case 02:
        response =  (day < 19 ? "Aquarius" : "Pisces");
        break;
      case 03:
        response =  (day < 21 ? "Pisces" : "Aries");
        break;
      case 04:
        response =  (day < 20 ? "Aries" : "Taurus");
        break;
      case 05:
        response = (day < 21 ? "Taurus" : "Gemini");
        break;
      case 06:
        response =  (day < 21 ? "Gemini" : "Cancer");
        break;
      case 07:
        response =  (day < 23 ? "Cancer" : "Leo");
        break;
      case 08:
        response =  (day < 23 ? "Leo" : "Virgo");
        break;
      case 09:
        response =  (day < 23 ? "Virgo" : "Libra");
        break;
      case 10:
        response =  (day < 23 ? "Libra" : "Scorpio");
        break;
      case 11:
        response =  (day < 22 ? "Scorpio" : "Sagittarius");
        break;
      case 12:
        response =  (day < 22 ? "Sagittarius" : "Capricorn");
        break;
      default:
        response = "DAY and/or MONTH out of range, check your date format 'dd-mm-yyyy'";
        break;
    }

    return response;
  }
};

formatDate = (fullDate) => {
  splittedDate = fullDate.split("-");

  formattedDate = {
    day: parseInt(splittedDate[0]),
    month: parseInt(splittedDate[1])
  }

  return formattedDate
 };