public class Main {
    public static int hexToDecimal(String hex) {
        return Integer.parseInt(hex, 16);
    }

    public static void main(String[] args) {
        System.out.println(hexToDecimal("A"));   // 10
        System.out.println(hexToDecimal("15"));  // 21
        System.out.println(hexToDecimal("2E"));  // 46
        System.out.println(hexToDecimal("FF"));  // 255
        System.out.println(hexToDecimal("A3F")); // 2623
    }
}