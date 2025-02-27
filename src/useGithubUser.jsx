// Modify the useGithubUser custom hook from the third Custom Hooks exercise to use the useSWR hook to fetch the data of a Github user.
// Modify the useGithubUser hook so that, if the username is null, no request is made.
// Modify the useGithubUser hook so that it returns a function to manually refetch the data when invoked.
// Use SWRConfig to set a default value for the fetcher prop of the useSWR hook.

import useSWR from "swr";

function useGithubUser(username) {
  // useSWR accetta una chiave (URL) e restituisce diversi valori utili(data, error, isLoading, mutate)
  const {
    data: user,
    error,
    isLoading,
    mutate,
  } = useSWR(
    username ? `https://api.github.com/users/${username}` : null
    // Se username è null o vuoto, passa null come chiave
    // Quando la chiave è null, SWR non eseguirà alcuna richiesta
  );

  return {
    user,
    loading: isLoading,
    error: error ? error.message : null,
    refetch: () => mutate(), // Funzione per ricaricare manualmente i dati
    // mutate() forza SWR a rieseguire la fetch
  };
}

export default useGithubUser;
