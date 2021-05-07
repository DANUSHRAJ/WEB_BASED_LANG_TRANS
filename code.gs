function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('WebApps');
}

function getLanguages() { 
  var ss= SpreadsheetApp.getActiveSpreadsheet();
  var languageSheet = ss.getSheetByName("LANGUAGES"); 
  var getLastRow = languageSheet.getLastRow();  
  return languageSheet.getRange(2, 1, getLastRow - 1, 2).getValues();  
}

function getTranslate(languageFrom, languageTo, languageString) {  
  var languageOutput = LanguageApp.translate(languageString, languageFrom, languageTo); 
  return languageOutput;  
}
