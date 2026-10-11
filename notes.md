npx jest isMirror.test.js

package.json says what your project needs.
package-lock.json records exactly what was installed.

git config --global user.name
git config --global user.email
git config --global --list

git config user.name
git config user.email

//global
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

//local
git config user.name "Your Name"
git config user.email "you@example.com"

git push -u origin master

mvn test

Snake case: space_week.py ✅ (recommended)
PascalCase: SpaceWeek.py
camelCase: spaceWeek.py

Java recommends PascalCase for class names and camelCase for method names.

| Type          | Recommended style | Example          |
| ------------- | ----------------- | ---------------- |
| Class name    | PascalCase        | `HexToDecimal`   |
| Method name   | camelCase         | `hexToDecimal()` |
| Variable name | camelCase         | `hexValue`       |
| Constant      | UPPER_SNAKE_CASE  | `MAX_VALUE`      |

For your problem, write:

Java
public class Main {
    public static int hexToDecimal(String hex) {
        return Integer.parseInt(hex, 16);
    }
}


