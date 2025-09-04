import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  topic: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, topic, message }: ContactEmailRequest = await req.json();

    console.log(`Processing contact form submission from ${name} (${email})`);

    // Send confirmation email to the user
    const confirmationEmail = await resend.emails.send({
      from: "Lotessa <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting us!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #333; border-bottom: 2px solid #e5e5e5; padding-bottom: 10px;">Thank you for contacting Lotessa!</h1>
          
          <p>Hi ${name},</p>
          
          <p>We've received your message about <strong>"${topic}"</strong> and wanted to confirm that it's in our inbox.</p>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #666; margin-top: 0;">Your message:</h3>
            <p style="color: #333; line-height: 1.6;">${message}</p>
          </div>
          
          <p>Our team will review your message and get back to you as soon as possible. We typically respond within 24-48 hours.</p>
          
          <p>In the meantime, feel free to explore our app and learn more about how Lotessa can help you on your mental health journey.</p>
          
          <p>Best regards,<br>
          <strong>The Lotessa Team</strong></p>
          
          <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 30px 0;">
          <p style="color: #666; font-size: 12px;">
            This is an automated confirmation email. If you did not submit a contact form on our website, please ignore this email.
          </p>
        </div>
      `,
    });

    // Send notification email to admin (replace with your actual email)
    const adminEmail = await resend.emails.send({
      from: "Lotessa Contact Form <onboarding@resend.dev>",
      to: ["admin@yourdomain.com"], // Replace with your actual admin email
      subject: `New Contact Form Submission: ${topic}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #333; border-bottom: 2px solid #e5e5e5; padding-bottom: 10px;">New Contact Form Submission</h1>
          
          <div style="background-color: #f0f8ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Topic:</strong> ${topic}</p>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="color: #666; font-size: 14px;">
            Please respond to ${email} directly to continue the conversation.
          </p>
        </div>
      `,
    });

    console.log("Confirmation email sent:", confirmationEmail);
    console.log("Admin notification sent:", adminEmail);

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Emails sent successfully",
        confirmationId: confirmationEmail.data?.id,
        adminNotificationId: adminEmail.data?.id
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);