
public class AlphbetHourGlass {

    public static void main(String[] args) {
        int n = 5;

        // Top half
        for (int i = 0; i < n; i++) {
            for (int s = 0; s < i; s++) {
                System.out.print(" ");
            }
            for (int j = 0; j < n - i; j++) {
                System.out.print((char) ('A' + j));
            }
            for (int j = n - i - 2; j >= 0; j--) {
                System.out.print((char) ('A' + j));
            }
            System.out.println();
        }

        for (int i = n - 2; i >= 0; i--) {
            for (int s = 0; s < i; s++) {
                System.out.print(" ");
            }
            for (int j = 0; j < n - i; j++) {
                System.out.print((char) ('A' + j));
            }
            for (int j = n - i - 2; j >= 0; j--) {
                System.out.print((char) ('A' + j));
            }
            System.out.println();
        }
    }
}
