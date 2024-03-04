<script lang="ts">
	import { signInWithEmailAndPassword } from 'firebase/auth';
	import { auth } from '$lib/firebase';

	let email = '';
	let password = '';
</script>

<div class="flex flex-col space-y-4 p-6">
	<div class="space-y-1.5">
		<h3 class="text-2xl font-semibold leading-none tracking-tight">Add a user</h3>
		<p class="text-sm text-neutral-300">
			You need to be authenticated in order to add a user to the database.
		</p>
		<input
			bind:value={email}
			type="text"
			class="text-black flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm placeholder:text-neutral-300"
			placeholder="Email"
		/>
		<input
			bind:value={password}
			type="password"
			class="text-black flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm placeholder:text-neutral-300"
			placeholder="Password"
		/>
	</div>
	<button
		class="w-full h-10 px-4 py-2 border border-white/40 bg-white/0 hover:bg-white/10 hover:text-accent-foreground rounded-md text-sm font-medium transition-all"
		on:click={() => signInWithEmailAndPassword(auth, email, password)}>Sign In</button
	>
</div>
