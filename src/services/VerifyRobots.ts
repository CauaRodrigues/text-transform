import { InstanceAPI } from "@/lib/InstanceAPI";

export default class RobotVerificationService {
  async validateToken(token: string) {
    const res = await InstanceAPI.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    );
    return res.data;
  }

  async verifyToken(token: null | string | undefined) {
    const res = await InstanceAPI.post("/verifyRobot", { token });
    return res.data;
  }
}
