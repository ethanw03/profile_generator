const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? ", (name) => {
  rl.question("What is an activity you like to do? ", (activity) => {
    rl.question("What do you listen to while doing that? ", (music) => {
      rl.question("Which meal is your favourite?", (meal) => {
        rl.question(
          "What is your favourite thing to eat during that meal? ",
          (food) => {
            rl.question("Which sport is your absolute favourite? ", (sport) => {
              rl.question(
                "What is your superpower? In a few words, tell us what you are amazing at! ",
                (superpower) => {
                  console.log(`Thank you for your valuable feedback: ${name}`);
                  rl.close();
                  console.log(` My name is ${name}, I enjoy ${activity} while listening to ${music}. My favourite meal is ${meal}, where I enjoy eating ${food}. My favourite sport is ${sport} & my superpower is ${superpower} `);
                }
              );
            });
          }
        );
      });
    });
  });
});
