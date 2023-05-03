"use strict";

import * as Sequelize from "sequelize";
import { Model } from "sequelize";
import { subscribeModel } from "interface/types/models/subscribe.model.types";

module.exports = (sequelize: any, DataTypes: any) => {
  class subscribe
    extends Model<subscribeModel>
    implements subscribeModel
  {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    game_code!: string;
    page_lang!: string;
    inflow?: string | null;
    phone?: string | null;
    email!: string;
    ipaddress!: string;
    birth!: string | null;
    agree_yn!: number | null;
    regist_date?: Date;
    static associate(models: any) {
      // define association here

    }
  }
  subscribe.init(
    {
      game_code: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
      },
      page_lang: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      inflow: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      ipaddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      agree_yn: {
        type: DataTypes.NUMBER,
      },
    },
    {
      sequelize,
      modelName: "subscribe",
      tableName: "subscriber_info",
      timestamps: false
    }
  );
  return subscribe;
};

