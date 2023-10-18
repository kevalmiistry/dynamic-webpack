import { getItemOne, getItemTwo } from "./fn";

const getTotal = () => {
    const i1 = getItemOne();
    const i2 = getItemTwo();
    console.log(i1 + i2);
};

getTotal();
