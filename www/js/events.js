(function(window){

    $('#take-picture').click(function(){

        var camerOptions = {
            quality: 90,
            destinationType: Camera.DestinationType.FILE_URI,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 200,
            targetHeight: 350
        };

        navigator.camera.getPicture(function(imageURI){

            var image = $('#photo');
            image.attr('src', imageURI);
            $('#share-container').show();

        }, function(errorMessage){
            alert('The following error occured: ' + errorMessage)
        }, camerOptions);

    });

    $('#share').click(function(){
        var photo_src = $('#photo').attr('src');
        var caption = $('#caption').val();
        window.plugins.socialsharing.share(caption, null, photo_src, null);
    });

})(window);