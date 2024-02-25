<script lang="ts">
	import RiLinkedinFill from '~icons/ri/linkedin-fill';
	import RiInstagramFill from '~icons/ri/instagram-fill';
	import RiGithubFill from '~icons/ri/github-fill';

	const socials = [
		{
			url: 'https://linkedin.com/in/lucakuiper',
			icon: RiLinkedinFill
		},
		{
			url: 'https://instagram.com/infs.world',
			icon: RiInstagramFill
		},
		{
			url: 'https://github.com/infuriating',
			icon: RiGithubFill
		}
	];
</script>

<div class="h-px w-full bg-gray-600 my-4" />
<div class="flex gap-x-2 items-center">
	{#each socials as { url, icon }, i}
		<a href={url} target="_blank" rel="noopener noreferrer" class="flex gap-x-2 items-center">
			<svelte:component this={icon} class="w-8 h-8 hover:scale-110 transition-all" />
		</a>
	{/each}
</div>

<div class="bg-black/40 rounded-md w-max">
	<a target="_blank" href="https://infs.world">
		<p
			class="px-2 py-1 text-center my-2 font-bold w-max bg-gradient-to-r from-cyan-500 to-fuchsia-500 bg-clip-text text-transparent"
		>
			infs.world
		</p>
	</a>
</div>
