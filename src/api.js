import { API_URL } from "./config";

const getMealById = async (id) => {
    const response = await fetch(API_URL + "loopup.php?i="+id);
    return await response.json();
}

const getAllCategories = async (category) => {
    const response = await fetch(API_URL + 'categories.php');
    return await response.json();
}
const getFilterCategory = async (categoryFilterByName) => {
    const response = await fetch(API_URL + 'filter.php?c=' + categoryFilterByName);
    return await response.json();
}

export {getMealById, getAllCategories , getFilterCategory};