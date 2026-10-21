const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const FFMPEG = 'C:\\Users\\shami\\.gemini\\antigravity-ide\\brain\\7e19507c-d57e-46c7-b110-66f675c8a4d3\\scratch\\video-tools\\node_modules\\ffmpeg-static\\ffmpeg.exe';
const WORK_DIR = 'C:\\Users\\shami\\.gemini\\antigravity-ide\\brain\\7e19507c-d57e-46c7-b110-66f675c8a4d3\\scratch\\brag_render';
const SCRATCH = 'C:\\Users\\shami\\.gemini\\antigravity-ide\\brain\\7e19507c-d57e-46c7-b110-66f675c8a4d3\\scratch';
const OUTPUT_MP4 = 'c:\\ReliefLens\\brag-output\\brag.mp4';
const MUSIC = 'c:\\ReliefLens\\brag-output\\composition\\assets\\music\\happy-beats-business-moves-vol-1-by-ende-dot-app.mp3';

console.log('Compiling 20-second cinematic launch video with voiceover and audio...');

// Step 1: Create 4 scene video segments of 5 seconds each
for (let i = 1; i <= 4; i++) {
  const png = path.join(WORK_DIR, `scene${i}.png`);
  const seg = path.join(WORK_DIR, `seg${i}.mp4`);
  
  // Apply a subtle cinematic Ken-Burns slow zoom on each scene
  let zoomFilter = "zoompan=z='min(zoom+0.0006,1.06)':d=150:s=1920x1080:fps=30";
  if (i === 1) zoomFilter = "zoompan=z='min(zoom+0.0008,1.08)':d=150:s=1920x1080:fps=30";
  if (i === 4) zoomFilter = "zoompan=z='min(zoom+0.0004,1.04)':d=150:s=1920x1080:fps=30";

  const cmd = `"${FFMPEG}" -y -loop 1 -t 5 -i "${png}" -vf "${zoomFilter}" -c:v libx264 -t 5 -pix_fmt yuv420p -r 30 "${seg}"`;
  console.log(`Building segment ${i}...`);
  execSync(cmd, { stdio: 'inherit' });
}

// Step 2: Concat segments
const concatTxt = path.join(WORK_DIR, 'concat.txt');
fs.writeFileSync(concatTxt, `file 'seg1.mp4'\nfile 'seg2.mp4'\nfile 'seg3.mp4'\nfile 'seg4.mp4'\n`);

const videoOnly = path.join(WORK_DIR, 'video_visuals.mp4');
const concatCmd = `"${FFMPEG}" -y -f concat -safe 0 -i "${concatTxt}" -c copy "${videoOnly}"`;
console.log('Concatenating 4 scenes...');
execSync(concatCmd, { stdio: 'inherit' });

// Step 3: Mix audio (Background Music + 4 Voiceover tracks)
const vo1 = path.join(SCRATCH, 'vo_scene1.wav');
const vo2 = path.join(SCRATCH, 'vo_scene2.wav');
const vo3 = path.join(SCRATCH, 'vo_scene3.wav');
const vo4 = path.join(SCRATCH, 'vo_scene4.wav');

// Audio mixing filter:
// [1:a] music: volume 0.18, lowpass to keep voice clear
// [2:a] vo1: delay 500ms
// [3:a] vo2: delay 5500ms
// [4:a] vo3: delay 10500ms
// [5:a] vo4: delay 15500ms
const audioFilter = `
[1:a]volume=0.22,atrim=0:20,afade=t=out:st=18.5:d=1.5[bgm];
[2:a]adelay=500|500[v1];
[3:a]adelay=5500|5500[v2];
[4:a]adelay=10500|10500[v3];
[5:a]adelay=15500|15500[v4];
[bgm][v1][v2][v3][v4]amix=inputs=5:duration=first:dropout_transition=2[aout]
`.replace(/\r?\n/g, '');

const finalCmd = `"${FFMPEG}" -y -i "${videoOnly}" -i "${MUSIC}" -i "${vo1}" -i "${vo2}" -i "${vo3}" -i "${vo4}" -filter_complex "${audioFilter}" -map 0:v -map "[aout]" -c:v copy -c:a aac -b:a 192k -t 20 -movflags +faststart "${OUTPUT_MP4}"`;

console.log('Final multiplexing of video, music, and voiceover...');
execSync(finalCmd, { stdio: 'inherit' });

console.log(`Video successfully rendered to ${OUTPUT_MP4}!`);
