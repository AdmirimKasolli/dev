import { logout } from "../../../scripts/login-scripts";
const url = "https://localhost:5443/debt/";


export const getDebts = (notification, navigator, proceeding)=>{
    fetch(url + "getDebts", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include"
    })
        .then(response => {
            if (response.status === 200) {
                return response.json()
            } else if (response.status === 401) {
                notification.add("Session is over!", { variant: "error" });
                setTimeout(notification.close, 3000);
                logout(navigator, notification);
            } else {
                notification.add("Server is not responding", { variant: "error" });
                setTimeout(notification.close, 3000);
            }
        })
        .then(data=>{
            if(data)
                proceeding(data)
        })
        .catch(err => {
            notification.add("Problem with the server!", { variant: "error" });
            setTimeout(notification.close, 3000);
        })
}
