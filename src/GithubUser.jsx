import useGithubUser from "./useGithubUser";

export default function GithubUser({ username }) {
  const { user, loading, error, refetch } = useGithubUser(username);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
        <button onClick={refetch}>Try Again</button>
      </div>
    );
  }

  if (user) {
    return (
      <div>
        <p>{user.name}</p>
        <p>{user.login}</p>
        <img src={user.avatar_url} alt={user.name} width={200} height={200} />
        <button onClick={refetch}>Refresh Data</button>
      </div>
    );
  }

  return null;
}
