export const createSubscriberRouteSchema = {
	tags: ["subscribe"],
	security: [{ apiKey: [] }],
	query: {
		type: 'object',
		properties: {
			inflow: {
				type: 'string',
				description: '유입코드'
			}
		},
	},
	params: {
		type: 'object',
		properties: {
			gcode: {
				type: 'string',
				description: '게임코드'
			}
		},
		required: ['gcode']
	},
	body: {
		type: 'object',
		properties: {
			page_lang: {
				type: 'string',
			},
			phone: {
				type: 'string',
			},
			email: {
				type: 'string',
			},
			birth: {
				type: 'string',
			},
			agree_yn: {
				type: 'string',
			},
		}
	},
	response: {
		200: {
			type: 'object',
			properties: {
				page_lang: {
					type: 'string',
					format: 'string',
				},
				phone: {
					type: 'string',
					format: 'string',
				},
				email: {
					type: 'string',
					format: 'string',
				},
				birth: {
					type: 'string',
					format: 'string',
				},
				ipaddress: {
					type: 'string',
					format: 'string',
				},
				agree_yn: {
					type: 'number',
					format: 'number',
				},
			}
		}
	},

}