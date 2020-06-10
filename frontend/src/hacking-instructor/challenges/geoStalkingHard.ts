import {
  waitInMs,
  sleep, waitForAngularRouteToBeVisited, waitForInputToNotBeEmpty, waitForElementToGetClicked
} from '../helpers/helpers'
import { ChallengeInstruction } from '../'

export const GeoStalkingHardInstruction: ChallengeInstruction = {
  name: 'Geo Stalking - Hard',
  hints: [
    {
      text:
        "To start this challenge, you'll have to log out first.",
      fixture: '#navbarAccount',
      unskippable: true,
      async resolved() {
        while (true) {
          if (localStorage.getItem('token') === null) {
            break
          }
          await sleep(100)
        }
      }
    },

    {
      text: 'This challenge is about **sensitive data exposure**, meaning sensitive data has been exposed leaving open a vector for attack',
      fixture: 'app-navbar',
      resolved: waitInMs(18000)
    },
    {
      text: 'First, navigate to the photo wall.',
      fixture: 'app-welcome',
      unskippable: true,
      resolved: waitForAngularRouteToBeVisited('photo-wall')//todo add route
    },
    {
      text: 'Now take a look at the picture uploaded by geo2@gmail.com and notice the comment',
      fixture: 'app-photo-wall',
      resolved: waitInMs(18000)
    },
    {
      text: 'Take a close look at the photo and notice how it gives away an answer to a potential security question',
      fixture: 'app-navbar',
      resolved: waitInMs(18000)
    },
    {
      text: 'With this information navigate to the login screen.',
      fixture: '#navbarAccount',
      unskippable: true,
      resolved: waitForAngularRouteToBeVisited('login')
    },
    {
      text: 'Now, you don\'t have the password, but perhaps a security question may be answered now. Click on forgot password.',
      fixture: 'app-navbar',
      unskippable: true,
      resolved: waitForAngularRouteToBeVisited('forgot-password')
    },
    {
      text: 'Fill in the e-mail adress and then the security question and try to change the password',
      fixture: 'app-navbar',
      resolved: waitForInputToNotBeEmpty('#email')
    },
    {
      text: 'Now fill in the answer to the security question',
      fixture: '#app-navbar',
      resolved: waitForInputToNotBeEmpty('#securityAnswer')
    },
    {
      text: 'Now fill in a new password',
      fixture: 'app-navbar',
      resolved: waitForInputToNotBeEmpty('#newPassword')
    },
    {
      text: 'Repeat the password',
      fixture: 'app-navbar',
      resolved: waitForInputToNotBeEmpty('#newPasswordRepeat')
    },
    {
      text: 'Now click change',
      fixture: 'app-navbar',
      unskippable: true,
      resolved: waitForElementToGetClicked('#resetButton')
    },
    {
      text: '🎉 Congratulations! You can now log into this account with the new password',
      fixture: 'app-navbar',
      resolved: waitInMs(20000)
    }

  ]
}
