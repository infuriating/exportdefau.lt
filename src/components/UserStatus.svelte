<script lang="ts">
	import type { DiscordUser } from '$lib/types';

	export let data: DiscordUser['data'];
	export let discordUser: DiscordUser['data']['discord_user'];

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

<div class="flex flex-col gap-x-6 items-center h-max lg:flex-row">
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
	<div class="flex items-center flex-col gap-y-1 lg:items-start">
		<h1 class="text-3xl font-bold mt-4">@{discordUser.username}</h1>
		<div class="flex gap-x-1.5 text-xs items-center px-1.5 py-1 bg-black/40 w-max rounded-md">
			<div class={`h-2 w-2 rounded-full ${statusOptions[data.discord_status]}`}></div>
			<p>
				{data.discord_status === 'dnd'
					? 'Do Not Disturb'
					: data.discord_status.charAt(0).toUpperCase() + data.discord_status.slice(1)}
			</p>
		</div>
	</div>
</div>
