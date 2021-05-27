let apiUrlBase = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
$('#calculate').click(function(event){
  let sum = $('#sum').val();
  let currencyCode1 = $('#currency1').val();
  let currencyCode2 = $('#currency2').val();
  let url1 = apiUrlBase + '&' + currencyCode1;
  let url2 = apiUrlBase + '&' + currencyCode2;
  $.get(url1, function(data) {
    toString() {
      return {ccy: "${this.ccy}", base_ccy: "${this.base_ccy}", buy: "${this.buy}", sale: "${this.sale}"};
    }
  });
});