<script>
	import User from '../../components/User.svelte';
	import RiInstagramFill from '~icons/ri/instagram-fill';

	const socials = [
		{
			url: 'https://instagram.com/daniaa.ds',
			icon: RiInstagramFill
		}
	];
</script>

<div class="min-h-screen bg-gradient-to-br from-purple-950/50 from-10% px-8">
	<div
		class="absolute bg-purple-900/25 blur-[100px] h-[75vh] aspect-square rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-0"
	/>
	<User {socials} userId="785925425825054730" />
</div>
