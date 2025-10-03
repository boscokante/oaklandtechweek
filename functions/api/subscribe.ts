/**
 * Cloudflare Pages Function for email subscription
 * Handles email validation and forwards to email service provider
 */

interface Env {
  // Add your environment variables here
  // MAILCHIMP_API_KEY?: string;
  // CONVERTKIT_API_KEY?: string;
  // EMAIL_SERVICE_URL?: string;
}

export const onRequest = async (context: any) => {
  const { request } = context;
  
  // Only allow POST requests
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  try {
    const formData = await request.formData();
    const email = formData.get('email') as string;
    const honeypot = formData.get('_gotcha') as string;
    
    // Check honeypot (should be empty for real submissions)
    if (honeypot) {
      return new Response(JSON.stringify({ error: 'Spam detected' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Validate email
    if (!email || !isValidEmail(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email address' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // TODO: Forward to email service provider
    // Example implementations:
    
    // Option 1: Mailchimp
    // const mailchimpResponse = await fetch('https://us1.api.mailchimp.com/3.0/lists/YOUR_LIST_ID/members', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${context.env.MAILCHIMP_API_KEY}`,
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     email_address: email,
    //     status: 'subscribed'
    //   })
    // });
    
    // Option 2: ConvertKit
    // const convertkitResponse = await fetch(`https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     api_key: context.env.CONVERTKIT_API_KEY,
    //     email: email
    //   })
    // });
    
    // Option 3: Custom email service
    // const emailResponse = await fetch(context.env.EMAIL_SERVICE_URL, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     email: email,
    //     source: 'oakland-tech-week'
    //   })
    // });
    
    // For now, just log the subscription (replace with actual service integration)
    console.log(`New subscription: ${email}`);
    
    return new Response(JSON.stringify({ 
      status: 'success', 
      message: 'Successfully subscribed!' 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    console.error('Subscription error:', error);
    return new Response(JSON.stringify({ 
      error: 'Internal server error' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
