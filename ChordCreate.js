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
			note1 = new Audio("chordfiles/A4.mp3");
			note2 = new Audio("chordfiles/C4.mp3");
			note3 = new Audio("chordfiles/E4.mp3");
			break;
		case 1: //AM
			note1 = new Audio("chordfiles/A4.mp3");
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
			note3 = new Audio("chordfiles/A5.mp3");
			break;
		case 7: //DM
			note1 = new Audio("chordfiles/D4.mp3");
			note2 = new Audio("chordfiles/Gb4.mp3");
			note3 = new Audio("chordfiles/A5.mp3");
			break;
		case 8: //Em
			note1 = new Audio("chordfiles/E4.mp3");
			note2 = new Audio("chordfiles/G4.mp3");
			note3 = new Audio("chordfiles/B5.mp3");
			break;
		case 9: //EM
			note1 = new Audio("chordfiles/E4.mp3");
			note2 = new Audio("chordfiles/Ab5.mp3");
			note3 = new Audio("chordfiles/B5.mp3");
			break;
		case 10: //Fm
			note1 = new Audio("chordfiles/F4.mp3");
			note2 = new Audio("chordfiles/Ab5.mp3");
			note3 = new Audio("chordfiles/C5.mp3");
			break;
		case 11: //FM
			note1 = new Audio("chordfiles/F4.mp3");
			note2 = new Audio("chordfiles/A5.mp3");
			note3 = new Audio("chordfiles/C5.mp3");
			break;
		case 12: //Gm
			note1 = new Audio("chordfiles/G4.mp3");
			note2 = new Audio("chordfiles/Bb5.mp3");
			note3 = new Audio("chordfiles/D5.mp3");
			break;
		case 13: //GM
			note1 = new Audio("chordfiles/G4.mp3");
			note2 = new Audio("chordfiles/B5.mp3");
			note3 = new Audio("chordfiles/D5.mp3");
			break;
	note1.play();
	note2.play();
	note3.play();
}

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
