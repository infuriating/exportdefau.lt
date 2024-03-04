<script>
	import User from '../components/User.svelte';
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

<div class="min-h-screen bg-gradient-to-br from-purple-950/40 px-2">
	<!-- <div
		class="fixed bg-green-950/20 blur-[100px] h-[75vh] aspect-square rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-0"
	/> -->
	<div class="min-h-screen flex flex-col justify-center items-center gap-y-6">
		<div class="flex flex-col gap-y-2">
			<div
				class="h-max flex justify-center relative animate-pulse text-neutral-400/50 font-bold text-3xl"
			>
				<h1 class="absolute blur-md">exportdefau.lt</h1>
				<h1>exportdefau.lt</h1>
			</div>
			<div class="h-px w-1/2 ml-[25%] bg-neutral-200/30" />
			<div class="flex flex-col max-w-96 text-center gap-y-2">
				<p>Do you want your discord profile to be on display like the example right below?</p>
				<p>
					Request it by reaching out to{' '}
					<span class="font-bold text-neutral-100">@infuriating</span> on Discord, or by making a request
					right here!
				</p>
			</div>
			<a href="/request">
				<button
					class="w-full bg-purple-950/50 hover:bg-purple-950/70 transition-colors text-neutral-100 py-2 px-4 rounded-md shadow-md cursor-pointer"
				>
					Make a request
				</button>
			</a>
		</div>
		<User {socials} userId="161948341461057536" />
	</div>
</div>
