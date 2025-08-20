import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { 
      status: 405, 
      headers: corsHeaders 
    });
  }

  try {
    const { name, email, phone, message }: ContactRequest = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send email notification to your business email
    const emailResponse = await resend.emails.send({
      from: "Fantasy Búzios <onboarding@resend.dev>",
      to: ["contato@fantasybuzios.com.br"],
      subject: `Nova mensagem do site - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3e5650;">Nova mensagem recebida pelo site</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #3e5650; margin-top: 0;">Dados do contato:</h3>
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            ${phone ? `<p><strong>Telefone:</strong> ${phone}</p>` : ''}
          </div>
          
          <div style="background: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h3 style="color: #3e5650; margin-top: 0;">Mensagem:</h3>
            <p style="white-space: pre-line;">${message}</p>
          </div>
          
          <p style="color: #666; font-size: 14px; margin-top: 20px;">
            Esta mensagem foi enviada através do formulário de contato do site Fantasy Búzios.
          </p>
        </div>
      `,
    });

    // Send auto-reply to the customer
    await resend.emails.send({
      from: "Fantasy Búzios <onboarding@resend.dev>",
      to: [email],
      subject: "Recebemos sua mensagem - Fantasy Búzios",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3e5650;">Obrigado pelo contato, ${name}!</h2>
          
          <p>Recebemos sua mensagem e entraremos em contato em breve.</p>
          
          <div style="background: #fbd76a; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #3e5650; margin-top: 0;">Sua mensagem:</h3>
            <p style="white-space: pre-line;">${message}</p>
          </div>
          
          <p>Nosso horário de atendimento é das 08h às 22h.</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="color: #3e5650; font-weight: bold;">Fantasy Búzios</p>
            <p style="color: #666; font-size: 14px;">
              Rua Quinze, 22 - Brava, Armação dos Búzios - RJ<br>
              WhatsApp: +55 22 999393691<br>
              E-mail: contato@fantasybuzios.com.br
            </p>
          </div>
        </div>
      `,
    });

    console.log("Contact email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Email sent successfully" 
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
        error: "Failed to send email",
        details: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);