use diesel::prelude::*;

#[derive(Queryable)]
pub struct Setting {
    pub id: u32,
    pub name: String,
    pub port: String,
    pub light: bool,
    pub leds: i32,
    pub is_ambiant_light: bool,
    pub colors: Vec<String>,
    pub wifi_access_point: String,
    pub wifi_password: String,
    pub ip_address: String
}