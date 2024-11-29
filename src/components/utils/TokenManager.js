import { useEffect } from "react";

const REFRESH_INTERVAL = 10 * 60 * 1000;
const TokenManager = ({ refreshToken }) => {
    useEffect(() => {
        const callRefreshToken = () => {
          refreshToken()
            .unwrap()
            .then((response) => {
              console.log("Token refreshed successfully", response);
              localStorage.setItem("lastRefreshTime", Date.now().toString());
            })
            .catch((err) => {
              console.error("Error refreshing token:", err);
            });
        };
    
        const setupInterval = () => {
          const lastRefreshTime = parseInt(localStorage.getItem("lastRefreshTime"), 10);
          const currentTime = Date.now();
    
          if (!lastRefreshTime || currentTime - lastRefreshTime >= REFRESH_INTERVAL) {
            callRefreshToken();
          }
    
          const intervalId = setInterval(() => {
            callRefreshToken();
          }, REFRESH_INTERVAL);
    
          return intervalId;
        };
    
        const intervalId = setupInterval();
    
        return () => clearInterval(intervalId); 
      }, [refreshToken]);
    
      return null;
}

export default TokenManager