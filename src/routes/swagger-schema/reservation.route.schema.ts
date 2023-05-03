export const createReservPhoneRouteSchema = {
	tags: ["reservation"],
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
				type: 'number',
				description: '게임코드'
			}
		},
		required: ['gcode']
	},
	body: {
		type: 'object',
		properties: {
			language: {
				type: 'string',
			},
			phone: {
				type: 'string',
			},
			invite_code: {
				type: 'string',
			},
		}
	},
	response: {
		200: {
			type: 'object',
			properties: {
				language: {
					type: 'string',
					format: 'string',
				},
				phone: {
					type: 'string',
					format: 'string',
				},
				ipaddress: {
					type: 'string',
					format: 'string',
				},
				device: {
					type: 'string',
					format: 'string',
				},
				invite_code: {
					type: 'string',
					format: 'string',
				},
			}
		}
	},

}

export const createReservEmailRouteSchema = {
	tags: ["reservation"],
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
				type: 'number',
				description: '게임코드'
			}
		},
		required: ['gcode']
	},
	body: {
		type: 'object',
		properties: {
			language: {
				type: 'string',
			},
			email: {
				type: 'string',
			},
			invite_code: {
				type: 'string',
			},
		}
	},
	response: {
		200: {
			type: 'object',
			properties: {
				language: {
					type: 'string',
					format: 'string',
				},
				email: {
					type: 'string',
					format: 'string',
				},
				device: {
					type: 'string',
					format: 'string',
				},
				ipaddress: {
					type: 'string',
					format: 'string',
				},
				invite_code: {
					type: 'string',
					format: 'string',
				},
			}
		}
	},

}