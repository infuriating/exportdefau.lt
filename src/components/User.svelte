<script lang="ts">
	import { getUserData } from '$lib/api';
	import type { DiscordUser } from '$lib/types';
	import { onMount, onDestroy } from 'svelte';
	import UserStatus from './UserStatus.svelte';
	import Spotify from './Spotify.svelte';
	import Socials from './Socials.svelte';
	import Activities from './Activities.svelte';

	let user: DiscordUser;
	let data: DiscordUser['data'];
	let discordUser: DiscordUser['data']['discord_user'];
	let spotify: DiscordUser['data']['spotify'];
	let activities: DiscordUser['data']['activities'];

	const refreshUserData = async () => {
		user = await getUserData('161948341461057536');
		data = user.data;
		discordUser = user.data.discord_user;
		spotify = user.data.spotify;
		activities = user.data.activities;
	};

	onMount(async () => {
		await refreshUserData();
		const interval = setInterval(refreshUserData, 15000);

		onDestroy(() => {
			clearInterval(interval);
		});
	});
</script>

<div class="flex flex-col items-center justify-center h-screen">
	{#if user}
		<div
			class="bg-purple-950/25 border border-white/15 shadow-2xl backdrop-blur-lg pr-24 pl-12 py-6 rounded-md z-20"
		>
			<UserStatus {data} {discordUser} />
			{#if spotify}
				<Spotify {spotify} />
			{/if}
			{#if activities && activities.length > 0}
				<Activities {activities} />
			{/if}
			<Socials />
		</div>
	{/if}
</div>
