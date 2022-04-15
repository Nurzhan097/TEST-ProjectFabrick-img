import http from "../http-common";

class Splash {
    // get one random img
    getRandomImage() {
        return http.get(`photos/random`);
    }

    // get many imgs
    getImages() {
        return http.get(`photos/?query="girl"&per_page=8`);
    }

    // search imgs
    searchImages(text, page = 1) {
        return http.get(`search/photos/?query=${text}&page=${page}&per_page=8`);
    }

    // get image by id
    getImage(id) {
        return http.get(`photos/${id}`);
    }



}

export default new Splash