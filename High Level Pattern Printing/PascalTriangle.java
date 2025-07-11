
public class PascalTriangle {

    public static void printPascalsTriangle(int n) {
        for (int i = 0; i < n; i++) {
            // Print leading spaces
            for (int s = 0; s < n - i - 1; s++) {
                System.out.print(" ");
            }

            int value = 1;
            for (int j = 0; j <= i; j++) {
                System.out.print(value + " ");
                value = value * (i - j) / (j + 1);
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        int rows = 5;
        printPascalsTriangle(rows);
    }
}
