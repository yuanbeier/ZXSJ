(function () {

    jQuery(function () {
    function callback(data) {
        if (data.result.length > 0) {
            var divhtml = "";
            var ahtml = "";
            for (var i = 0; i < data.result.length; i++) {
                if (i == 0) {
                   divhtml = divhtml + ' <div class="item dark active" data-navigation-color="#000000" style="height: 600px;">';
                }
                else {
                    divhtml = divhtml + ' <div class="item dark" data-navigation-color="#000000" style="height: 600px;">';
                }
                divhtml = divhtml + ' <div class="image" style="background-image:url(Content//images//header//' + data.result[i].imageUrl+');">';
                divhtml = divhtml + '<img src="Content//images//header//' + data.result[i].imageUrl + '" alt="' + data.result[i].name+'" >';
                divhtml = divhtml + "</div></div>";

                if (i == 0) {
                    ahtml = ahtml + '<li data-target="#qode-home-slider-3" data-slide-to="' + i + '" class="active"></li>'
                }
                else
                {
                    ahtml = ahtml + '<li data-target="#qode-home-slider-3" data-slide-to="' + i + '></li>'
                }
            }

            jQuery(".carousel-inner").html(divhtml);
            jQuery(".carousel-indicators").html(ahtml);
              }
          };
          topevery.ajax({
              url: 'api/services/app/webSiteAppServer/GetHomePicListAsync',
              type: 'POST',
              contentType: "application/json"
          }, callback, false);
    });
})();