import data from '../data/data';

//первичное состояние (список диагнозов)
export default function (state, action){
    return {
        filteredDiagnoses: [],
        diagnoses: data,
        currentDiagnose: {
            id: null,
            diagnosis: "",
            description: ""
        }
     } 
}
