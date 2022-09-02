import { baseUrl} from '/Projeto-fetch-github-api/src/scripts/variables.js'

async function getUser(userName) {
	const response = await fetch(`${baseUrl}/${userName}`);
	return await response.json();
}

export{getUser}