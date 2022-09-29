package vtp.nus.iss.day36.model;

import java.io.StringReader;

import org.springframework.jdbc.support.rowset.SqlRowSet;

import jakarta.json.Json;
import jakarta.json.JsonObject;
import jakarta.json.JsonReader;

public class Book {

    String bookId;
    String title;


    public String getBookId() {
        return this.bookId;
    }

    public void setBookId(String bookId) {
        this.bookId = bookId;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public static Book convert(String json) {
        JsonReader reader = Json.createReader(new StringReader(json));
        JsonObject data = reader.readObject();

        final Book reg = new Book();


        return reg;
    }
    public static Book create(SqlRowSet rs) {
        Book bff = new Book();
        bff.setBookId(rs.getString("book_id"));
        bff.setTitle(rs.getString("title"));

        return bff;
    }

    public JsonObject toJson() {
        return Json.createObjectBuilder()
            .add("book_id", bookId)
            .add("title", title)
            .build();
    }

    
}
