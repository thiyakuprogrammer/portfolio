const twilio = require('twilio');

/**
 * Sends an SMS to your phone when someone submits the contact form.
 * Uses Twilio - free tier allows 1 verified number for testing.
 */
const sendSMS = async ({ name, email, message }) => {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken  = process.env.TWILIO_AUTH_TOKEN;
    const from       = process.env.TWILIO_PHONE_NUMBER;
    const to         = process.env.MY_PHONE_NUMBER;

    // Skip SMS if Twilio is not configured yet
    if (
        !accountSid || accountSid === 'your_twilio_account_sid' ||
        !authToken  || authToken  === 'your_twilio_auth_token'  ||
        !from       || from.includes('your_twilio_number')
    ) {
        console.log('⚠️  Twilio not configured — SMS skipped.');
        console.log('📩 New contact form submission:');
        console.log(`   From : ${name} <${email}>`);
        console.log(`   Msg  : ${message}`);
        return { skipped: true };
    }

    const client = twilio(accountSid, authToken);

    const smsBody =
        `📩 New Portfolio Contact!\n` +
        `👤 Name   : ${name}\n` +
        `📧 Email  : ${email}\n` +
        `💬 Message: ${message.substring(0, 100)}${message.length > 100 ? '...' : ''}`;

    const result = await client.messages.create({
        body: smsBody,
        from,
        to,
    });

    console.log(`✅ SMS sent! SID: ${result.sid}`);
    return result;
};

module.exports = { sendSMS };
