  'use strict';
let _ = require('underscore-node');

let contactStorage = []; // here is where you'll store your contacts

//finds length of each column
const setColumnLength = function(arrayOfObjects, targetLengthOne, targetLengthTwo){

  let objectReturned =  _.max(arrayOfObjects, function(eachObject){
      if(targetLengthTwo){
      let fullName = eachObject[targetLengthOne]+' '+eachObject[targetLengthTwo];
      return fullName.length;
    }
    return eachObject[targetLengthOne].length;
  });

  if(targetLengthOne === 'first_name'){
      let fullName = objectReturned[targetLengthOne].length+objectReturned[targetLengthTwo].length+1;
      return fullName;
    }
   return objectReturned[targetLengthOne].length;
};

//creates horizontal line breaks
const horizontalBreaks = function(lengthOne, lengthTwo){
    let lineBreak = '|'+'-'.repeat(lengthOne+2)+'+'+'-'.repeat(lengthTwo+2)+'|';
    console.log(lineBreak);
};

//fills in text into each column and separates columns accordingly
const insertTextColumn = function(lengthOne, lengthTwo, textColumnOne, textColumnTwo){
  let textInsertedColumn = '|'+' '.repeat(1)+textColumnOne+' '.repeat(lengthOne-textColumnOne.length+1)+'|';
  textInsertedColumn += ' '.repeat(1)+textColumnTwo+' '.repeat(lengthTwo-textColumnTwo.length+1)+'|';
  console.log(textInsertedColumn);
};

// fills contact information in table
const fillInNames = function(firstColumnLength, secondColumnLength,arrayOfContactObj){
//loops through each object and provides text needed to insert text to table
  _.each(arrayOfContactObj, function(eachObj){
      let fullName = eachObj.first_name+' '+ eachObj.last_name;
      let email = eachObj.email;
//calls function to fill in table with contact name and email
      insertTextColumn(firstColumnLength, secondColumnLength, fullName, email);
  });
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
  //push one contact object into contact storage array
  contactStorage.push({first_name: firstName,last_name: lastName, email: email});
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

 //adds multiple contacts at once
const addContacts = function(contacts) {
  //must iterate through contactsArray of objects
  _.each(contacts, function(eachContact){
  //push each contact object into contact array
    addContact(eachContact.first_name, eachContact.last_name, eachContact.email);
  });

};

//sorts contacts of array of objects by alphabetical order
const sort = function(arrayOfObject){

  // sort by name
  //compare function is sorted according to the return value of the compare function recursively.
  arrayOfObject.sort(function(a, b) {
    let first_nameA = a.first_name.toUpperCase(); // ignore upper and lowercase
    let first_nameB = b.first_name.toUpperCase(); // ignore upper and lowercase
    if (first_nameA < first_nameB) {
      //sort a to an index lower than b
      return -1;
    }
    if (first_nameA > first_nameB) {
      //sort b to a lower index than a
      return 1;
    }
    // leaves a and b unchanged with respect to each other
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

 //constructing table for key value pairs
 const table = function(){
   console.log('...Finished loading contact data.');
   console.log('All Contacts:');
   //default setting of empty table;
   let firstColumnLength = 10;
   let secondColumnLength = 30;

   if(contactStorage.length > 0){
     sort(contactStorage);
     firstColumnLength = setColumnLength(contactStorage, 'first_name', 'last_name');
     secondColumnLength = setColumnLength(contactStorage, 'email');
     horizontalBreaks(firstColumnLength, secondColumnLength);
     insertTextColumn(firstColumnLength, secondColumnLength,'Full Name','Email addresses');
     horizontalBreaks(firstColumnLength, secondColumnLength);
     fillInNames(firstColumnLength, secondColumnLength, contactStorage);
     horizontalBreaks(firstColumnLength, secondColumnLength);
   } else {
     horizontalBreaks(firstColumnLength, secondColumnLength);
     insertTextColumn(firstColumnLength, secondColumnLength,'Full Name','Email addresses');
     horizontalBreaks(firstColumnLength, secondColumnLength);
     fillInNames(firstColumnLength, secondColumnLength, contactStorage);
     horizontalBreaks(firstColumnLength, secondColumnLength);
   }
 };

const printContacts = function() {
  console.log('Loading contact data...');
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
