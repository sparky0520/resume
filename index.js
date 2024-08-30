const { VertexAI } = require('@google-cloud/vertexai');

/**
 * TODO(developer): Update these variables before running the sample.
 */
async function analyze_pdf(projectId = 'sound-inn-416900') {
  const vertexAI = new VertexAI({ project: projectId, location: 'us-central1' });

  const generativeModel = vertexAI.getGenerativeModel({
    model: 'gemini-1.5-flash-001',
  });

  const filePart = {
    file_data: {
      file_uri: 'gs://resume_processing/DarshJain_InternshalaResume.pdf',
      mime_type: 'application/pdf',
    },
  };
  const textPart = {
    text: `
    "Analyze the resume provided above and identify all relevant job profiles or roles that match the candidate's skills, experience, and qualifications. Extract these job profile keywords and provide them as a list separated by spaces.
     Example Output:
     full-stack-web-development app-development data-science machine-learning software-engineering cloud-computing"`,
  };

  const request = {
    contents: [{ role: 'user', parts: [filePart, textPart] }],
  };

  const resp = await generativeModel.generateContent(request);
  const contentResponse = await resp.response;
  console.log(contentResponse.candidates[0].content.parts[0].text);
}

analyze_pdf()