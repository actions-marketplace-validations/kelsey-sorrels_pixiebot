const { inspect } = require("util");
const core = require("@actions/core");
const github = require("@actions/github");

function getSha() {
  if (github.context.eventName == "pull_request") {
    return github.context.payload.pull_request.head.sha;
  } else {
    return github.context.sha;
  }
}

 const urls = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/RWS_Tarot_00_Fool.jpg/69px-RWS_Tarot_00_Fool.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/RWS_Tarot_01_Magician.jpg/68px-RWS_Tarot_01_Magician.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/RW…t_02_High_Priestess.jpg/69px-RWS_Tarot_02_High_Priestess.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/RWS_Tarot_03_Empress.jpg/69px-RWS_Tarot_03_Empress.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/RWS_Tarot_04_Emperor.jpg/70px-RWS_Tarot_04_Emperor.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/RWS_Tarot_05_Hierophant.jpg/68px-RWS_Tarot_05_Hierophant.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/TheLovers.jpg/69px-TheLovers.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/RWS_Tarot_07_Chariot.jpg/68px-RWS_Tarot_07_Chariot.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/RWS_Tarot_08_Strength.jpg/66px-RWS_Tarot_08_Strength.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/RWS_Tarot_09_Hermit.jpg/69px-RWS_Tarot_09_Hermit.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/RW…_Wheel_of_Fortune.jpg/69px-RWS_Tarot_10_Wheel_of_Fortune.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/RWS_Tarot_11_Justice.jpg/69px-RWS_Tarot_11_Justice.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/RWS_Tarot_12_Hanged_Man.jpg/68px-RWS_Tarot_12_Hanged_Man.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/RWS_Tarot_13_Death.jpg/68px-RWS_Tarot_13_Death.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/RWS_Tarot_14_Temperance.jpg/69px-RWS_Tarot_14_Temperance.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/RWS_Tarot_15_Devil.jpg/69px-RWS_Tarot_15_Devil.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/RWS_Tarot_16_Tower.jpg/70px-RWS_Tarot_16_Tower.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/RWS_Tarot_17_Star.jpg/69px-RWS_Tarot_17_Star.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/RWS_Tarot_18_Moon.jpg/68px-RWS_Tarot_18_Moon.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/RWS_Tarot_19_Sun.jpg/69px-RWS_Tarot_19_Sun.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/RWS_Tarot_20_Judgement.jpg/69px-RWS_Tarot_20_Judgement.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/RWS_Tarot_21_World.jpg/68px-RWS_Tarot_21_World.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Wands01.jpg/69px-Wands01.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Wands02.jpg/69px-Wands02.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Wands03.jpg/68px-Wands03.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Wands05.jpg/68px-Wands05.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Wands06.jpg/69px-Wands06.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Wands07.jpg/68px-Wands07.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Wands08.jpg/68px-Wands08.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Tarot_Nine_of_Wands.jpg/69px-Tarot_Nine_of_Wands.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Wands10.jpg/69px-Wands10.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Wands11.jpg/68px-Wands11.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Wands12.jpg/68px-Wands12.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Wands13.jpg/69px-Wands13.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Wands14.jpg/67px-Wands14.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Cups01.jpg/67px-Cups01.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Cups02.jpg/68px-Cups02.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Cups03.jpg/68px-Cups03.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Cups04.jpg/68px-Cups04.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cups05.jpg/67px-Cups05.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Cups06.jpg/67px-Cups06.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Cups07.jpg/68px-Cups07.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cups08.jpg/68px-Cups08.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Cups09.jpg/68px-Cups09.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Cups10.jpg/68px-Cups10.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Cups11.jpg/67px-Cups11.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Cups12.jpg/69px-Cups12.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Cups13.jpg/69px-Cups13.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Cups14.jpg/68px-Cups14.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Swords01.jpg/68px-Swords01.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Swords02.jpg/69px-Swords02.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Swords03.jpg/67px-Swords03.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Swords04.jpg/67px-Swords04.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Swords05.jpg/68px-Swords05.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Swords06.jpg/69px-Swords06.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Swords07.jpg/69px-Swords07.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Swords08.jpg/69px-Swords08.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Swords09.jpg/69px-Swords09.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Swords10.jpg/69px-Swords10.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Swords11.jpg/68px-Swords11.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Swords12.jpg/68px-Swords12.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Swords13.jpg/67px-Swords13.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Swords14.jpg/68px-Swords14.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Pents01.jpg/68px-Pents01.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Pents02.jpg/69px-Pents02.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Pents03.jpg/69px-Pents03.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pents04.jpg/68px-Pents04.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Pents05.jpg/68px-Pents05.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pents06.jpg/69px-Pents06.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Pents07.jpg/68px-Pents07.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Pents08.jpg/68px-Pents08.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Pents09.jpg/69px-Pents09.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Pents10.jpg/70px-Pents10.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Pents11.jpg/68px-Pents11.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Pents12.jpg/68px-Pents12.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pents13.jpg/68px-Pents13.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Pents14.jpg/69px-Pents14.jpg"
]

function draw(commitId) {
    const n = parseInt(commitId, 16) % (78 * 77);
    const n0 = n % 78;
    const n1 = Math.floor(n / 77);
    return [urls[n0], urls[n1]];
}

function message(commitId) {
    const [card_url_1, card_url_2] = draw(commitId);
    return "✨Pixiebot draws✨\n\n" + 
    '<img src="' + card_url_1 + '" />' +
    '<img src="' + card_url_2 + '" />';
}

async function run() {
  try {
    const inputs = {
      token: core.getInput("token"),
      repository: core.getInput("repository"),
      sha: core.getInput("sha"),
      body: core.getInput("body"),
      path: core.getInput("path"),
      position: core.getInput("position"),
    };
    core.debug(`Inputs: ${inspect(inputs)}`);

    const [owner, repo] = inputs.repository.split("/");

    const sha = inputs.sha ? inputs.sha : getSha();
    core.debug(`SHA: ${sha}`);

    const octokit = github.getOctokit(inputs.token);

    await octokit.rest.repos.createCommitComment({
      owner: owner,
      repo: repo,
      commit_sha: sha,
      body: message(sha),
      //path: inputs.path,
      //position: inputs.position
    });
  } catch (error) {
    core.debug(inspect(error));
    core.setFailed(error.message);
  }
}

run();
