import java.util.Arrays; // Import the array data structure
import java.util.Scanner; // Import Scanner class for user entry

public class Main {
    public static void main(String[] args) {
        // Generate the 2D array of states and capitals
        String[][] myStateCapitals = {
                {"Alabama", "Montgomery"},
                {"Alaska", "Juneau"},
                {"Arizona", "Phoenix"},
                {"Arkansas", "Little Rock"},
                {"California", "Sacramento"},
                {"Colorado", "Denver"},
                {"Connecticut", "Hartford"},
                {"Delaware", "Dover"},
                {"Florida", "Tallahassee"},
                {"Georgia", "Atlanta"},
                {"Hawaii", "Honolulu"},
                {"Idaho", "Boise"},
                {"Illinois", "Springfield"},
                {"Indiana", "Indianapolis"},
                {"Iowa", "Des Moines"},
                {"Kansas", "Topeka"},
                {"Kentucky", "Frankfort"},
                {"Louisiana", "Baton Rouge"},
                {"Maine", "Augusta"},
                {"Maryland", "Annapolis"},
                {"Massachusetts", "Boston"},
                {"Michigan", "Lansing"},
                {"Minnesota", "Saint Paul"},
                {"Mississippi", "Jackson"},
                {"Missouri", "Jefferson City"},
                {"Montana", "Helena"},
                {"Nebraska", "Lincoln"},
                {"Nevada", "Carson City"},
                {"New Hampshire", "Concord"},
                {"New Jersey", "Trenton"},
                {"New Mexico", "Santa Fe"},
                {"New York", "Albany"},
                {"North Carolina", "Raleigh"},
                {"North Dakota", "Bismarck"},
                {"Ohio", "Columbus"},
                {"Oklahoma", "Oklahoma City"},
                {"Oregon", "Salem"},
                {"Pennsylvania", "Harrisburg"},
                {"Rhode Island", "Providence"},
                {"South Carolina", "Columbia"},
                {"South Dakota", "Pierre"},
                {"Tennessee", "Nashville"},
                {"Texas", "Austin"},
                {"Utah", "Salt Lake City"},
                {"Vermont", "Montpelier"},
                {"Virginia", "Richmond"},
                {"Washington", "Olympia"},
                {"West Virginia", "Charleston"},
                {"Wisconsin", "Madison"},
                {"Wyoming", "Cheyenne"}
        };
        // convert the multidimensional array to strings and print to the console to verify our list
        System.out.println(Arrays.deepToString(myStateCapitals));

        // instantiate the BubbleSort class, we will build this class in another file
        BubbleSort bubble = new BubbleSort();

        // call the bubbleSort function
        bubble.bubbleSort(myStateCapitals);
        System.out.println("Sorted myStateCapitals");

        // UNCOMMENT THIS TO VERIFY BUBBLE SORT WORKS
        // bubble.printMyArray(myStateCapitals);

        // // create the scanner object and string template the random state
        Scanner myObj = new Scanner(System.in);

        // set up a counting variable to track number of correct guesses
        int totalCount = 0;
        // loop through the 50 states
        for (int i = 0; i <= 49; i++) {
            // since we have the correct index at each interval we store the capital
            // this gives O(1) complexity which is more efficient than a search algorithm
            String correctAnswer = myStateCapitals[i][1];
            // string template a prompt for each interval
            System.out.println("Enter the capital for " + myStateCapitals[i][0]);
            // read user input and write a conditional block to check for correctness
            String userCapitalInput = myObj.nextLine();

            // user input is no longer case-sensitive, if input is correct we update
            // totalCount and return it back to the user
            if (userCapitalInput.equalsIgnoreCase(correctAnswer)) {
                System.out.println("That's correct!");
                totalCount = totalCount + 1;
                System.out.println("Total correct count: " + totalCount);
            } else {
                System.out.println("That's not right.");
            }
        }
    }
}