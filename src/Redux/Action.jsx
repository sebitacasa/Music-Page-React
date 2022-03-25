export const CREATE_HOUSE = 'CREATE_HOUSE'

let formId = 3
export const createHouse = (data) => {
    data.id = ++ formId

    return {
        type: CREATE_HOUSE,
        payload: data
    }
}