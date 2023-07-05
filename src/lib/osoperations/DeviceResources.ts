import {invoke} from "@tauri-apps/api/tauri";

/**
 * Returns the memory usage of the device
 */
export async function getMemoryResource(): Promise<String> {
    let memoryUsage: string = "0";
    try {
        await invoke('get_memory_usage').then((result): void => {
            memoryUsage = result.toString();
        });
    } catch (error) {
        console.error('Error while calling get_memory_usage:', error);
    }
    return memoryUsage;
}

/**
 * Returns the Cpu usage of the device
 */
export async function getSwapUsage(): Promise<String> {
    let cpuUsage: string = "0";
    try {
        await invoke('get_swap_usage').then((result): void => {
            cpuUsage = result.toString();
        });
    } catch (error) {
        console.error('Error while calling get_cpu_usage:', error);
    }
    return cpuUsage;
}

/**
 * Returns the OS type of the device
 */
export async function getOsType(): Promise<String> {
    let osType: string = "0";
    try {
        await invoke('get_os_type').then((result): void => {
            osType = result.toString();
        });
    } catch (error) {
        console.error('Error while calling get_os_type:', error);
    }
    return osType;
}