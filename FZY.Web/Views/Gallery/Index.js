(function() {
    $(function () {
        $.ajax({
            url: virtualDirName + "api/services/app/webSiteAppServer/GetCategoryListAsync",
            type: "Post",
            data: JSON.stringify({  pageIndex: 1, pageCount: 100 }),
            contentType: "application/json",
            success: function(data) {
                if (data.success) {
                    var $ul = $(".filter_holder ul");
                    var liHtml = "<li class='filter' data-filter='all'><span>All</span></li>";
                    var length = data.result.rows.length;
                    for (var i = 0; i < length; i++) {
                        <li class='filter' data-filter='portfolio_category_25'><span>Commercial</span></li>
                        liHtml += "<li class='filter' data-filter='" + data.result.rows[i].id + "'><span>" + data.result.rows[i].name+"</span></li>";
                    }
                    $ul.html(liHtml);
                }
            }
        });
        <article class='mix portfolio_category_25'>
            <div class='image_holder'>
                <a class='portfolio_link_for_touch' href='http://udcbelhasa.com/index.php/gallery_img/junblat' target='_self'>
                    <span class='image'><img width="1280" height="1024" src="http://udcbelhasa.com/images/gallery_img/img30.jpg" class="attachment-full wp-post-image" alt="Junblat Dental Center" /></span>
                </a>

                <span class='text_holder'>
                    <span class='text_outer'>
                        <span class='text_inner'>
                            <div class="hover_feature_holder_title">
                                <div class="hover_feature_holder_title_inner">
                                    <h5 class="portfolio_title"><a href="http://udcbelhasa.com/index.php/gallery_img/junblat" target="_self">Junblat Dental Center</a></h5>
                                    <span class="project_category">Design and Execution by United Decoration Company L.L.C.</span>
                                </div>
                            </div>

                            <span class='feature_holder'>
                                <span class="feature_holder_icons">
                                    <a class='lightbox qbutton small white' title='Junblat Dental Center' href='http://udcbelhasa.com/images/gallery_img/img30.jpg' data-rel='prettyPhoto[pretty_photo_gallery]'>zoom</a>
                                    <a class='preview qbutton small white' href='http://udcbelhasa.com/index.php/gallery_img/junblat' target='_self'>view</a>
                                </span>
                            </span>

                        </span>
                    </span>
                </span>
            </div>
        </article>
        topevery.ajax({
            type: "POST",
            url: "api/services/app/FileRelation/GetFileRDtoList",
            contentType: "application/json",
            data: JSON.stringify({ ModuleType: 1})
        }, function (row) {
            if (row.success) {
                var data = row.result;
                var artHtml = '';
                for (var i = 0; i < data.length; i++) {
                    // $("#manPic").attr("src", GetUrl(data[i].imageShowUrl,680,330));
                    artHtml += "<article class='mix portfolio_category_25'>"
                        + "<div class='image_holder'>"
                        + "<a class='portfolio_link_for_touch' href='http://udcbelhasa.com/index.php/gallery_img/junblat' target='_self'>"
                        + "          <span class='image'><img width='1280' height='1024' src='http://udcbelhasa.com/images/gallery_img/img30.jpg' class='attachment-full wp-post-image' alt='Junblat Dental Center' /></span>"
                    +"    </a>"
                        + "    <span class='text_holder'>"
                        + "        <span class='text_outer'>"
                        + "            <span class='text_inner'>"
                        + "                <div class='hover_feature_holder_title'>"
                        + "                    <div class='hover_feature_holder_title_inner'>"
                        + "<h5 class='portfolio_title" ><a href='http://udcbelhasa.com/index.php/gallery_img/junblat' target='_self'>Junblat Dental Center</a></h5>"
                            + "                        <span class='project_category'>Design and Execution by United Decoration Company L.L.C.</span>"
                            + "                    </div>"
                            + "                </div>"
                            + "                <span class='feature_holder'>"
                            + "                    <span class='feature_holder_icons'>"
                            + "                        <a class='lightbox qbutton small white' title='Junblat Dental Center' href='http://udcbelhasa.com/images/gallery_img/img30.jpg' data-rel='prettyPhoto[pretty_photo_gallery]'>zoom</a>"
                            + "                        <a class='preview qbutton small white' href='http://udcbelhasa.com/index.php/gallery_img/junblat' target='_self'>view</a>"
                            + "                    </span>"
                            + "                </span>"
                            + "            </span>"
                            + "        </span>"
                            + "    </span>"
                            + "</div>"
                            + " </article >"
                }
        
            }
        });

        topevery.ajax({
            type: "POST",
            url: "api/services/app/FileRelation/GetFileRDtoList",
            contentType: "application/json",
            data: JSON.stringify({ keyId: productId, ModuleType: 2 })
        }, function (row) {
            if (row.success) {
                var data = row.result;
                var hdFileData = "";
                for (var i = 0; i < data.length; i++) {
                    hdFileData += '<li><img src="' +
                       GetUrl(data[i].imageShowUrl,100,100) +
                        '" width="100" Height="100" alt="Nozomi">' +
                        '<br>' + data[i].fileNameWithoutExten + '</li>';

                }
                //回发时还原hiddenfiled的保持数据
                $(".prodcuticon").html(hdFileData);
            }
        });

        function GetUrl(imageUrl,width,heigth) {
            var url =  imageUrl + '&W='+width+'&H='+ heigth;
            return url;
        }
    });


})();

