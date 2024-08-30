/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
// The ID of your GCS bucket
const bucketName = 'resume_processing';

// The path to your file to upload
const filePath = 'resumes/DarshJain_InternshalaResume.pdf';

// The new ID for your GCS file
const destFileName = 'DarshJain_InternshalaResume.pdf';

// Imports the Google Cloud client library
const {Storage} = require('@google-cloud/storage');

// Creates a client
const storage = new Storage();

async function uploadFile() {
  const options = {
    destination: destFileName,
  };

  await storage.bucket(bucketName).upload(filePath, options);
  console.log(`${filePath} uploaded to ${bucketName}`);
}

uploadFile().catch(console.error);