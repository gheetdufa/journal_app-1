package backend;
import java.util.Scanner;
//import okhttp3.*;

public class backend {
    private String response1;

    public backend(){
        
    }
    public static void main(System [] args){
        Scanner scan = new Scanner(System.in);
        System.out.println("How is your day going?");
        String response1 = scan.nextLine();
    }

    public String getResponse(){
        return new String (response1);
    }
}