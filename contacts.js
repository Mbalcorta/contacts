  'use strict';
let _ = require('underscore-node');

let contactStorage = []; // here is where you'll store your contacts

//constructing table for key value pairs
const table = function(){
  sort(contactStorage);
  console.log('Loading contact data...');
  console.log('...Finished loading contact data.');
  console.log('All Contacts:');

  let firstColumnLength = findLongestWordPerColumn(contactStorage, 'first_name', 'last_name');
  let secondColumnLength = findLongestWordPerColumn(contactStorage, 'email');
  horizontalBreaks(firstColumnLength, secondColumnLength);
  insertTextColumn(firstColumnLength, secondColumnLength,'Full Name','Email addresses');
  horizontalBreaks(firstColumnLength, secondColumnLength);
  fillInNames(firstColumnLength, secondColumnLength, contactStorage);
  horizontalBreaks(firstColumnLength, secondColumnLength);

};

//finds length of each column
const findLongestWordPerColumn = function(arrayOfObjects, targetLengthOne, targetLengthTwo){

  let objectReturned =  _.max(arrayOfObjects, function(eachObject){
    if(targetLengthTwo){
      let fullName = eachObject[targetLengthOne]+' '+eachObject[targetLengthTwo];
      return fullName.length;
    }
    return eachObject[targetLengthOne].length;
  });

  if(targetLengthOne === 'first_name'){
      let fullName = objectReturned[targetLengthOne].length+objectReturned[targetLengthOne].length+1;
      return fullName
    }
   return objectReturned[targetLengthOne].length;
};

//creates horizontal line breaks
const horizontalBreaks = function(lengthOne, lengthTwo){

    let begin = '|';
    let middle = '-';
    let end = '+';

    let lineBreak = begin+middle.repeat(lengthOne+2)+end+middle.repeat(lengthTwo+2)+begin;
    console.log(lineBreak)
};

// fills contact information in table
const fillInNames = function(firstColumnLength, secondColumnLength,arrayOfContactObj){
  _.each(arrayOfContactObj, function(eachObj){
      let fullName = eachObj.first_name+' '+ eachObj.last_name;
      let email = eachObj.email;

//calls function to fill in table with contact name and email
      insertTextColumn(firstColumnLength, secondColumnLength, fullName, email)
  });
};

//fills in text into each column and separates columns accordingly
const insertTextColumn = function(lengthOne, lengthTwo, textColumnOne, textColumnTwo){
  let begin = '|';
  let space = ' ';

  let textInsertedColumn = begin+space.repeat(1)+textColumnOne+space.repeat(lengthOne-textColumnOne.length+1)+begin;
  textInsertedColumn += space.repeat(1)+textColumnTwo+space.repeat(lengthTwo-textColumnTwo.length+1)+begin;
  console.log(textInsertedColumn);
};


/*
 * addContact
 *
 *  Arguments:
 *    firstName: String (required)
 *    lastName: String (required)
 *    email: String (required)
 *
 *  Example Usage:
 *    addContact('Betty', 'Holberton', 'betty.holberton@eniac.edu')
 *
 *  Returns:
 *    undefined
 */

const addContact = function(firstName, lastName, email) {
  //push one contact into contacts array
  contactStorage.push({firstNamelastName, email});
};

/*
 * addContacts
 *
 *  Arguments:
 *    contacts: Array of contacts (required)
 *
 *  Example Usage:
 *    addContacts([
 *      {
 *        'first_name': 'Tanny',
 *        'last_name': 'Vibert',
 *        'email': 'tvibert0@illinois.edu',
 *      },
 *      {
 *        'first_name': 'Tova',
 *        'last_name': 'Myall',
 *        'email': 'tmyall1@instagram.com',
 *      }
 *    ])
 *
 *  Returns:
 *    undefined
 */
const addContacts = function(contacts) {
  //must iterate through contactsArray
  _.each(contacts, function(eachContact){
  //push each contact object into contact array
    contactStorage.push({first_name: eachContact.first_name, last_name : eachContact.last_name, email: eachContact.email});
  });

};

//sorts contacts of array of objects by alphabetical order
const sort = function(arrayOfObject){

  // sort by name
  arrayOfObject.sort(function(a, b) {
    let first_nameA = a.first_name.toUpperCase(); // ignore upper and lowercase
    let first_nameB = b.first_name.toUpperCase(); // ignore upper and lowercase
    if (first_nameA < first_nameB) {
      return -1;
    }
    if (first_nameA > first_nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
};

/*
 * printContacts
 *
 *  Arguments:
 *    none
 *
 *  Example Usage:
 *    addContacts()
 *
 *  Note: output goes to STDOUT using console.log
 *
 *  Returns:
 *    undefined
 */


const printContacts = function() {
  //make table that prints out full name and email addresses
  table();
};
////////////////////////////////////////////////////////////
/*          Do not make changes below this line           */
////////////////////////////////////////////////////////////

addContacts([
  {
    'first_name': 'Tanny',
    'last_name': 'Vibert',
    'email': 'tvibert0@illinois.edu',
  },
  {
    'first_name': 'Tova',
    'last_name': 'Myall',
    'email': 'tmyall1@instagram.com',
  },
  {
    'first_name': 'Engracia',
    'last_name': 'Folger',
    'email': 'efolger2@epa.gov',
  },
  {
    'first_name': 'Conroy',
    'last_name': 'Honsch',
    'email': 'chonsch3@sohu.com',
  },
  {
    'first_name': 'Virgina',
    'last_name': 'Cankett',
    'email': 'vcankett4@washington.edu',
  },
  {
    'first_name': 'Mateo',
    'last_name': 'Da Costa',
    'email': 'mdacosta5@about.com',
  },
  {
    'first_name': 'Ambrose',
    'last_name': 'Scullard',
    'email': 'ascullard6@timesonline.co.uk',
  },
  {
    'first_name': 'Shaylah',
    'last_name': 'Fairney',
    'email': 'sfairney7@stumbleupon.com',
  },
  {
    'first_name': 'Pier',
    'last_name': 'Waine',
    'email': 'pwaine8@unc.edu',
  },
  {
    'first_name': 'Karita',
    'last_name': 'Bough',
    'email': 'kbough9@angelfire.com',
  },
  {
    'first_name': 'Marguerite',
    'last_name': 'Lafayette',
    'email': 'mlafayettea@bravesites.com',
  },
  {
    'first_name': 'Northrop',
    'last_name': 'Bauchop',
    'email': 'nbauchopb@pagesperso-orange.fr',
  },
  {
    'first_name': 'Devon',
    'last_name': 'Bocking',
    'email': 'dbockingc@comcast.net',
  },
  {
    'first_name': 'Willdon',
    'last_name': 'Hedley',
    'email': 'whedleyd@purevolume.com',
  },
  {
    'first_name': 'Charil',
    'last_name': 'Clegg',
    'email': 'cclegge@weibo.com',
  },
  {
    'first_name': 'Nessi',
    'last_name': 'Bywaters',
    'email': 'nbywatersf@shop-pro.jp',
  },
  {
    'first_name': 'Mercy',
    'last_name': 'Browncey',
    'email': 'mbrownceyg@yelp.com',
  },
  {
    'first_name': 'Didi',
    'last_name': 'Grose',
    'email': 'dgroseh@google.com.hk',
  },
  {
    'first_name': 'Niccolo',
    'last_name': 'Spruce',
    'email': 'nsprucei@wordpress.com',
  },
  {
    'first_name': 'Winston',
    'last_name': 'Hixley',
    'email': 'whixleyj@homestead.com',
  },
]);

printContacts();
