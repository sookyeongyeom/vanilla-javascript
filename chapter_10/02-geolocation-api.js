// 사용자 위치를 기반으로 관광지 목록을 거리순으로 정렬

let tourlist = [
    {
        name: "오설록",
        addr: "제주특별자치도 서귀포시 안덕면 신화역사로 15",
        latitude: 33.3046315,
        longitude: 126.2888373,
    },
    {
        name: "섭지코지",
        addr: "제주특별자치도 서귀포시 성산읍 섭지코지로",
        latitude: 33.424214,
        longitude: 126.9289223,
    },
    {
        name: "성산일출봉",
        addr: "서귀포시 성산읍",
        latitude: 33.4580731,
        longitude: 126.9337452,
    },
    {
        name: "함덕해수욕장",
        addr: "제주특별자치도 제주시 조천읍 신북로",
        latitude: 33.5434402,
        longitude: 126.6610204,
    },
];

function getDistance(lat1, lon1, lat2, lon2, unit) {
    let radlat1 = (Math.PI * lat1) / 180;
    let radlat2 = (Math.PI * lat2) / 180;
    let radlon1 = (Math.PI * lon1) / 180;
    let radlon2 = (Math.PI * lon2) / 180;
    let theta = lon1 - lon2;
    let radtheta = (Math.PI * theta) / 180;
    let dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == "K") {
        dist = dist * 1.609344;
    }
    if (unit == "N") {
        dist = dist * 0.8684;
    }
    return dist;
}

if ("geolocation" in navigator) {
    // 위치 정보 사용 가능
    navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        for (let i = 0; i < tourlist.length; i++) {
            let distance = getDistance(
                latitude,
                longitude,
                tourlist[i].latitude,
                tourlist[i].longitude,
                "K"
            );
            tourlist[i].distance = distance;
        }
        tourlist.sort((a, b) => a.distance - b.distance);
    });
    console.log(tourlist);
} else {
    // 위치 정보 사용 불가능
}
