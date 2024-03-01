<script lang="ts">
	import User from '../../components/User.svelte';
	import RiInstagramFill from '~icons/ri/instagram-fill';

	import { collectionStore } from 'sveltefire';
	import { firestore } from '$lib/firebase';
	import { collection, where, query } from 'firebase/firestore';

	const socials = [
		{
			url: 'https://instagram.com/daniaa.ds',
			icon: RiInstagramFill
		}
	];

	export let data;
	let userId: string = '';

	const usersRef = collection(firestore, 'users');
	const q = query(usersRef, where('slug', '==', data.slug));
	const user = collectionStore(firestore, q);

	$: userId = $user[0]?.userId;
</script>

<div class="min-h-screen bg-gradient-to-br from-purple-950/50 from-10% px-8">
	<div
		class="absolute bg-purple-900/25 blur-[100px] h-[75vh] aspect-square rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-0"
	/>
	<User {socials} {userId} />
</div>
