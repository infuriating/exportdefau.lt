<script lang="ts">
	import { firestore } from '$lib/firebase';
	import { collection, addDoc } from 'firebase/firestore';

	let slug = '';
	let userId = '';

	const addNewUser = async () => {
		try {
			const docRef = await addDoc(collection(firestore, 'users'), {
				slug,
				userId
			});
			console.log('Document written with ID: ', docRef.id);

			slug = '';
			userId = '';
		} catch (e) {
			console.error('Error adding document: ', e);
		}
	};
</script>

<div class="min-w-96">
	<div class="flex flex-col space-y-1.5 p-6">
		<h3 class="text-2xl font-semibold leading-none tracking-tight">Add a user</h3>
		<p class="text-sm text-neutral-300">
			Add a user to the database by entering their Discord ID and username.
		</p>
	</div>
	<div class="p-6 pt-0">
		<form on:submit|preventDefault={addNewUser} class="flex flex-col gap-y-2">
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
					Add user
				</button>
			</div>
		</form>
	</div>
</div>
