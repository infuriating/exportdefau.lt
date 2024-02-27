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
	<div
		class="fixed bg-green-950/20 blur-[100px] h-[75vh] aspect-square rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-0"
	/>
	<User {socials} userId="161948341461057536" />
</div>
