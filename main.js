function playSoundCloud() {
      var soundCloud = document.createElement("iframe");
      soundCloud.width = "100%";
      soundCloud.height = "100%";
      soundCloud.scrolling = "no";
      soundCloud.frameBorder = "no";
      soundCloud.allow = "autoplay";
      soundCloud.src = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1562106646&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true";

      var content = document.querySelector(".content");
      content.appendChild(soundCloud);
      document.getElementsByClassName('play-button')[0].style.visibility = 'hidden';
    }

    let soundCloudExists = true; // Flag to track if SoundCloud iframe exists
