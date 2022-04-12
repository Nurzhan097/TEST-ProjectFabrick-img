import http from "../http-common";

class Splash {
    // get one random img
    getRandomImage() {
        return http.get(`photos/random`);
    }

    // get many imgs
    getImages() {
        return http.get(`photos/?per_page=8&query=girl`);
    }

    // get image by id
    getImage(id) {
        return http.get(`photos/${id}`);
    }


}

export default new Splash