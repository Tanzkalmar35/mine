mod sys_info_wrapper;
mod open_application;

#[tauri::command]
fn get_memory_usage() -> String {
    return sys_info_wrapper::get_memory_usage();
}

#[tauri::command]
fn get_cpu_usage() -> String {
    return sys_info_wrapper::get_cpu_usage();
}

#[tauri::command]
fn get_os_type() -> String {
    return sys_info_wrapper::get_os_type();
}

#[tauri::command]
fn open_editor_with_folder(args: open_application::OpenEditorWithFolderArgs) {
    open_application::open_editor_with_folder(args);
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
