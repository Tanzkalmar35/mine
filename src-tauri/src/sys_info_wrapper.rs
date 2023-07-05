use sysinfo::{CpuExt, System, SystemExt};

#[tauri::command]
pub(crate) fn get_memory_usage() -> String {
    let mut sys: System = System::new_all();
    sys.refresh_all();

    let info: u64 = calculate_memory(sys.used_memory(), sys.total_memory()) as u64;
    return info.to_string();
}

fn calculate_memory(used: u64, total: u64) -> f64 {
    return (used as f64 / total as f64) * 100.0;
}

#[tauri::command]
pub(crate) fn get_cpu_usage() -> String {
    let mut sys: System = System::new_all();
    sys.refresh_all();

    let info: u64 = sys.global_cpu_info().cpu_usage() as u64;
    return info.to_string();
}

#[tauri::command]
pub(crate) fn get_os_type() -> String {
    let mut sys: System = System::new_all();
    sys.refresh_all();

    return sys.name().unwrap_or_default();
}