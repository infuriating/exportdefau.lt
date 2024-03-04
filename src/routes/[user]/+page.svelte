<script lang="ts">
	import User from '../../components/User.svelte';

	import { collectionStore } from 'sveltefire';
	import { firestore } from '$lib/firebase';
	import { collection, where, query } from 'firebase/firestore';

	export let data;
	let userId: string = '';

	const usersRef = collection(firestore, 'users');
	const q = query(usersRef, where('slug', '==', data.slug));
	const user = collectionStore(firestore, q);

	$: userId = $user[0]?.userId;
</script>

<div class="min-h-screen bg-gradient-to-br from-purple-950/40 px-2">
	<div
		class="fixed bg-green-950/20 blur-[100px] h-[75vh] aspect-square rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-0"
	/>
	<User fullHeight {userId} />
</div>
