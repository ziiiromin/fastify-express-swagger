import { ReservationCreateReplyByPhone, ReservationCreateReplyByEmail} from "interface/types/handlers/reservation.error.types";
import { ReservationCreateRequestByPhone, ReservationCreateRequestByEmail} from "interface/types/handlers/reservation.handler.types";
import { reservService } from "../services"

const MobileDetect = require('mobile-detect');
const languageArrays = ["ko", "en", "ja", "zt"];
const validPhone = (phone: string) => {
  const pattern = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})([0-9]{3,4})([0-9]{4})$/;
  return pattern.test(phone);
}
const validEmail = (email: string) => {
    const pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return pattern.test(email)
}

export const createReservPhone = async (req: ReservationCreateRequestByPhone, reply: ReservationCreateReplyByPhone) => {
    const md = new MobileDetect(req.headers["user-agent"]);
    const device = md.phone() == null ? "Pc" : "Mobile";
    const ipaddress = req.ip;
    const game_code = req.params.gcode;
    const inflow = req.query.inflow;
    const { language, phone, invite_code } = req.body;

    if(!languageArrays.includes(language)){
        return reply.status(400).send({"status": 400, "message": "Invalid language"});
    } else if(!validPhone(phone.trim())){
        return reply.status(400).send({"status": 400, "message": "Invalid phone number"});
    }

    return reservService.createReservPhone({
        game_code,
        language,
        inflow,
        phone,
        ipaddress,
        device,
        invite_code
    });
}
export const createReservEmail = async (req: ReservationCreateRequestByEmail, reply: ReservationCreateReplyByEmail) => {
    const md = new MobileDetect(req.headers["user-agent"]);
    const device = md.phone() == null ? "Pc" : "Mobile";
    const ipaddress = req.ip;
    const game_code = req.params.gcode;
    const inflow = req.query.inflow;
    const { language, email, invite_code } = req.body;

    if(!languageArrays.includes(language)){
        return reply.status(400).send({"status": 400, "message": "Invalid language"});
    } else if(!validEmail(email.trim())){
        return reply.status(400).send({"status": 400, "message": "Invalid email"});
    }

    return reservService.createReservEmail({
        game_code,
        language,
        inflow,
        email,
        ipaddress,
        device,
        invite_code
    });
}


export default {
    createReservPhone,
    createReservEmail
}