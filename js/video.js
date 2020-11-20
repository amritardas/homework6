var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	let vol = document.querySelector("#volume").innerHTML =  video.volume*100 + "%";
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= .9;
	console.log("Current Speed: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 1.1;
	console.log("Current Speed: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
    if (video.currentTime >= video.duration-5){
    	console.log("End of Video")
    	video.currentTime = 0;
		video.playbackRate = 1;
		console.log("Playing Video");
		video.play();
    }
	video.currentTime += 5
	console.log("Current Time: " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted){
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Video is Unmuted");
	}
	else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Video is Muted");
	}
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	video.volume = this.value/100;
	let vol = document.querySelector("#volume").innerHTML =  this.value + "%";
	console.log("Current Volume: " + this.value + "%");
});

document.querySelector("#old").addEventListener("click", function() {
	video.classList.add("oldTime");
	console.log("Current Speed: " + video.playbackRate);
});

document.querySelector("#original").addEventListener("click", function() {
	video.classList.remove("oldTime");
	console.log("Current Speed: " + video.playbackRate);
});
