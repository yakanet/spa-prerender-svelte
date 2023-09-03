
export function isRestaurantOpen(restaurant: { close_hour?: string | null, open_hour?: string | null }, currentTime = new Date().toISOString().substring(11, 19)) {
    if (!restaurant.close_hour || !restaurant.open_hour) {
        return true;
    }
    if (restaurant.open_hour.localeCompare(restaurant.close_hour) < 0) {
        return (
            restaurant.close_hour.localeCompare(currentTime) >= 0 &&
            restaurant.open_hour.localeCompare(currentTime) <= 0
        );
    } else {
        return (
            restaurant.close_hour.localeCompare(currentTime) >= 0 ||
            restaurant.open_hour.localeCompare(currentTime) <= 0
        );
    }
}