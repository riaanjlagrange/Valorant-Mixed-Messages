// Import agents.json
import agents from './agents.json' assert { type: 'json' };
// Import inquirer to allow user input in the console
import inquirer from 'inquirer';

// Function to return a random voice line from the agent you chose
const getRandomVoiceline = (choice) => {
  // Filter the agents.json file to find the agent you chose
  const chosenAgent = agents.filter((agent) => agent.name === choice)[0];
  // If the agent you chose is not in the agents.json file, return an error message
  if (chosenAgent.length === 0) {
    console.log('Invalid choice!');
  }
  // Return a random voice line from the agent you chose
  const chosenVoiceLine =
    chosenAgent.voiceLines[
      Math.floor(Math.random() * chosenAgent.voiceLines.length)
    ];
  return [chosenVoiceLine, chosenAgent.type];
};

// UI Boilerplate
console.log('\n\n\nWelcome to Valorant Mixed Messages!\n');
console.log('Please Choose an Agent from the following:');
console.log('\nRaze\nReyna\nSage\nIso\nSova\n');

// Function to convert strings to title case
const convertToTitleCase = (str) => {
  if (!str) {
    return '';
  }

  return str
    .toLowerCase()
    .split(' ')
    .map(function (word) {
      return word.charAt(0).toUpperCase().concat(word.substr(1));
    })
    .join(' ');
};

// Ask the user which agent they would like to choose
inquirer
  .prompt([
    {
      type: 'input',
      name: 'agent',
      message: 'Which Agent would you like to choose? (type the name)',
    },
  ])
  .then((answer) => {
    // Convert the user's input to title case
    const [voiceLine, type] = getRandomVoiceline(answer.agent.toLowerCase());
    console.log(`
    ⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀
    ⠀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠏⠀⠀
    ⠀⠀⠀⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⠀⠀⠀
    ⠀⠀⠀⠀⠀⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀
    ⡄⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⣰
    ⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠻⢿⣿⣿⣿⣿⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣾
    ⣿⣿⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⣿⣿⣿⣥⣤⣤⣤⣤⣤⣤⣤⣤⣴⣿⣿⣿
    ⣿⣿⣿⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⢈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    `);

    // Display the chosen agent and their voice line
    console.log(
      `\n${convertToTitleCase(answer.agent)} (${convertToTitleCase(
        type
      )}): "${voiceLine}"`
    );
  });
