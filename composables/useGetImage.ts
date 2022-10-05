export const useGetImage = async (path: string) => {
	const supabase = useSupabaseClient();

	try {
		const { data, error } = supabase.storage.from('media').getPublicUrl(path);
		return data.publicURL;
	} catch (error) {
		console.log(error);
	}
};
