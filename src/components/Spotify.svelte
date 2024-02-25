<script lang="ts">
	import type { DiscordUser } from '$lib/types';

	export let spotify: DiscordUser['data']['spotify'];
</script>

<div class="h-px w-full bg-gray-600 my-4" />
<h1 class="text-2xl font-bold mt-4">Listening to Spotify</h1>
<div class="flex gap-x-4 pt-4">
	<img src={spotify.album_art_url} alt="Album Art" class="rounded-md w-32 h-32" />
	<div class="flex flex-col gap-y-1 justify-end py-2">
		<h1 class="text-xl font-bold">{spotify.song}</h1>
		<p class="text-sm text-gray-300">
			by <span class="text-white font-medium">{spotify.artist.replaceAll(';', ',')}</span>
		</p>
		<p class="text-sm text-gray-300">
			on <span class="text-white font-medium">{spotify.album}</span>
		</p>
	</div>
</div>
