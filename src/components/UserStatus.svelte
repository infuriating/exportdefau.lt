<script lang="ts">
	import type { DiscordUser } from '$lib/types';

	export let data: DiscordUser['data'];
	export let discordUser: DiscordUser['data']['discord_user'];
</script>

<div class="flex gap-x-6 items-center h-max">
	<div class="h-32 relative">
		<img
			src={`https://cdn.discordapp.com/avatars/${discordUser.id}/${discordUser.avatar}.png`}
			alt="User Avatar"
			class="rounded-full w-32 h-32 border-4 border-black"
		/>
		<div
			class={`h-8 w-8 rounded-full absolute bottom-0.5 right-0.5 border-4 border-black ${data.discord_status === 'online' ? 'bg-green-500' : data.discord_status === 'dnd' ? 'bg-red-500' : data.discord_status === 'idle' ? 'bg-yellow-500' : 'bg-gray-500'}`}
		/>
	</div>
	<div class="flex flex-col gap-y-1">
		<h1 class="text-3xl font-bold mt-4">@{discordUser.username}</h1>
		<div class="flex gap-x-1.5 text-xs items-center px-1.5 py-1 bg-black/40 w-max rounded-md">
			<div
				class={`h-2 w-2 rounded-full ${data.discord_status === 'online' ? 'bg-green-500' : data.discord_status === 'dnd' ? 'bg-red-500' : data.discord_status === 'idle' ? 'bg-yellow-500' : 'bg-gray-500'}`}
			></div>
			<p>
				{data.discord_status === 'dnd'
					? 'Do Not Disturb'
					: data.discord_status.charAt(0).toUpperCase() + data.discord_status.slice(1)}
			</p>
		</div>
	</div>
</div>
