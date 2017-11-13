(function () {
    $(function () {
        $('.icon-check-square-o').click(function (e) {
            e.preventDefault();
            var callback = function (data) {
                location.href = virtualDirName + '/admin/category/index';
            }
            var obj =topevery.serializeObject($(".form-x"));
            topevery.ajax({
                url: 'api/services/app/webSiteAppServer/AddCategoryAsync',
                type: 'POST',
                data: JSON.stringify(obj),
                contentType: "application/json"
            }, callback, false);

        });

    });
})();