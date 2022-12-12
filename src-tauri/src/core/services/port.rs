
pub mod SerialPort{


    pub fn getSerialPorts() -> Vec<String>{
        let mut vec = Vec::new();
        let ports = serialport::available_ports().expect("Error while getting Ports");
        for port in ports {
            vec.push(String::from(port.port_name));
        }
        return vec;
    }

}