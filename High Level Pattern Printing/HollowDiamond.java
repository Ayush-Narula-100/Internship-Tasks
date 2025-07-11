
public class HollowDiamond {

    public static void main(String[] args) {
        int n = 5;

        // Upper half
        for (int i = 1; i <= n; i++) {
            for (int s = 1; s <= n - i; s++) {
                System.out.print(" ");
            }
            if (i == 1) {
                System.out.println("*");
            } else {
                System.out.print("*");
                for (int j = 1; j <= 2 * i - 3; j++) {
                    System.out.print(" ");
                }
                System.out.println("*");
            }
        }

        // Middle
        for (int i = 1; i <= 2 * n - 1; i++) {
            System.out.print("*");
        }
        System.out.println();

        // Lower half
        for (int i = n; i >= 1; i--) {
            for (int s = 1; s <= n - i; s++) {
                System.out.print(" ");
            }
            if (i == 1) {
                System.out.println("*");
            } else {
                System.out.print("*");
                for (int j = 1; j <= 2 * i - 3; j++) {
                    System.out.print(" ");
                }
                System.out.println("*");
            }
        }
    }
}
