const mangayomiSources = [{
    "name": "Animeparadise",
    "lang": "en",
    "baseUrl": "https://animeparadise.moe",
    "apiUrl": "https://api.animeparadise.moe",
    "iconUrl": "https://www.google.com/s2/favicons?sz=128&domain=https://animeparadise.moe",
    "typeSource": "single",
    "itemType": 1,
    "version": "0.0.1",
    "pkgPath": "anime/src/en/animeparadise.js"
}];

class DefaultExtension extends MProvider {
    getHeaders(url) {
        throw new Error("getHeaders not implemented");
    }

    async requestAPI(slug){
        var api = `${this.source.apiUrl}/${slug}`
        var response = await new Client().get(api);
        var body = JSON.parse(response.body);
        return body;
    }

    async formList(slug){
        var jsonData = await this.requestAPI(slug);
        var list = [];
        jsonData.data.forEach(item => {
            list.push({
                "name": item.title,
                "link": item.link,
                "imageUrl": item.posterImage.original
            });
        })
        
        return {
            "list":list,
            "hasNextPage":false
        }

    }

    async getPopular(page) {
        return await this.formList('?sort={"rate": -1 }')
    }
    get supportsLatest() {
        throw new Error("supportsLatest not implemented");
    }
    async getLatestUpdates(page) {
        return await this.formList('?sort={"postDate": -1 }')
    }
    async search(query, page, filters) {
        throw new Error("search not implemented");
    }
    async getDetail(url) {
        throw new Error("getDetail not implemented");
    }
    // For novel html content
    async getHtmlContent(url) {
        throw new Error("getHtmlContent not implemented");
    }
    // Clean html up for reader
    async cleanHtmlContent(html) {
        throw new Error("cleanHtmlContent not implemented");
    }
    // For anime episode video list
    async getVideoList(url) {
        throw new Error("getVideoList not implemented");
    }
    // For manga chapter pages
    async getPageList(url) {
        throw new Error("getPageList not implemented");
    }
    getFilterList() {
        throw new Error("getFilterList not implemented");
    }
    getSourcePreferences() {
        throw new Error("getSourcePreferences not implemented");
    }
}
