/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Application} app
 */
 module.exports = robot => {
  // Your code here
  robot.log('Yay, the app was loaded!')

  robot.on('pull_request.opened',test)
   async function test (context)  {
     // leave comment
    const param = context.issue({ body: 'hello world' })
    await context.github.issues.createComment(param)
  }
 }
 
 const commands = require('probot-commands')

module.exports = robot => {
  robot.log('Yay, the app was loaded!')

  commands(robot, 'echo', (context, command) => {
    const issueComment = context.issue({ body: command.arguments })
    return context.github.issues.createComment(issueComment)
  });
}