
    // This code allows the video to be played in fullscreen
    document.addEventListener("DOMContentLoaded", function () {
        var videoFrame = document.getElementById("video-frame");

        videoFrame.allowFullscreen = true;
        videoFrame.webkitallowfullscreen = true;
        videoFrame.mozallowfullscreen = true;

        videoFrame.setAttribute("allowfullscreen", "true");

        // This part is optional and can be used to control the video using JavaScript
        var player;

        function onYouTubeIframeAPIReady() {
            player = new YT.Player('video-frame', {
                events: {
                    'onReady': onPlayerReady
                }
            });
        }

        function onPlayerReady(event) {
            // You can do something when the player is ready
        }
    });


// <!-- Include the YouTube API script -->
<script src="https://www.youtube.com/embed/kD0CDXis3BM?si=yg77GqhjqNT38k0E"></script>