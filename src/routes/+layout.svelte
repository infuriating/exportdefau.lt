<script lang="ts">
	import '../app.css';

	import { FirebaseApp } from 'sveltefire';
	import { firestore } from '$lib/firebase';
</script>

<FirebaseApp {firestore}>
	<div class="bg-black text-white">
		<slot />
	</div>
</FirebaseApp>
