import { useMemo } from "react";
import useApiResult from "./useApiResult";
import { getFeatureList } from "./requests";

const useFeatureList = () => {

  const request = useMemo(() => getFeatureList(), []);

  return useApiResult(request);

};

export default useFeatureList;
