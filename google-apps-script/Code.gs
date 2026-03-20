var SPREADSHEET_ID = '1OkDvYiZROUQtn_i57Pv585lww4Y9A5kUK-KsUuv3o74';
var SHEET_NAME = 'Feedback Telegram';

function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents || '{}');
    var sheet = getSheet_();

    sheet.appendRow([
      new Date(),
      payload.category || '',
      payload.prompt || '',
      payload.botReply || '',
      payload.expectedReply || '',
      payload.source || '',
      payload.submittedAt || '',
      payload.userAgent || '',
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({
        status: 'success',
      }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({
        status: 'error',
        message: error.message,
      }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function getSheet_() {
  var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
    sheet.appendRow([
      'Timestamp',
      'Tipo de error',
      'Pregunta del usuario',
      'Respuesta del bot',
      'Respuesta esperada',
      'Origen',
      'Fecha ISO',
      'User agent',
    ]);
  }

  return sheet;
}
