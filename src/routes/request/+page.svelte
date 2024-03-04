<script lang="ts">
	import { firestore } from '$lib/firebase';
	import { addDoc, collection } from 'firebase/firestore';

	let slug = '';
	let userId = '';

	const handleRequest = async () => {
		try {
			const docRef = await addDoc(collection(firestore, 'requests'), {
				slug,
				userId
			});
			console.log('Document written with ID: ', docRef.id);

			slug = '';
			userId = '';
			window.location.href = '/thanks';
		} catch (e) {
			console.error('Error adding document: ', e);
		}
	};
</script>

<div class="min-h-screen bg-gradient-to-br from-purple-950/40 px-2">
	<div class="min-h-screen flex justify-center items-center">
		<div
			class="rounded-lg border border-white/20 bg-purple-900/20 text-neutral-100 shadow-sm max-w-lg"
		>
			<div class="flex flex-col space-y-1.5 p-6">
				<h3 class="text-2xl font-semibold leading-none tracking-tight">Make a request</h3>
				<div class="space-y-0.5">
					<p class="text-sm text-neutral-300">Request your discord profile to be on display here</p>
				</div>
			</div>
			<div class="p-6 pt-0">
				<form on:submit|preventDefault={handleRequest} class="flex flex-col gap-y-2">
					<div>
						<label for="slug" class="text-sm font-medium leading-none">Preferred username</label>
						<input
							bind:value={slug}
							class="text-black flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm placeholder:text-neutral-300"
							type="text"
							id="slug"
							name="slug"
							placeholder="inf"
							required
						/>
					</div>
					<div>
						<label for="userId" class="text-sm font-medium leading-none">Discord ID</label>
						<input
							bind:value={userId}
							class="text-black flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm placeholder:text-neutral-300"
							type="text"
							id="userId"
							name="userId"
							placeholder="1234567890"
							required
						/>
					</div>
					<div class="flex items-center pt-4">
						<button
							type="submit"
							class="w-full h-10 px-4 py-2 border border-white/40 bg-white/0 hover:bg-white/10 hover:text-accent-foreground rounded-md text-sm font-medium transition-all"
						>
							Make a request
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
