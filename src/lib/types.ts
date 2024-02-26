export type DiscordUser = {
	data: {
		kv: Record<string, unknown>;
		spotify: {
			track_id: string;
			timestamps: {
				start: number;
				end: number;
			};
			album: string;
			album_art_url: string;
			artist: string;
			song: string;
		};
		discord_user: {
			id: string;
			username: string;
			avatar: string;
			discriminator: string;
			bot: boolean;
			global_name: string;
			avatar_decoration_data: {
				asset: string;
				sku_id: number;
			};
			display_name: string;
			public_flags: number;
		};
		activities: Array<{
			application_id: string;
			flags: number;
			id: string;
			name: string;
			type: number;
			state: string;
			session_id: string;
			details: string;
			timestamps: {
				start: number;
				end: number;
			};
			assets: {
				large_image: string;
				large_text: string;
			};
			sync_id: string;
			created_at: number;
			party: {
				id: string;
			};
		}>;
		discord_status: string;
		active_on_discord_web: boolean;
		active_on_discord_desktop: boolean;
		active_on_discord_mobile: boolean;
		listening_to_spotify: boolean;
	};
	success: boolean;
};
