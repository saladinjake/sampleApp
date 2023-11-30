import { useMutation, UseMutationResult } from "@tanstack/react-query";



const useSendToAPI = (
  request,
  onSuccess?,
  onError?
): UseMutationResult<unknown, any, any, unknown> => {
  return useMutation(request, {
    onSuccess: (res: any) => {
      if (res.isSuccessful === false || res?.data?.isSuccessful === false) {
        return onError(res?.data);
      }

      onSuccess && onSuccess(res?.data);
    },
    onError: (error: any) => {
      onError && onError(error);
    },
  });
};

export default useSendToAPI;
