let apiService = () => {
  fetch("http://localhost:3000/personInfo").then((response) =>
    response.json().then((data) => console.log(data))
  );
};
export default apiService;

/*export default class ApiServiceLoginIn {
  _apiBase = "https://conduit.productionready.io/api";
  //_baseImageUrl = 'https://starwars-visualguide.com/assets/img'

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }
    return await res.json();
  };

  /* getPersonImage = ({ id }) => {
    return `${this._baseImageUrl}/characters/${id}.jpg`;
  };

  getAllUsers = async () => {
    const res = await this.getResource(`/users/login`);
    return res.results.map(this._transformPerson);
  };

  /* getUser = async (id) => {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  }; 

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  _personInfo = (person) => {
    return {
      id: this._extractId(person),
      email: person.email,
      password: person.password,
    };
  };
} */
