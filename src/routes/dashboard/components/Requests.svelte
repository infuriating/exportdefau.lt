<script lang="ts">
	import { firestore } from '$lib/firebase';
	import { collectionStore } from 'sveltefire';
	import type { Request } from '$lib/types';
	import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';

	const requests = collectionStore<Request>(firestore, 'requests');

	const declineRequest = async (id: string) => {
		try {
			await deleteDoc(doc(firestore, `requests/${id}`));
		} catch (e) {
			console.error('Error deleting document: ', e);
		}
	};

	const acceptRequest = async (slug: string, userId: string, id: string) => {
		try {
			await addDoc(collection(firestore, 'users'), { slug, userId });
			await deleteDoc(doc(firestore, `requests/${id}`));
		} catch (e) {
			console.error('Error adding document: ', e);
		}
	};
</script>

<div class="w-full px-4 py-2 flex flex-col gap-y-1 items-center">
	{#if requests}
		<h3 class="text-2xl font-semibold leading-none tracking-tight pb-4">Requests</h3>
		<div class="w-full max-h-48 overflow-y-auto">
			{#each $requests as request}
				<div
					class="w-full bg-black/20 rounded-md flex justify-between px-4 py-2 border border-neutral-300/20 items-center"
				>
					<div class="flex gap-x-2 items-center">
						<p class="font-bold">{request.slug}</p>
						<p class="text-[10px]">>></p>
						<p>{request.userId}</p>
					</div>
					<div class="flex gap-x-2">
						<button
							on:click={() => declineRequest(request.id)}
							class="py-1.5 text-sm px-3 rounded-md bg-red-500 hover:bg-red-500/80 transition-all"
						>
							Decline</button
						>
						<button
							on:click={() => acceptRequest(request.slug, request.userId, request.id)}
							class="py-1.5 text-sm px-3 rounded-md bg-green-500 hover:bg-green-500/80 transition-all"
						>
							Accept</button
						>
					</div>
				</div>
			{/each}
		</div>
	{:else}
		<div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
	{/if}
</div>
