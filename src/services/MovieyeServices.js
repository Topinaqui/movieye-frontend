import API from "../API/API";

export const search = function search(query) {
  if (!query)
    throw new Error(`[MovieyeServices] search invoked with query ${query}`);

  return makeSearchRequest(query);
};

export const details = function details(id) {
  if (!id) throw new Error(`[MovieyeServices] details invoked with id ${id}`);

  return makeDetailRequest(id);
};

async function makeSearchRequest(query) {
  try {
    let form = new FormData();
    form.set("query", query);

    let { data } = await API.post(`/search`, form);

    return data;
  } catch (error) {
    console.error(error);
  }

  return { empty: true };
}

async function makeDetailRequest(id) {
  try {
    let form = new FormData();
    form.set("id", id);

    let { data } = await API.post(`/details`, form);

    return data;
  } catch (error) {
    console.error(error);
  }

  return { impty: true };
}
