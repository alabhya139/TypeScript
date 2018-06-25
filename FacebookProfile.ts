
//class for facebook profile about section
class FacebookProfile{
    public workPlace: string[];             //worked on workplace
    public professionalSkills: string[];                //professional skills of user
    public University: string[];                //university attended by user
    public HighSchool: string[];                //high school attended by user
    public currentCity: string;                 //current city of user
    public previousPlaces: string[];                //previous places user lived in
    private mobilePhones: number[];             //mobile number of user
    private Email: string[];                //email of user
    public Address: string;                 //Address of user
    public publicKey: string;               //public key provided by user
    public webSites: string[];              //websites of user
    public socialLinks: string[];               //social links of user
    protected dateOfBirth: number;          //date of birth of user
    protected monthOfBirth: string;         //month of birth of user
    private yearOfBirth: number;            //year of birth of user
    private Gender: string;                 //gender of user
    public Languages: string[];             //languages user speaks
    public ReligiousViews: string;          //religious views of user
    public politicalViews: string;          //political views of user
    public profileName: string;             //Name of user
    public nickName: string[];              //Nick Name of user
    public about: string;                   //About user
    public favouriteQuotes: string;         // Quotes by user
    private bloodGroup: string;             // blood group of user
    public Relationship: string;            // relationship Status of user
    protected familyMembers: string[];              //family members of user

    //constructor for this class
    constructor(workPlace: string[], professionalSkills: string[], University: string[],
        HighSchool: string[], currentCity: string, previousPlaces: string[],
        mobilePhones: number[], Email: string[], Address: string, publicKey: string, webSites: string[],
        socialLinks: string[], dateOfBirth: number, monthOfBirth: string, yearOfBirth: number, Gender: string,
        Languages: string[], ReligiousViews: string, politicalViews: string, profileName: string,
        nickName: string[], about: string, favouriteQuotes: string, bloodGroup: string,
        Relationship: string, familyMembers: string[]) {

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

    //method to get date of birth
    getDateOfBirth = () => {
        return `${this.dateOfBirth} ${this.monthOfBirth} ${this.yearOfBirth}`;
    }

    //method to get mobile number
    getMobileNumber = () => {
        return this.mobilePhones;
    }

    //method to get email
    getEmail = () => {
        return this.Email;
    }

    //method to get gender of user
    getGender = () => {
        return this.Gender;
    }

    //method to get bloodgroup of user
    getBloodGroup = ()=>{
        return this.bloodGroup;
    }

    //method to get family members of user
    getFamilyMember = ()=>{
        return this.familyMembers
    }

}