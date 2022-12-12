#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod core;

fn main() {
    let connection = core::database::connection();
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            core::save,
            core::getSerialPorts
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
        
}