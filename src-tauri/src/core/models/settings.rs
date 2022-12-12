use diesel::prelude::*;

#[derive(Queryable)]
pub struct Setting {
    pub id: u32,
    pub brightness: i32,
    pub animation: i32,
    pub token: String,
    pub animation_delay: i32,
    pub animated_from_current_song: bool
}