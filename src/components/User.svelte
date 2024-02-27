<script lang="ts">
	import { getUserData } from '$lib/api';
	import type { DiscordUser } from '$lib/types';
	import { onMount, onDestroy } from 'svelte';
	import UserStatus from './UserStatus.svelte';
	import Spotify from './Spotify.svelte';
	import Socials from './Socials.svelte';
	import Activities from './Activities.svelte';
	import InfsWorld from './InfsWorld.svelte';

	export let userId: string;
	export let socials: { url: string; icon: any }[];

	let user: DiscordUser;
	let data: DiscordUser['data'];
	let discordUser: DiscordUser['data']['discord_user'];
	let spotify: DiscordUser['data']['spotify'];
	let activities: DiscordUser['data']['activities'];

	const refreshUserData = async () => {
		user = await getUserData(userId);
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

<div class="flex flex-col items-center justify-center min-h-screen">
	<div
		class="w-full md:w-max bg-gradient-to-b from-purple-950/50 to-black p-3 rounded-lg shadow-2xl border border-neutral-300/20"
	>
		{#if user}
			<div
				class="bg-black/15 shadow-inset border border-white/10 backdrop-blur-lg lg:pr-24 px-12 py-6 rounded-md z-20"
			>
				<UserStatus {data} {discordUser} />
				{#if spotify}
					<Spotify {spotify} />
				{/if}
				{#if activities && activities.length > 0 && activities[0].name !== 'Spotify'}
					<Activities {activities} />
				{/if}
				<Socials {socials} />
				<InfsWorld />
			</div>
		{/if}
	</div>
</div>
