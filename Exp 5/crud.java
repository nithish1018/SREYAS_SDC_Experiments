import java.sql.*;

public class crud {
    static final String DB_URL = "jdbc:mysql://localhost:3306";
    static final String USER = "root";
    static final String PASS = "root";

    public static void main(String[] args) {
        Connection conn = null;
        Statement stmt = null;
        try {
            System.out.println("Connecting to database");
            conn = DriverManager.getConnection(DB_URL, USER, PASS);

            System.out.println("Creating table");
            stmt = conn.createStatement();
            String sql = "CREATE TABLE IF NOT EXISTS users " +
                         "(id INT PRIMARY KEY AUTO_INCREMENT, " +
                         "name VARCHAR(255), " +
                         "email VARCHAR(255))";
            stmt.executeUpdate(sql);

            System.out.println("Inserting a record");
            sql = "INSERT INTO users (name, email) VALUES ('spiderman', 'multiverse@gmail.com')";
            stmt.executeUpdate(sql);

            System.out.println("Updating a record");
            sql = "UPDATE users SET email='marvel@gmail.com' WHERE name='spiderman'";
            stmt.executeUpdate(sql);

            System.out.println("Retrieving records");
            sql = "SELECT id, name, email FROM users";
            ResultSet rs = stmt.executeQuery(sql);

            while (rs.next()) {
                int id = rs.getInt("id");
                String name = rs.getString("name");
                String email = rs.getString("email");
                System.out.println("ID: " + id + ", Name: " + name + ", Email: " + email);
            }

            System.out.println("Deleting a record...");
            sql = "DELETE FROM users WHERE name='spiderman'";
            stmt.executeUpdate(sql);
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                if (stmt != null) stmt.close();
                if (conn != null) conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        System.out.println("Exit.");
    }
}
