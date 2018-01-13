

(function() {
    $(document).ready(function() {
        $("#conectar").on('click', function() {
            $("form").css("display", "block");
            $("#media").css("display", "none");
        });


        $("form").on("submit", function(e) {
            e.preventDefault();
            var config = {
                localVideoEl: document.querySelector('#localVideo'),
                remoteVideosEl: document.querySelector('#remoteVideos'),
                autoRequestMedia: true,
                media: {
                    video: true,
                    audio: true
                },
                url: 'https://localhost:3000',
            };
            var webrtc = new SimpleWebRTC(config);
            $("form").css("display", "none");
            $("#media").css("display", "block");
            webrtc.on('readyToCall', function () {
                const room = $("[name=room]").val();
                webrtc.joinRoom(room);
            });
        })
    });
}());
