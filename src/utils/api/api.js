const listApi = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json'

const detailsApi = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/{id}.json'
export const getList = async () => {
  try {
    const response = await fetch(listApi)

    const data = await response.json()

    return data
  } catch (error) {
    console.error('GET_LIST: ', error)
  }
}

export const getDetails = async (id) => {
  try {
    const response = await fetch(detailsApi.replace(/\{id\}/, id))

    const data = await response.json()

    return data
  } catch (error) {
    console.error('GET_DETAILS: ', error)
  }
}