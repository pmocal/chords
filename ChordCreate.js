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
		case 3: //Am
			note1 = new Audio("chordfiles/B4.mp3");
			note2 = new Audio("chordfiles/Eb4.mp3");
			note3 = new Audio("chordfiles/Gb4.mp3");
			break;
		case 4: //Am
			note1 = new Audio("chordfiles/A4.mp3");
			note2 = new Audio("chordfiles/C4.mp3");
			note3 = new Audio("chordfiles/E4.mp3");
			break;
		case 0: //Am
			note1 = new Audio("chordfiles/A4.mp3");
			note2 = new Audio("chordfiles/C4.mp3");
			note3 = new Audio("chordfiles/E4.mp3");
			break;
		case 0: //Am
			note1 = new Audio("chordfiles/A4.mp3");
			note2 = new Audio("chordfiles/C4.mp3");
			note3 = new Audio("chordfiles/E4.mp3");
			break;
		case 0: //Am
			note1 = new Audio("chordfiles/A4.mp3");
			note2 = new Audio("chordfiles/C4.mp3");
			note3 = new Audio("chordfiles/E4.mp3");
			break;
		case 0: //Am
			note1 = new Audio("chordfiles/A4.mp3");
			note2 = new Audio("chordfiles/C4.mp3");
			note3 = new Audio("chordfiles/E4.mp3");
			break;
		case 0: //Am
			note1 = new Audio("chordfiles/A4.mp3");
			note2 = new Audio("chordfiles/C4.mp3");
			note3 = new Audio("chordfiles/E4.mp3");
			break;
		case 0: //Am
			note1 = new Audio("chordfiles/A4.mp3");
			note2 = new Audio("chordfiles/C4.mp3");
			note3 = new Audio("chordfiles/E4.mp3");
			break;
		case 0: //Am
			note1 = new Audio("chordfiles/A4.mp3");
			note2 = new Audio("chordfiles/C4.mp3");
			note3 = new Audio("chordfiles/E4.mp3");
			break;
		case 0: //Am
			note1 = new Audio("chordfiles/A4.mp3");
			note2 = new Audio("chordfiles/C4.mp3");
			note3 = new Audio("chordfiles/E4.mp3");
			break;
		case 0: //Am
			note1 = new Audio("chordfiles/A4.mp3");
			note2 = new Audio("chordfiles/C4.mp3");
			note3 = new Audio("chordfiles/E4.mp3");
			break;
		case 0: //Am
			note1 = new Audio("chordfiles/A4.mp3");
			note2 = new Audio("chordfiles/C4.mp3");
			note3 = new Audio("chordfiles/E4.mp3");
			break;
		case 0: //Am
			note1 = new Audio("chordfiles/A4.mp3");
			note2 = new Audio("chordfiles/C4.mp3");
			note3 = new Audio("chordfiles/E4.mp3");
			break;


	snd1.play();
	snd2.play();
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
