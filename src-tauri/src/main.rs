use std::process::Command;

use serde::Deserialize;
use sysinfo::{CpuExt, System, SystemExt};

#[tauri::command]
fn get_memory_usage() -> String {
    let mut sys: System = System::new_all();
    sys.refresh_all();

    let info: u64 = calculate_memory(sys.used_memory(), sys.total_memory()) as u64;
    return info.to_string();
}

fn calculate_memory(used: u64, total: u64) -> f64 {
    return (used as f64 / total as f64) * 100.0;
}

#[tauri::command]
fn get_cpu_usage() -> String {
    let mut sys: System = System::new_all();
    sys.refresh_all();

    let info: u64 = sys.global_cpu_info().cpu_usage() as u64;
    return info.to_string();
}

#[tauri::command]
fn get_os_type() -> String {
    let mut sys: System = System::new_all();
    sys.refresh_all();

    return sys.name().unwrap_or_default();
}

#[derive(Deserialize)]
#[serde(rename_all = "snake_case")]
struct OpenEditorWithFolderArgs {
    folder_path: String,
    editor_path: String,
}

#[tauri::command]
fn open_editor_with_folder(args: OpenEditorWithFolderArgs) {
    let folder_path = &args.folder_path;
    let editor_path = &args.editor_path;
    let output = Command::new(editor_path)
        .arg(folder_path)
        .output()
        .expect(&*("Failed to execute editor: ".to_owned() + { editor_path }));

    if output.status.success() {
        println!("editor opened the folder: {}", folder_path);
    } else {
        println!("Failed to open folder in the editor: {}", folder_path);
    }
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            get_memory_usage,
            get_cpu_usage,
            get_os_type,
            open_editor_with_folder
    ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
