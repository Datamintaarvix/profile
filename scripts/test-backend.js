// Test script to verify server endpoints, validation, and error handling
const baseUrl = 'http://localhost:5000';

async function runTests() {
  console.log('--- Starting Automated Backend Tests ---\n');

  // Test 1: Health Check
  try {
    const res = await fetch(`${baseUrl}/api/health`);
    const data = await res.json();
    console.log('✅ Test 1: Health Check:', res.status, data);
  } catch (err) {
    console.error('❌ Test 1 Failed: Server might not be running.', err.message);
    process.exit(1);
  }

  // Test 2: Missing Required Fields
  try {
    const res = await fetch(`${baseUrl}/api/forms/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ formType: 'Contact', data: { name: '' } })
    });
    const data = await res.json();
    if (res.status === 400 && data.error.includes('valid full name')) {
      console.log('✅ Test 2: Missing Name Validation Passed:', res.status, data.error);
    } else {
      console.error('❌ Test 2 Failed:', res.status, data);
    }
  } catch (err) {
    console.error('❌ Test 2 Error:', err.message);
  }

  // Test 3: Invalid Email
  try {
    const res = await fetch(`${baseUrl}/api/forms/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        formType: 'Contact',
        data: { name: 'John Doe', email: 'invalid-email', phone: '1234567890' }
      })
    });
    const data = await res.json();
    if (res.status === 400 && data.error.includes('email address')) {
      console.log('✅ Test 3: Invalid Email Validation Passed:', res.status, data.error);
    } else {
      console.error('❌ Test 3 Failed:', res.status, data);
    }
  } catch (err) {
    console.error('❌ Test 3 Error:', err.message);
  }

  // Test 4: Invalid File Attachment Extension (.exe)
  try {
    const res = await fetch(`${baseUrl}/api/forms/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        formType: 'Careers',
        data: { name: 'Jane Candidate', email: 'jane@example.com', phone: '9876543210' },
        file: { name: 'virus.exe', content: Buffer.from('fake-virus').toString('base64') }
      })
    });
    const data = await res.json();
    if (res.status === 400 && data.error.includes('Only PDF and Word')) {
      console.log('✅ Test 4: Block Invalid File Extension Passed:', res.status, data.error);
    } else {
      console.error('❌ Test 4 Failed:', res.status, data);
    }
  } catch (err) {
    console.error('❌ Test 4 Error:', err.message);
  }

  // Test 5: Honeypot Spam Protection
  try {
    const res = await fetch(`${baseUrl}/api/forms/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        formType: 'Contact',
        data: {
          name: 'Bot Spam',
          email: 'bot@spam.com',
          phone: '1234567890',
          _honeypot: 'i-am-a-bot'
        }
      })
    });
    const data = await res.json();
    if (res.status === 200 && data.success) {
      console.log('✅ Test 5: Honeypot silently dropped spam bot Passed:', res.status, data);
    } else {
      console.error('❌ Test 5 Failed:', res.status, data);
    }
  } catch (err) {
    console.error('❌ Test 5 Error:', err.message);
  }

  // Test 6: Missing Email Configuration Handling (503 Service Unavailable)
  try {
    const res = await fetch(`${baseUrl}/api/forms/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        formType: 'Contact',
        data: {
          name: 'Real Visitor',
          email: 'visitor@company.com',
          phone: '+91 9876543210',
          message: 'Hello Datamint Aarvix'
        }
      })
    });
    const data = await res.json();
    if (res.status === 503 && data.error.includes('not configured')) {
      console.log('✅ Test 6: Unconfigured API Key Gracefully Returns 503 Passed:', res.status, data.error);
    } else if (res.status === 200 && data.success) {
      console.log('✅ Test 6: Email delivered successfully (API Key configured!):', res.status, data);
    } else {
      console.log('ℹ️ Test 6 Status:', res.status, data);
    }
  } catch (err) {
    console.error('❌ Test 6 Error:', err.message);
  }

  console.log('\n--- All Automated Backend Tests Complete ---');
}

runTests();
