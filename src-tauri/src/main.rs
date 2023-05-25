
use std::process::Command;
use serde::Deserialize;

#[derive(Deserialize)]
#[serde(rename_all = "snake_case")]
struct OpenIntelliJWithFolderArgs {
    folder_path: String,
}

#[tauri::command]
fn open_intellij_with_folder(args: OpenIntelliJWithFolderArgs) {
    let folder_path = &args.folder_path;
    let output = Command::new("C:/Program Files/JetBrains/IntelliJ IDEA 2023.1/bin/idea64.exe")
        .arg(folder_path)
        .output()
        .expect("Failed to execute IntelliJ command");

    if output.status.success() {
        println!("IntelliJ opened the folder: {}", folder_path);
    } else {
        println!("Failed to open folder in IntelliJ: {}", folder_path);
    }
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
      open_intellij_with_folder
    ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
