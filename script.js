$(document).ready(function() {
	$(".note").click(function() {
		$("#instructions").text("Click on a chord to hear it.");
		$("button").show();
	});
	$(".ace").click(function() {
	   $("#notecontainer").fadeOut("slow", function() { $("#chordcontainer1").fadeIn() });
	});
	$(".bdf").click(function() {
	   $("#notecontainer").fadeOut("slow", function() { $("#chordcontainer2").fadeIn() });
	}); 
	$(".ceg").click(function() {
	   $("#notecontainer").fadeOut("slow", function() { $("#chordcontainer3").fadeIn() });
	});
	$(".dfa").click(function() {
	   $("#notecontainer").fadeOut("slow", function() { $("#chordcontainer4").fadeIn() });
	}); 
	$(".egb").click(function() {
	   $("#notecontainer").fadeOut("slow", function() { $("#chordcontainer5").fadeIn() });
	});
	$(".fac").click(function() {
	   $("#notecontainer").fadeOut("slow", function() { $("#chordcontainer6").fadeIn() });
	});
	$(".gbd").click(function() {
	   $("#notecontainer").fadeOut("slow", function() { $("#chordcontainer7").fadeIn() });
	});
	$("button").click(function() {
		$(".chordcontainer").fadeOut("slow", function() {
			$("button").fadeOut("slow", function() {
				$("#notecontainer").fadeIn()
			});
		});
	});
});


function initializeMusic() {
	MIDI.loadPlugin({
		soundfontUrl: "./soundfont/",
		instrument: [ "acoustic_grand_piano" ],
		callback: playMusic
	});
};

function playMidi(note){
	var note1;
	var note2;
	var note3;
	switch(note){
		case 0: //Am
			note1 = new Audio("chordfiles/A3.mp3");
			note2 = new Audio("chordfiles/C4.mp3");
			note3 = new Audio("chordfiles/E4.mp3");
			break;
		case 1: //AM
			note1 = new Audio("chordfiles/A3.mp3");
			note2 = new Audio("chordfiles/Db4.mp3");
			note3 = new Audio("chordfiles/E4.mp3");
			break;
		case 2: //Bm
			note1 = new Audio("chordfiles/B4.mp3");
			note2 = new Audio("chordfiles/D4.mp3");
			note3 = new Audio("chordfiles/Gb4.mp3");
			break;
		case 3: //BM
			note1 = new Audio("chordfiles/B4.mp3");
			note2 = new Audio("chordfiles/Eb4.mp3");
			note3 = new Audio("chordfiles/Gb4.mp3");
			break;
		case 4: //Cm
			note1 = new Audio("chordfiles/C4.mp3");
			note2 = new Audio("chordfiles/Eb4.mp3");
			note3 = new Audio("chordfiles/G4.mp3");
			break;
		case 5: //CM
			note1 = new Audio("chordfiles/C4.mp3");
			note2 = new Audio("chordfiles/E4.mp3");
			note3 = new Audio("chordfiles/G4.mp3");
			break;
		case 6: //Dm
			note1 = new Audio("chordfiles/D4.mp3");
			note2 = new Audio("chordfiles/F4.mp3");
			note3 = new Audio("chordfiles/A4.mp3");
			break;
		case 7: //DM
			note1 = new Audio("chordfiles/D4.mp3");
			note2 = new Audio("chordfiles/Gb4.mp3");
			note3 = new Audio("chordfiles/A4.mp3");
			break;
		case 8: //Em
			note1 = new Audio("chordfiles/E4.mp3");
			note2 = new Audio("chordfiles/G4.mp3");
			note3 = new Audio("chordfiles/B4.mp3");
			break;
		case 9: //EM
			note1 = new Audio("chordfiles/E4.mp3");
			note2 = new Audio("chordfiles/Ab4.mp3");
			note3 = new Audio("chordfiles/B4.mp3");
			break;
		case 10: //Fm
			note1 = new Audio("chordfiles/F4.mp3");
			note2 = new Audio("chordfiles/Ab4.mp3");
			note3 = new Audio("chordfiles/C5.mp3");
			break;
		case 11: //FM
			note1 = new Audio("chordfiles/F4.mp3");
			note2 = new Audio("chordfiles/A4.mp3");
			note3 = new Audio("chordfiles/C5.mp3");
			break;
		case 12: //Gm
			note1 = new Audio("chordfiles/G4.mp3");
			note2 = new Audio("chordfiles/Bb4.mp3");
			note3 = new Audio("chordfiles/D5.mp3");
			break;
		case 13: //GM
			note1 = new Audio("chordfiles/G4.mp3");
			note2 = new Audio("chordfiles/B4.mp3");
			note3 = new Audio("chordfiles/D5.mp3");
			break;
	}
	note1.play();
	note2.play();
	note3.play();
}

MIDI.loadPlugin = function(conf) {
	if (typeof(conf) === "function") conf = { callback: conf };
	/// Get the instrument name.
	var instruments = conf.instruments || conf.instrument || "acoustic_grand_piano";
	if (typeof(instruments) !== "object") instruments = [ instruments ];
	instruments.map(function(data) {
		if (typeof(data) === "number") data = MIDI.GeneralMIDI.byId[data];
		return data;		
	});
	///
	MIDI.soundfontUrl = conf.soundfontUrl || MIDI.soundfontUrl || "./soundfont/";
	/// Detect the best type of audio to use.
	MIDI.audioDetect(function(types) {
		var type = "";
		// use the most appropriate plugin if not specified
		if (typeof(type) === 'undefined') {
			if (plugins[window.location.hash]) {
				type = window.location.hash.substr(1);
			} else { //
				type = "";
			}
		}
		if (type === "") {
			if (navigator.requestMIDIAccess) {
				type = "webmidi";
			} else if (window.webkitAudioContext) { // Chrome
				type = "webaudio";
			} else if (window.Audio) { // Firefox
				type = "audiotag";
			} else { // Internet Explorer
				type = "flash";
			}
		}
		if (!connect[type]) return;
		// use audio/ogg when supported
		var filetype = types["audio/ogg"] ? "ogg" : "mp3";
		// load the specified plugin
		connect[type](filetype, instruments, conf.callback);
	});
};