<script lang="ts">
	import { assets } from '$app/paths';
	import { timeSince } from '$lib/funcs';
	import type { DiscordUser } from '$lib/types';

	export let activities: DiscordUser['data']['activities'];

	console.log(activities);
</script>

<div class="h-px w-full bg-gray-600 my-4" />
<h1 class="text-2xl font-bold mt-4">Activities</h1>
<div class="flex flex-col gap-y-4">
	{#each activities as activity, index (activity.id)}
		{#if activity.name !== 'Spotify'}
			<div class="flex flex-col md:flex-row gap-x-4 pt-4">
				<!-- svelte-ignore a11y-img-redundant-alt -->
				{#if activity.assets}
					<div class={`relative w-max ${index > 1 ? 'h-24' : 'h-32'}`}>
						{#if activity.assets.large_image}
							<img
								src={`${activity.assets.large_image.includes('mp:external') ? activity.assets.large_image.replace('https/', 'https://').substring(activity.assets.large_image.indexOf('/', activity.assets.large_image.indexOf('/') + 1) + 1) : `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.png`}`}
								alt="Activity Image"
								class="rounded-md max-w-32 object-cover {index > 1
									? 'min-w-24 h-24'
									: 'min-w-32 h-32'}"
							/>
						{/if}
						{#if activity.assets.small_image}
							<img
								src={`${activity.assets.small_image.includes('mp:external') ? activity.assets.small_image.replace('https/', 'https://').substring(activity.assets.small_image.indexOf('/', activity.assets.small_image.indexOf('/') + 1) + 1) : `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.small_image}.png`}`}
								alt="Activity Image"
								class="rounded-full absolute -bottom-2 -right-2 w-12 h-12"
							/>
						{/if}
					</div>
				{/if}
				<div class="flex flex-col justify-end py-2">
					<h1 class="text-xl font-bold">{activity.name}</h1>
					<p class="text-sm text-gray-300">
						{activity.details ? activity.details : ''}
					</p>
					<p class="text-sm text-gray-300 flex items-center">
						{#if activity.emoji}
							<img
								src={`https://cdn.discordapp.com/emojis/${activity.emoji.id}.${activity.emoji.animated ? 'gif' : 'png'}`}
								alt="Emoji"
								class="w-4 h-4 mr-1"
							/>
						{/if}{activity.state ? activity.state : ''}
					</p>
					{#if activity.name !== 'Custom Status'}
						<p class="text-xs text-gray-300">{timeSince(activity.timestamps.start)}</p>
					{/if}
				</div>
			</div>
		{/if}
	{/each}
</div>
