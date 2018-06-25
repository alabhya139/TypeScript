
//Class for Youtube Video Page
class YoutubeVideos{
    public videoId:string;              //Id of Video
    public videoTitle:string;           //Video Title
    public channelName:string;          //Name of Video Channel
    private numberOfViews:number;       //Number of Views on Video
    private numberOfLikes:number;       //Number of likes on video
    private numberOfDislikes:number;    //Number of Dislikes
    private isSubscribed:boolean;       //User is Subsribed or not
    private recieveNotifications:boolean;       //user will recieve notifications or not
    private AutoPlay:boolean;           //Autoplay is on or not
    private Category:string;            //Category of video
    private Licence:string;             //Licence of Video
    private publishDate:string;         //Date on which video is published
    private numberOfComments:number;    //Number of comments on Video
    public Description:string;          //Description about video
    private isLoggedIn:boolean;         //User is logged in or not

    constructor(videoId:string, videoTitle:string, channelName:string, numberOfViews:number, numberOfLikes:number, numberOfDislikes:number, isSubscribed:boolean, recieveNotifications:boolean, AutoPlay:boolean, Category:string, Licence:string, publishDate:string, numberOfComments:number, Description:string, isLoggedIn:boolean){
        this.videoId = videoId;
        this.videoTitle = videoTitle;
        this.channelName = channelName;
        this.numberOfViews = numberOfViews;
        this.numberOfLikes =numberOfLikes;
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

    //getter method for number of views
    getViews = ()=>{
        return this.numberOfViews;
    }

    //getter method for number of likes
    getLikes = ()=>{
        return this.numberOfLikes;
    }

    //getter method for number of dislikes
    getDislikes = ()=>{
        return this.numberOfDislikes;
    }

    //getter method for subscribed status
    getSubscribedStatus = ()=>{
        return this.isSubscribed;
    }

    //getter method for status of recieving notification or not
    getNotificationStatus = ()=>{
        return this.recieveNotifications;
    }

    //getter method for status of autoplay is on or not
    getAutoPlayStatus = ()=>{
        return this.AutoPlay;
    }

    //getter method for getting category information
    getCategory = ()=>{
        return this.Category;
    }

    //getter method for getting licence Information
    getLicenceInfo = ()=>{
        return this.Licence;
    }

    //getter method for getting date of publishing of video
    getDatePublished = ()=>{
        return this.publishDate;
    }

    //getter method for getting number of comments
    getCommentsNumber = ()=>{
        return this.numberOfComments;
    }

    //getter method for log in status
    getLogInStatus = ()=>{
        return this.isLoggedIn;
    }

    getRelatedVideos = ()=>{
        console.log("Method to get related videos");
    }
}