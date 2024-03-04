<script lang="ts">
	import { SignedIn, SignedOut } from 'sveltefire';
	import AddUserForm from './components/AddUserForm.svelte';
	import Requests from './components/Requests.svelte';
	import SignInForm from './components/SignInForm.svelte';
</script>

<div
	class="min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-950/40 px-2"
>
	<div
		class="rounded-lg border border-white/20 bg-purple-900/20 text-neutral-100 shadow-sm max-w-lg"
	>
		<SignedIn>
			<div class="flex flex-col">
				<AddUserForm />
				<Requests />
			</div>
		</SignedIn>
		<SignedOut let:auth>
			<SignInForm />
		</SignedOut>
	</div>
</div>
