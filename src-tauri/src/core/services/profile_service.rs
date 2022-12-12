

pub mod ProfileService{
    use diesel::sqlite::SqliteConnection;
    use diesel::RunQueryDsl;

    fn save(profile: crate::core::profile::Profile, connection: &mut SqliteConnection){
        
        let setting = crate::core::profile::setting::NewSetting  {
            brightness: profile.setting.brightness,
            animation: profile.setting.animation,
            token: profile.setting.token,
            animation_delay: profile.setting.animation_delay,
            animated_from_current_song: profile.setting.animated_from_current_song
        };

        diesel::insert_into(crate::core::models::schema::settings::table)
        .values(&setting)
        .execute(connection);
        
    }
} 