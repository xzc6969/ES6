function Validation() {
  const domID = (id) => document.getElementById(id);
  this.kiemTraRong = function (value, errorID, mess) {
    if (value === "") {
      domID(errorID).innerHTML = mess;
      domID(errorID).style.display = "block";

      return false;
    }
    domID(errorID).innerHTML = "";
    domID(errorID).style.display = "none";

    return true;
  };
  this.kiemTraDoDaiKyTu = function (value, errorID, mess, min, max) {
    if (min <= value.length && value.length <= max) {
      domID(errorID).innerHTML = "";
      domID(errorID).style.display = "none";

      return true;
    }
    domID(errorID).innerHTML = mess;
    domID(errorID).style.display = "block";

    return false;
  };
  this.kiemTraIDTonTai = function (value, errorID, mess, listND) {
    var isExist = false;
    for (var i = 0; i < listND.length; i++) {
      var nd = listND[i];
      if (nd.id === value) {
        isExist = true;
        break;
      }
    }
    if (isExist) {
      domID(errorID).innerHTML = mess;
      domID(errorID).style.display = "block";

      return false;
    }
    domID(errorID).innerHTML = "";
    domID(errorID).style.display = "none";

    return true;
  };
  this.checkPattern = function (value, errorID, mess, letter) {
    if (value.match(letter)) {
      domID(errorID).innerHTML = "";
      domID(errorID).style.display = "none";

      return true;
    }
    domID(errorID).innerHTML = mess;
    domID(errorID).style.display = "block";

    return false;
  };
  this.checkAbout = function (value, errorID, mess, letter, min, max) {
    if (min <= value.match(letter) && max >= value.match(letter)) {
      domID(errorID).innerHTML = "";
      domID(errorID).style.display = "none";

      return true;
    }
    domID(errorID).innerHTML = mess;
    domID(errorID).style.display = "block";

    return false;
  };
}
