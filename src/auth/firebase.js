import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
	apiKey: 'AIzaSyB5VMVtl6wjKh5ttFuOgV5SqedFJ1-K2JU',
	authDomain: 'foodwastage-a02af.firebaseapp.com',
	projectId: 'foodwastage-a02af',
	storageBucket: 'foodwastage-a02af.appspot.com',
	messagingSenderId: '232726174827',
	appId: '1:232726174827:web:0f00263b9547c06cc6a52e',
};

if (firebase.apps.length === 0) {
	firebase.initializeApp(firebaseConfig);
}



const getAllData = async () => {
  try {
    const snapshot = await firebase.firestore().collection('YourCollection').get();
    const data = [];
    
    snapshot.forEach(doc => {
      // Extract the document data and add it to the array
      data.push(doc.data());
    });

    // Return the array containing all the documents
    return data;
  } catch (error) {
    console.error('Error getting documents:', error);
    return [];
  }
};

// Usage example
getAllData()
  .then(data => {
    // Do something with the retrieved data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred
    console.error(error);
  });

export default firebase;