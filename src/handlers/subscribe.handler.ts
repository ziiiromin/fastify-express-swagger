import { SubscribeCreateReply } from "interface/types/handlers/subscribe.error.types";
import { SubscribeCreateRequest} from "interface/types/handlers/subscribe.handler.types";
import { subscribeService } from "../services"

const languageArrays = ["ko", "en", "ja", "zt"];
const validPhone = (phone: string) => {
  const pattern = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})([0-9]{3,4})([0-9]{4})$/;
  return pattern.test(phone);
}
const validEmail = (email: string) => {
    const pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return pattern.test(email)
}

export const createSubscriber = async (req: SubscribeCreateRequest, reply: SubscribeCreateReply) => {
    const ipaddress = req.ip;
    const game_code = req.params.gcode;
    const inflow = req.query.inflow;
    const { page_lang, phone, email, birth, agree_yn } = req.body;


    if(!languageArrays.includes(page_lang)){
        return reply.status(400).send({"status": 400, "message": "Invalid language"});
    } else if(page_lang === "ko"){
        if(!validPhone(phone.trim())){
            return reply.status(400).send({"status": 400, "message": "Invalid phone number"});
        }
    } else if(!validEmail(email.trim())){
        return reply.status(400).send({"status": 400, "message": "Invalid phone number"});
    }

    return subscribeService.createSubscriber({
        game_code,
        page_lang,
        inflow,
        phone,
        email,
        birth,
        ipaddress,
        agree_yn,
    });
}

export default {
    createSubscriber
}