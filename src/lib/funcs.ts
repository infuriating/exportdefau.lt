export const timeSince = (date: number) => {
	const seconds = Math.floor((new Date().getTime() - date) / 1000);
	let interval = seconds / 31536000;

	if (interval > 1) {
		return Math.floor(interval) + ' years';
	}
	interval = seconds / 2592000;
	if (interval > 1) {
		return Math.floor(interval) + ' months';
	}
	interval = seconds / 86400;
	if (interval > 1) {
		return Math.floor(interval) + ' days';
	}
	interval = seconds / 3600;
	if (interval > 1) {
		return Math.floor(interval) + ' hours';
	}
	interval = seconds / 60;
	if (interval > 1) {
		const minutes = Math.floor(interval);
		const remainingSeconds = seconds - minutes * 60;
		return minutes + ' minutes ' + remainingSeconds + ' seconds';
	}
	return Math.floor(seconds) + ' seconds';
};
