import { useQuery } from "react-query";

interface IQueryReturn<D extends object> {
  error: unknown;
  data: D | undefined;
  loading: boolean;
}

function useQueryHandler<D extends object> (id: string, slug: string): IQueryReturn<D> {
  const ROOT_URL = process.env.REACT_APP_API_ROUTE;

  const fetchQuery = async (slug: string) => {
    const result = await fetch(`${ROOT_URL}${slug}`)
    return await result.json();
  }

  const {
    error,
    data,
    isFetching: loading
  } = useQuery(
    id,
    () => fetchQuery(slug),
    {
      enabled: !!id
    }
  )

  return {
    error,
    data,
    loading
  }
}

export default useQueryHandler;