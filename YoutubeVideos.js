//Class for Youtube Video Page
var YoutubeVideos = /** @class */ (function () {
    function YoutubeVideos(videoId, videoTitle, channelName, numberOfViews, numberOfLikes, numberOfDislikes, isSubscribed, recieveNotifications, AutoPlay, Category, Licence, publishDate, numberOfComments, Description, isLoggedIn) {
        var _this = this;
        //getter method for number of views
        this.getViews = function () {
            return _this.numberOfViews;
        };
        //getter method for number of likes
        this.getLikes = function () {
            return _this.numberOfLikes;
        };
        //getter method for number of dislikes
        this.getDislikes = function () {
            return _this.numberOfDislikes;
        };
        //getter method for subscribed status
        this.getSubscribedStatus = function () {
            return _this.isSubscribed;
        };
        //getter method for status of recieving notification or not
        this.getNotificationStatus = function () {
            return _this.recieveNotifications;
        };
        //getter method for status of autoplay is on or not
        this.getAutoPlayStatus = function () {
            return _this.AutoPlay;
        };
        //getter method for getting category information
        this.getCategory = function () {
            return _this.Category;
        };
        //getter method for getting licence Information
        this.getLicenceInfo = function () {
            return _this.Licence;
        };
        //getter method for getting date of publishing of video
        this.getDatePublished = function () {
            return _this.publishDate;
        };
        //getter method for getting number of comments
        this.getCommentsNumber = function () {
            return _this.numberOfComments;
        };
        //getter method for log in status
        this.getLogInStatus = function () {
            return _this.isLoggedIn;
        };
        this.getRelatedVideos = function () {
            console.log("Method to get related videos");
        };
        this.videoId = videoId;
        this.videoTitle = videoTitle;
        this.channelName = channelName;
        this.numberOfViews = numberOfViews;
        this.numberOfLikes = numberOfLikes;
        this.numberOfDislikes = numberOfDislikes;
        this.isSubscribed = isSubscribed;
        this.recieveNotifications = recieveNotifications;
        this.AutoPlay = AutoPlay;
        this.Category = Category;
        this.Licence = Licence;
        this.publishDate = publishDate;
        this.numberOfComments = numberOfComments;
        this.Description = Description;
        this.isLoggedIn = isLoggedIn;
    }
    return YoutubeVideos;
}());
