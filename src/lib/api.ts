import type { DiscordUser } from './types';

export async function getUserData(userId: string): Promise<DiscordUser> {
	const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	});

	if (response.ok) {
		return await response.json();
	} else {
		throw new Error('API call failed');
	}
}
