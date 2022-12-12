use self::profile::Profile;
use services::port::SerialPort;

pub mod profile;
pub mod models;
pub mod services;
pub mod database;

#[tauri::command]
pub fn save(profile: Profile){
    println!("Profile Name: {}", profile.name);
    println!("Profile Colors:");
    for color in profile.colors {
        println!("\t{}", color);
    }
}

#[tauri::command]
pub fn getSerialPorts() -> Vec<String>{
    return SerialPort::getSerialPorts();
}