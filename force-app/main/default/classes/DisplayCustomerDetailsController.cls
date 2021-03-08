public with sharing class DisplayCustomerDetailsController {

    public class CustomerDetails {
        @AuraEnabled
        public String id;
        @AuraEnabled
        public String username;
        @AuraEnabled
        public string firstName;
        @AuraEnabled
        public String lastName;
    }

    public static List<CustomerDetails> getCustomerDetails() { 

    }

}
