const {
  Before,
  After
} = require("cypress-cucumber-preprocessor/steps");

let beforeCounter = 0;
let beforeWithTagCounter;

// this will get called before each scenario
Before(() => {
  beforeCounter += 1;
  beforeWithTagCounter = 0;
  
  // cy.log(`Number of Before hooks run: ${beforeCounter}`)
});

// this will only get called before scenarios tagged with @foo
Before({ tags: "@foo" }, () => {
  beforeWithTagCounter += 1;
});

After(() => {
  
})