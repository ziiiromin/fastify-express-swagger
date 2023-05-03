import { subscribeModel } from "interface/types/models/subscribe.model.types";
import db from "../models";
const subscribe = db.subscribe

export const createSubscriber = async (body: subscribeModel): Promise<subscribeModel> => {
	const response: subscribeModel = await subscribe.create(body)
	return response
}

export default {
	createSubscriber
}