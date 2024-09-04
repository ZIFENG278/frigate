const Antminer=()=>{
    const locationPath = window.location.protocol + '//' + window.location.hostname + ":8081"

    // src 为实际地址
    return <iframe style={{width: "100%", height: "100%"}} src={locationPath}></iframe>
}

export default Antminer