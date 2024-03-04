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
	export let socials: { url: string; icon: any }[] = [];
	export let fullHeight: boolean = false;

	let user: DiscordUser;
	let data: DiscordUser['data'];
	let discordUser: DiscordUser['data']['discord_user'];
	let spotify: DiscordUser['data']['spotify'];
	let activities: DiscordUser['data']['activities'];

	let tries = 0;
	let timedOut: boolean = false;

	const refreshUserData = async () => {
		try {
			user = await getUserData(userId);
			data = user.data;
			discordUser = user.data.discord_user;
			spotify = user.data.spotify;
			activities = user.data.activities;
		} catch (error) {
			if (tries < 3) {
				tries++;
				setTimeout(refreshUserData, 2000);
			} else {
				timedOut = true;
			}
		}
	};

	let interval: NodeJS.Timeout;

	onMount(async () => {
		await refreshUserData();
		interval = setInterval(refreshUserData, 15000);
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div class={`flex flex-col items-center justify-center ${fullHeight && 'min-h-screen'}`}>
	<div
		class="w-full md:w-max bg-gradient-to-b from-purple-950/50 to-black p-3 rounded-lg shadow-2xl border border-neutral-300/20"
	>
		{#if user}
			<div
				class="bg-black/15 shadow-inset border border-white/10 backdrop-blur-lg lg:pr-24 px-12 py-6 rounded-md z-20"
			>
				<UserStatus {data} {discordUser} {activities} />
				{#if spotify}
					<Spotify {spotify} />
				{/if}
				{#if activities.filter((activity) => activity.name !== 'Spotify' && activity.name !== 'Custom Status').length > 0}
					<Activities {activities} />
				{/if}
				{#if socials}
					<Socials {socials} />
				{/if}
				<InfsWorld />
			</div>
		{:else}
			<div
				class="flex flex-col items-center justify-center min-w-64 min-h-64 px-8 py-2 shadow-inset bg-black/15 border border-white/10 max-h-96 max-w-96"
			>
				{#if !timedOut}
					<div
						class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"
					></div>
				{/if}
				<p class="text-lg font-bold mt-4">{timedOut ? 'Request timed out.' : 'Loading user...'}</p>
				{#if timedOut}
					<div class="text-neutral-300 space-y-3 mt-4 text-center">
						<p>
							Please make sure the user exists and has joined <span
								class="font-bold text-neutral-100">discord.gg/lanyard</span
							>
						</p>
						<p>
							If you haven't requested your username yet, you can do so by reaching out to <span
								class="font-bold text-neutral-100">@infuriating</span
							> on Discord.
						</p>
					</div>
				{:else}
					<p class="text-neutral-300 mt-4 text-center">
						If it's taking too long, the user might not exist, is not currently in the database or
						hasn't joined <span class="font-bold text-neutral-100">discord.gg/lanyard</span>
					</p>
				{/if}
			</div>
		{/if}
	</div>
</div>
