import RobotVerificationService from "@/services/VerifyRobots";
import { NextResponse } from "next/server";

const srv = new RobotVerificationService();

export async function POST(request: Request) {
  const body = await request.json();
  try {
    const data = await srv.validateToken(body.token);
    return NextResponse.json({ isHuman: data.success });
  } catch (err) {
    console.error(`error: ${err}`);
    return NextResponse.json({
      error: "Erro ao verificar teste de reCAPTCHA",
      status: 500,
    });
  }
}
