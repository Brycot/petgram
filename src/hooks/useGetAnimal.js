import { useQuery, gql } from "@apollo/client";

const GET_ANIMAL = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const useGetAnimal = (id) => {
  const { loading, data, error } = useQuery(GET_ANIMAL, {
    variables: { id },
  });
  return { loading, data, error };
};
