<script>
	import { onMount } from 'svelte';
	
	let audio;
	let isPlaying = false;
	let currentTime = 0;
	let duration = 0;
	let volume = 0.3;
	let currentTrack = 0;
	
	const playlist = [
		{
			title: "Feathered Indians",
			artist: "Tyler Childers",
			src: "/music/Feathered Indians.mp3",
			cover: "/favicon.png" 
		},
		{
			title: "Nine Ball",
			artist: "Zach Bryan",
			src: "/music/Zach Bryan - Nine Ball.mp3",
			cover: "/favicon.png"
		}
	];
	
	onMount(() => {
		audio = new Audio(playlist[currentTrack].src);
		audio.volume = volume;
		
		audio.addEventListener('loadedmetadata', () => {
			duration = audio.duration;
		});
		
		audio.addEventListener('timeupdate', () => {
			currentTime = audio.currentTime;
		});
		
		audio.addEventListener('ended', () => {
			nextTrack();
		});
	});
	
	function togglePlay() {
		if (isPlaying) {
			audio.pause();
		} else {
			audio.play();
		}
		isPlaying = !isPlaying;
	}
	
	function previousTrack() {
		currentTrack = currentTrack > 0 ? currentTrack - 1 : playlist.length - 1;
		loadTrack();
	}
	
	function nextTrack() {
		currentTrack = currentTrack < playlist.length - 1 ? currentTrack + 1 : 0;
		loadTrack();
	}
	
	function loadTrack() {
		audio.src = playlist[currentTrack].src;
		if (isPlaying) {
			audio.play();
		}
	}
	
	function seekTo(event) {
		const progressBar = event.currentTarget;
		const clickX = event.offsetX;
		const width = progressBar.offsetWidth;
		const newTime = (clickX / width) * duration;
		audio.currentTime = newTime;
	}
	
	function formatTime(time) {
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);
		return `${minutes}:${seconds.toString().padStart(2, '0')}`;
	}
	
	$: progressPercent = duration ? (currentTime / duration) * 100 : 0;
</script>

<section class="hyves-player" aria-label="Muziekspeler">
	<!-- Hyves-style Music Player -->
	<article class="hyves-container">
		
		<!-- Main player area -->
		<main class="hyves-main">
			<!-- Top row: Controls on left, Track info on right -->
			<div class="top-row">
				<!-- Control buttons on the left -->
				<div class="hyves-buttons" role="group" aria-label="Afspeelknoppen">
					<button 
						class="hyves-btn" 
						on:click={previousTrack} 
						title="Vorige track"
						aria-label="Vorige track afspelen"
					>
						◀
					</button>
					
					<button 
						class="hyves-play-btn" 
						on:click={togglePlay} 
						title={isPlaying ? 'Pauze' : 'Afspelen'}
						aria-label={isPlaying ? 'Muziek pauzeren' : 'Muziek afspelen'}
						aria-pressed={isPlaying}
					>
						{isPlaying ? '⏸' : '▶'}
					</button>
					
					<button 
						class="hyves-btn" 
						on:click={nextTrack} 
						title="Volgende track"
						aria-label="Volgende track afspelen"
					>
						▶
					</button>
				</div>

				<!-- Track info on the right -->
				<div class="track-info-right">
					<h3 class="song-title">{playlist[currentTrack].title}</h3>
					<p class="artist-name">{playlist[currentTrack].artist}</p>
				</div>
			</div>
			
			<!-- Bottom row: Volume on left, Time display, Progress bar on right -->
			<div class="bottom-row">
				<!-- Volume control on the left -->
				<div class="volume-section" role="group" aria-label="Volume instelling">
					<span class="volume-label" aria-hidden="true">♫</span>
					<label for="volume-slider" class="visually-hidden">Volume</label>
					<input 
						id="volume-slider"
						type="range" 
						min="0" 
						max="1" 
						step="0.01" 
						bind:value={volume}
						on:input={() => audio.volume = volume}
						class="hyves-volume"
						aria-label="Volume: {Math.round(volume * 100)}%"
					/>
				</div>

				<!-- Time display next to progress bar -->
				<time class="time-info" aria-live="polite">
					{formatTime(currentTime)} / {formatTime(duration)}
				</time>

				<!-- Progress bar on the right -->
				<div class="progress-section">
					<button 
						class="hyves-progress-bar" 
						on:click={seekTo}
						aria-label="Voortgang: {Math.round(progressPercent)}% - klik om naar positie te springen"
						role="slider"
						aria-valuemin="0"
						aria-valuemax="100"
						aria-valuenow={Math.round(progressPercent)}
					>
						<div class="hyves-progress-fill" style="width: {progressPercent}%" aria-hidden="true"></div>
					</button>
				</div>
			</div>
		</main>
		
		<footer class="hyves-footer">
			<button class="hyves-link" aria-label="Klik hier om alle liedjes te bekijken"> Bekijk alle liedjes ► </button>
		</footer>
	</article>
