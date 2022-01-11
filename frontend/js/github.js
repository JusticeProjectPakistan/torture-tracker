import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";
import {
  createTokenAuth,
} from "https://cdn.skypack.dev/@octokit/auth-token";


async function updateGithub(cfg, data) {
  let octokit = new Octokit();

  // let owner = 'justiceprojectpakistan';
  // let repo = 'torture-tracker';
  // let path = "frontend/js/aggregates.js"
  let { githubToken, owner, repo, path } = cfg;

  const auth = createTokenAuth(githubToken);
  const {
    token,
    tokenType
  } = await auth();


  const { data: { sha } } = await octokit.request('GET /repos/{owner}/{repo}/contents/{file_path}', {
    owner,
    repo,
    file_path: path
  });

  $('#setup-modal .modal-footer').text('Updating...');
  try {
    const {
      stdout
    } = await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
      headers: {
        authorization: "token " + token,
      },
      owner,
      repo,
      path,
      sha,
      message: 'Updating aggregates: ' + new Date(),
      content: btoa('export let aggregates = "' + escape(JSON.stringify(data)) + '"')
    })
    $('#setup-modal .modal-footer').text('Update successful');
  } catch (error) {
    $('#setup-modal .modal-footer').text('Update failed:' + error.message);
    console.log(error.message);
  }

}

export { updateGithub as default }