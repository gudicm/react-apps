import { useState} from 'react';

const useValue = () => {
  const [value, setValue] = useState({});

//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const seedData = params.get('seedData') == 'true';
//     const noValue = Object.keys(value).length == 0;
//     const hasSeedData = window.seedData !== undefined;

//     if (seedData && noValue && hasSeedData) {
//       setValue(JSON.parse(window.seedData));
//     }
//   }, [window.location.search]);

  const updateValue = (index, val) => {
    setValue({ ...value, [index]: val });
  };

  return { value, updateValue, setValue };
};

export default useValue;
