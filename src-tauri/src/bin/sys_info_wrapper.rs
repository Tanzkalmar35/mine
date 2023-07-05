use sysinfo::{System, SystemExt};

#[tauri::command]
pub(crate) fn get_memory_usage() -> String {
    let mut sys: System = System::new_all();
    sys.refresh_memory();

    let info: u64 = calculate_usage(sys.used_memory(), sys.total_memory()) as u64;
    return info.to_string();
}

pub(crate) fn get_swap_usage() -> String {
    let mut sys: System = System::new_all();
    sys.refresh_all();

    let info: u64 = calculate_usage(sys.used_swap(), sys.total_swap()) as u64;
    return info.to_string();
}

fn calculate_usage(used: u64, total: u64) -> f64 {
    return (used as f64 / total as f64) * 100.0;
}

#[tauri::command]
pub(crate) fn get_os_type() -> String {
    let mut sys: System = System::new_all();
    sys.refresh_all();

    return sys.name().unwrap_or_default();
}

fn main() {}