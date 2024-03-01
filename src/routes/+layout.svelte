<script lang="ts">
	import '../app.css';

	import { FirebaseApp } from 'sveltefire';
	import { firestore, auth } from '$lib/firebase';
</script>

<FirebaseApp {auth} {firestore}>
	<div class="bg-black text-white">
		<slot />
	</div>
</FirebaseApp>
