use std::process::Command;

use serde::Deserialize;

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
      open_editor_with_folder
    ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