</section>

<style>
	.visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
	.hyves-player {
		margin: 1rem auto;
		font-family: Arial, sans-serif;
		font-size: 11px;
	}
	
	.hyves-container {
		background: #ffffff;
		border: 1px solid #cccccc;
		border-radius: 5px;
		overflow: hidden;
		box-shadow: 0 2px 5px rgba(0,0,0,0.1);
		width: 100%;
	}
	
	.hyves-main {
		padding: 8px;
		background: #f8f8f8;
	}
	
	.top-row {
		display: flex;
		gap: 10px;
		margin-bottom: 8px;
		background: white;
		padding: 6px;
		border: 1px solid #ddd;
		border-radius: 3px;
		background: #e0dcdc;
		background: linear-gradient(180deg,rgba(224, 220, 220, 1) 0%, rgba(237, 237, 237, 1) 19%, rgba(184, 182, 183, 1) 58%, rgba(143, 143, 143, 1) 96%);
	}
	
	.bottom-row {
		display: flex;
		align-items: center;
		gap: 12px;
		background: white;
		padding: 6px;
		border: 1px solid #ddd;
		border-radius: 3px;
	}
	
	.track-info-right {
		flex: 1;
		min-width: 0;
		text-align: left;
		background: black;
		border-radius: 10px;
		padding: .5em;
	}
	
	.song-title {
		font-weight: bold;
		color: white;
		font-size: 11px;
		margin: 0 0 2px 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		line-height: 1.2;
	}
	
	.artist-name {
		color: white;
		font-size: 10px;
		margin: 0 0 3px 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		line-height: 1.2;
	}
	
	.time-info {
		color: #999;
		font-size: 9px;
		font-family: monospace;
	}
	
	.hyves-buttons {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 4px;
		flex-shrink: 0;
	}
	
	.progress-section {
		flex: 1;
		min-width: 0;
	}
	
	.volume-section {
		display: flex;
		align-items: center;
		gap: 4px;
		flex-shrink: 0;
		min-width: 80px;
	}
	
	.hyves-progress-bar {
		width: 100%;
		height: 6px;
		background: #e0e0e0;
		border: 1px inset #ccc;
		cursor: pointer;
		position: relative;
		padding: 0;
		display: block;
	}
	
	.hyves-progress-bar:focus {
		outline: 2px solid #0066cc;
		outline-offset: 1px;
	}
	
	.hyves-progress-fill {
		height: 100%;
		background: linear-gradient(to right, #0066cc, #0080ff);
		transition: width 0.1s ease;
	}
	
	.hyves-btn, .hyves-play-btn {
		height: 2rem;
		width: 2rem;
		color: #333;
		cursor: pointer;
		padding: 0;
		font-family: Arial, sans-serif;
		transition: all 0.1s ease;
		border-radius: 50%;
	}
	
	.hyves-btn:hover, .hyves-play-btn:hover {
		background: linear-gradient(to bottom, #f8f8f8, #e0e0e0);
	}
	
	.hyves-btn:active, .hyves-play-btn:active {
		border-style: inset;
		background: linear-gradient(to bottom, #d8d8d8, #f0f0f0);
	}
	
	.hyves-play-btn {
		font-size: 18px;
		font-weight: bold;
		color: #0066cc;
	}
	
	.volume-label {
		color: #666;
		font-size: 10px;
	}
	
	.hyves-volume {
		width: 60px;
		height: 4px;
		background: #e0e0e0;
		border: 1px inset #ccc;
		outline: none;
		cursor: pointer;
	}
	
	.hyves-volume::-webkit-slider-thumb {
		appearance: none;
		width: 8px;
		height: 12px;
		background: linear-gradient(to bottom, #f0f0f0, #d0d0d0);
		border: 1px outset #ccc;
		cursor: pointer;
	}
	
	.hyves-footer {
		background: #f0f0f0;
		border-top: 1px solid #ddd;
		padding: 3px 8px;
		text-align: right;
	}
	
	.hyves-link {
		color: #0066cc;
		font-size: 10px;
		cursor: pointer;
		text-decoration: none;
		background: none;
		border: none;
		padding: 0;
		font-family: Arial, sans-serif;
	}
	
	.hyves-link:hover {
		text-decoration: underline;
	}
	
	.hyves-link:focus {
		outline: 2px solid #0066cc;
		outline-offset: 1px;
	}
	
	/* Responsive adjustments */
	@media (max-width: 400px) {
		.hyves-player {
			max-width: 100%;
			margin: 1rem;
		}
		
		.top-row {
			flex-direction: column;
			align-items: center;
			text-align: center;
			gap: 8px;
		}
		
		.bottom-row {
			flex-direction: column;
			gap: 8px;
		}
		
		.progress-section,
		.volume-section {
			width: 100%;
		}
		
		.hyves-volume {
			width: 100px;
		}
	}
</style>
