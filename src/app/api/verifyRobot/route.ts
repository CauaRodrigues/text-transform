import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
  const res = await request.json();
  try {
    const verifyToken = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${res.token}`,
    );

    return NextResponse.json({ isHuman: verifyToken.data.success });
  } catch (err) {
    console.error(`error: ${err}`);
    return NextResponse.json({
      error: "Error verifying reCAPTCHA",
      status: 500,
    });
  }
}
