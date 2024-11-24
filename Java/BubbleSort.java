import java.util.Arrays; // Import the array data structure

public class BubbleSort {

    void bubbleSort(String[][] myStateCapitals) {
        int n = myStateCapitals.length;

        //first loop traverses to the end of the list
        //remember arrays start  at 0!
        for (int i = 0; i < n-1; i++) {

            //next, go to the next-to-last element
            for (int j = 0; j < n-i-1; j++) {

                //compare.
                //if j (e.g., 11) is greater than j+1 (3)
                //then swap.

                // this comparison uses the compareTo method as we are now comparing strings
                // instead of integers, compareTo returns 0 if strings are equal, a value less
                // than 0 if the string is less than the next, and a value greater than 0 if the
                // string is greater than the next (lexicographically)
                int result = myStateCapitals[j][1].compareTo(myStateCapitals[j+1][1]);
                if (result > 0) {
                    //swap myStateCapitals[j+1] and myStateCapitals[j]
                    //these steps create a temporary holding variable,
                    //then flip one to the other
                    String[] temp = myStateCapitals[j];
                    myStateCapitals[j] = myStateCapitals[j+1];
                    myStateCapitals[j+1] = temp;
                }
            }
        }
    }
    //This method prints the myStateCapitals array
    void printMyArray(String[][] myStateCapitals) {
        for (String[] myStateCapital : myStateCapitals) {
            System.out.println(Arrays.toString(myStateCapital));
        }
    }

}
