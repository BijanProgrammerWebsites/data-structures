public class Example15 {
    public static void main(String[] args) {
        int n = Integer.MAX_VALUE;

        for (int i = 1; i <= n; i *= 2) {
            for (int j = i; j > 0; j--) {
                System.out.println("Hello, friend!");
            }
        }
    }
}
