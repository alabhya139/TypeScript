//class for facebook profile about section
var FacebookProfile = /** @class */ (function () {
    //constructor for this class
    function FacebookProfile(workPlace, professionalSkills, University, HighSchool, currentCity, previousPlaces, mobilePhones, Email, Address, publicKey, webSites, socialLinks, dateOfBirth, monthOfBirth, yearOfBirth, Gender, Languages, ReligiousViews, politicalViews, profileName, nickName, about, favouriteQuotes, bloodGroup, Relationship, familyMembers) {
        var _this = this;
        //method to get date of birth
        this.getDateOfBirth = function () {
            return _this.dateOfBirth + " " + _this.monthOfBirth + " " + _this.yearOfBirth;
        };
        //method to get mobile number
        this.getMobileNumber = function () {
            return _this.mobilePhones;
        };
        //method to get email
        this.getEmail = function () {
            return _this.Email;
        };
        //method to get gender of user
        this.getGender = function () {
            return _this.Gender;
        };
        //method to get bloodgroup of user
        this.getBloodGroup = function () {
            return _this.bloodGroup;
        };
        //method to get family members of user
        this.getFamilyMember = function () {
            return _this.familyMembers;
        };
        this.workPlace = workPlace;
        this.professionalSkills = professionalSkills;
        this.University = University;
        this.HighSchool = HighSchool;
        this.currentCity = currentCity;
        this.previousPlaces = previousPlaces;
        this.mobilePhones = mobilePhones;
        this.Email = Email;
        this.Address = Address;
        this.publicKey = publicKey;
        this.webSites = webSites;
        this.socialLinks = socialLinks;
        this.dateOfBirth = dateOfBirth;
        this.monthOfBirth = monthOfBirth;
        this.yearOfBirth = yearOfBirth;
        this.Gender = Gender;
        this.Languages = Languages;
        this.ReligiousViews = ReligiousViews;
        this.politicalViews = politicalViews;
        this.profileName = profileName;
        this.nickName = nickName;
        this.about = about;
        this.favouriteQuotes = favouriteQuotes;
        this.bloodGroup = bloodGroup;
        this.Relationship = Relationship;
        this.familyMembers = familyMembers;
    }
    return FacebookProfile;
}());
