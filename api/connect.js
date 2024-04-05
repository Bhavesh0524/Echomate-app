import mysql from "mysql"

export const db = mysql.createConnection({
  host:"database-1.cj2iio84u413.ap-south-1.rds.amazonaws.com",
  user:"admin",
  password:"_JI_N{mQiUAtdiMDdvJ16y<XOAKA",
  database:"EchomateLiteDB"
})