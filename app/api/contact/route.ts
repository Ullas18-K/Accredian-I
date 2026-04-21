import { NextResponse } from "next/server";
import { z } from "zod";

// Define the expected schema for the incoming request
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  teamSize: z.string().min(1),
  message: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate the body
    const validatedData = contactSchema.parse(body);

    // Next.js API Routes deployed to Vercel are Serverless Functions. 
    // They run in a read-only filesystem (EROFS), so writing to a local "leads.json" file will crash in production.
    // For this assignment/demo, we'll log the lead to the edge console and gracefully return success! 
    // In a real application, this is where you'd insert the data into a database (e.g. Supabase, MongoDB) or trigger an email (e.g. Resend).

    const newLead = {
      ...validatedData,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };

    console.log("---- NEW ENTERPRISE LEAD SUBMITTED ----");
    console.log(newLead);
    console.log("---------------------------------------");

    // Artificially delay slightly to cleanly show the loading state animation on frontend
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      { success: true, message: "Thanks! We'll be in touch within 24 hours." },
      { status: 200 }
    );
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: "Validation failed", details: error.issues },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
