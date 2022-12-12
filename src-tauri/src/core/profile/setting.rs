use diesel::Insertable;
use serde::Deserialize;
use crate::core::models::schema::settings;

#[derive(Deserialize)]
pub struct Setting{
    pub brightness: i32,
    pub animation: i32,
    pub token: String,
    pub animation_delay: i32,
    pub animated_from_current_song: bool
}

#[derive(Insertable)]
#[diesel(table_name = settings)]
pub struct NewSetting{
    pub brightness: i32,
    pub animation: i32,
    pub token: String,
    pub animated_from_current_song: bool,
    pub animation_delay: i32
}
