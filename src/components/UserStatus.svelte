<script lang="ts">
	import type { DiscordUser } from '$lib/types';

	export let data: DiscordUser['data'];
	export let discordUser: DiscordUser['data']['discord_user'];
	export let activities: DiscordUser['data']['activities'];

	activities = activities.filter((activity) => activity.name === 'Custom Status');
	const statusOptions: Record<string, string> = {
		online: 'bg-green-500',
		dnd: 'bg-red-500',
		idle: 'bg-yellow-500',
		offline: 'bg-gray-500'
	};

	const statusOptionsBorder: Record<string, string> = {
		online: 'border-green-500',
		dnd: 'border-red-500',
		idle: 'border-yellow-500',
		offline: 'border-gray-500'
	};
</script>

<div class="flex flex-col gap-x-6 items-center h-max lg:flex-row min-w-60 lg:min-w-72">
	<div class="h-32 relative">
		<img
			src={`https://cdn.discordapp.com/avatars/${discordUser.id}/${discordUser.avatar}.png`}
			alt="User Avatar"
			class={`rounded-full w-32 h-32 border-4 ${statusOptionsBorder[data.discord_status]}`}
		/>
		{#if discordUser.avatar_decoration_data}
			<img
				src={`https://cdn.discordapp.com/avatar-decoration-presets/${discordUser.avatar_decoration_data.asset}.png`}
				alt="User Avatar"
				class="rounded-full scale-125 top-0 absolute"
			/>
		{/if}
	</div>
	<div class="flex items-center gap-y-1 flex-col lg:items-start">
		<div class="flex items-center flex-col lg:items-start">
			<h1 class="lg:w-full text-3xl font-bold mt-4">{discordUser.global_name}</h1>
			<h1 class="text-sm text-neutral-300 font-semibold">@{discordUser.username}</h1>
		</div>
		<div
			class="flex gap-x-1.5 text-2xs font-medium items-center px-1.5 py-1 bg-black/40 w-max rounded-md"
		>
			<div class={`h-1.5 w-1.5 rounded-full ${statusOptions[data.discord_status]}`}></div>
			<p>
				{data.discord_status === 'dnd'
					? 'Do Not Disturb'
					: data.discord_status.charAt(0).toUpperCase() + data.discord_status.slice(1)}
			</p>
		</div>
		{#if activities[0]}
			<p
				class="text-sm text-gray-300 flex items-center border border-neutral-300/20 py-px px-0.5 rounded-md"
			>
				{#if activities[0].emoji}
					<img
						src={`https://cdn.discordapp.com/emojis/${activities[0].emoji.id}.${activities[0].emoji.animated ? 'gif' : 'png'}`}
						alt="Emoji"
						class="w-4 h-4 mr-1"
					/>
				{/if}
				{activities[0].state ? activities[0].state : ''}
			</p>
		{/if}
	</div>
</div>
