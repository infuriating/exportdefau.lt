<script lang="ts">
	export let socials: { url: string; icon: any }[];
</script>

<div class="h-px w-full bg-gray-600 my-4" />
<div class="flex gap-x-2 items-center">
	{#each socials as { url, icon }, i}
		<a href={url} target="_blank" rel="noopener noreferrer" class="flex gap-x-2 items-center">
			<svelte:component this={icon} class="w-8 h-8 hover:scale-110 transition-all" />
		</a>
	{/each}
</div>
