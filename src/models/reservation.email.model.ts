"use strict";

import * as Sequelize from "sequelize";
import { Model } from "sequelize";
import { reservEmailModel } from "interface/types/models/reservation.model.types";

module.exports = (sequelize: any, DataTypes: any) => {
  class reservEmail
    extends Model<reservEmailModel>
    implements reservEmailModel
  {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    game_code!: number;
    language!: string;
    inflow?: string | null;
    email!: string;
    ipaddress!: string;
    device!: string | null;
    regist_date!: Date;
    invite_code?: string | null;
    static associate(models: any) {
      // define association here

    }
  }
  reservEmail.init(
    {
      game_code: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
      },
      language: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      inflow: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      ipaddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      device: {
        type: DataTypes.STRING,
      },
      invite_code: {
        type: DataTypes.STRING,
      }
    },
    {
      sequelize,
      modelName: "reservEmail",
      tableName: "advance_reservation_email",
      timestamps: false
    }
  );
  return reservEmail;
};

