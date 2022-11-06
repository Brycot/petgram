import { gql, useMutation } from "@apollo/client";

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

export const useRegisterMutation = () => {
  const [
    registerMutation,
    { loading: isloadingRegister, error: isErrorRegister },
  ] = useMutation(REGISTER);

  return { registerMutation, isloadingRegister, isErrorRegister };
};
