use setting::Setting;

pub mod setting;

#[derive(serde::Deserialize)]
pub struct Profile{
    pub name: String,
    pub port: String,
    pub light: bool,
    pub leds: u8,
    pub is_ambiant_light: bool,
    pub colors: Vec<String>,
    pub wifi_access_point: String,
    pub wifi_password: String,
    pub ip_address: String,
    pub setting: Setting
}

pub struct NewProfile{
    pub name: String,
    pub port: String,
    pub light: bool,
    pub leds: u8,
    pub is_ambiant_light: bool,
    pub colors: Vec<String>,
    pub wifi_access_point: String,
    pub wifi_password: String,
    pub ip_address: String,
    pub setting: u32
}