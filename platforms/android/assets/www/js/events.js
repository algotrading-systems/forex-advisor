(function(window){

    $('#take-picture').click(function(){

        var cameraOptions = {
            quality: 90,
            destinationType: Camera.DestinationType.FILE_URI,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 200,
            targetHeight: 350
        };

        console.log('Camera option:', cameraOptions);

        navigator.camera.getPicture(function(imageURI){
            var image = $('#photo');
            image.attr('src', imageURI);
            console.log('Taken image: ' + imageURI);
            $('#share-container').show();

        }, function(errorMessage){
            alert('The following error occurred: ' + errorMessage);
            console.error('The following error occurred: ' + errorMessage);
        }, cameraOptions);

    });

    $('#share').click(function(){
        var photo_src = $('#photo').attr('src');
        var caption = $('#caption').val();
        window.plugins.socialsharing.share(caption, null, photo_src, null);
    });

})(window);