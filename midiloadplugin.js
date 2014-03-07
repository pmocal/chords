function initializeMusic(x) {
				MIDI.loadPlugin({
					soundfontUrl: "./MIDI/soundfont/",
					instrument: [ "acoustic_grand_piano" ],
					callback: playChord([50, 54, 59], 0)
				});
			};

function playMusic() {
				playChord(
					[50, 54, 59], 0
				);
			}

function playChord(keys, delay) {
		var midiNotes = [];
		for (var i = 0; i < keys.length; i++)
			midiNotes.push(keys[i]);
		console.log(keys + ' (' + JSON.stringify(midiNotes) + ') ' + delay);
		MIDI.chordOn(0, midiNotes, 127, delay);

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