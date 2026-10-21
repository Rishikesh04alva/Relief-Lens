const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const FFMPEG = 'C:\\Users\\shami\\.gemini\\antigravity-ide\\brain\\7e19507c-d57e-46c7-b110-66f675c8a4d3\\scratch\\video-tools\\node_modules\\ffmpeg-static\\ffmpeg.exe';
const WORK_DIR = 'C:\\Users\\shami\\.gemini\\antigravity-ide\\brain\\7e19507c-d57e-46c7-b110-66f675c8a4d3\\scratch\\brag_series_a';
const OUT_DIR = 'c:\\ReliefLens\\brag-output-series-a-2016';
const MUSIC = 'c:\\ReliefLens\\.agents\\skills\\brag\\assets\\music\\happy-beats-business-moves-vol-10-by-ende-dot-app.mp3';

console.log('Compiling 18-second 2016 Series A launch video with high-energy startup music and founder voiceover...');

// Step 1: Create 4 scene video segments of 4.5 seconds each (135 frames at 30fps)
for (let i = 1; i <= 4; i++) {
  const png = path.join(WORK_DIR, `scene${i}.png`);
  const seg = path.join(WORK_DIR, `seg${i}.mp4`);

  let zoomFilter = "zoompan=z='min(zoom+0.0006,1.06)':d=135:s=1920x1080:fps=30";
  if (i === 1) zoomFilter = "zoompan=z='min(zoom+0.0008,1.08)':d=135:s=1920x1080:fps=30";
  if (i === 3) zoomFilter = "zoompan=z='min(zoom+0.0007,1.07)':d=135:s=1920x1080:fps=30";
  if (i === 4) zoomFilter = "zoompan=z='min(zoom+0.0004,1.04)':d=135:s=1920x1080:fps=30";

  const cmd = `"${FFMPEG}" -y -loop 1 -t 4.5 -i "${png}" -vf "${zoomFilter}" -c:v libx264 -t 4.5 -pix_fmt yuv420p -r 30 "${seg}"`;
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
const vo1 = path.join(WORK_DIR, 'vo_sa1.wav');
const vo2 = path.join(WORK_DIR, 'vo_sa2.wav');
const vo3 = path.join(WORK_DIR, 'vo_sa3.wav');
const vo4 = path.join(WORK_DIR, 'vo_sa4.wav');

// Audio mixing filter:
// 4 scenes x 4.5s = 18.0s total
const audioFilter = `
[1:a]volume=0.22,atrim=0:18,afade=t=out:st=16.8:d=1.2[bgm];
[2:a]adelay=350|350[v1];
[3:a]adelay=4750|4750[v2];
[4:a]adelay=9250|9250[v3];
[5:a]adelay=13750|13750[v4];
[bgm][v1][v2][v3][v4]amix=inputs=5:duration=first:dropout_transition=2[aout]
`.replace(/\r?\n/g, '');

const tempOut = path.join(WORK_DIR, 'raw_brag.mp4');
const finalCmd = `"${FFMPEG}" -y -i "${videoOnly}" -i "${MUSIC}" -i "${vo1}" -i "${vo2}" -i "${vo3}" -i "${vo4}" -filter_complex "${audioFilter}" -map 0:v -map "[aout]" -c:v copy -c:a aac -b:a 192k -t 18 -movflags +faststart "${tempOut}"`;

console.log('Multiplexing video and audio tracks...');
execSync(finalCmd, { stdio: 'inherit' });

// Step 4: Pick best poster frame (scene1) as brag.jpg and bake as frame 0
const posterJpg = path.join(OUT_DIR, 'brag.jpg');
const scene1Png = path.join(WORK_DIR, 'scene1.png');
execSync(`"${FFMPEG}" -y -i "${scene1Png}" -q:v 2 "${posterJpg}"`);

const finalOutput = path.join(OUT_DIR, 'brag.mp4');
const rootOutput = 'c:\\ReliefLens\\ReliefLens_Series_A_2016.mp4';

// Bake frame 0 overlay
const bakeCmd = `"${FFMPEG}" -y -i "${tempOut}" -i "${posterJpg}" -filter_complex "[0:v][1:v]overlay=0:0:enable='eq(n,0)'[v]" -map "[v]" -map "0:a?" -c:v libx264 -crf 18 -pix_fmt yuv420p -c:a copy -movflags +faststart "${finalOutput}"`;
console.log('Baking poster frame into Frame 0...');
execSync(bakeCmd, { stdio: 'inherit' });

// Copy directly to project root for instant 1-click access
fs.copyFileSync(finalOutput, rootOutput);
console.log(`Video ready at:\n  -> ${finalOutput}\n  -> ${rootOutput}`);
