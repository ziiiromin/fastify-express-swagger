import { reservPhoneModel } from "interface/types/models/reservation.model.types";
import { reservEmailModel } from "interface/types/models/reservation.model.types";
import db from "../models";
const reservPhone = db.reservPhone
const reservEmail = db.reservEmail

export const createReservPhone = async (body: reservPhoneModel): Promise<reservPhoneModel> => {
	const response: reservPhoneModel = await reservPhone.create(body)
	return response
}

export const createReservEmail = async (body: reservEmailModel): Promise<reservEmailModel> => {
	const response: reservEmailModel = await reservEmail.create(body)
	return response
}

export default {
	createReservPhone,
	createReservEmail
}