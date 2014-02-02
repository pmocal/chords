function initializeMusic() {
				MIDI.loadPlugin({
					soundfontUrl: "./soundfont/",
					instrument: [ "acoustic_grand_piano" ],
					callback: playMusic
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
			}
