package vtp.nus.iss.day36.model;

import org.springframework.jdbc.support.rowset.SqlRowSet;

import jakarta.json.Json;
import jakarta.json.JsonObject;

public class Details {

    String book_id;
    String title;
    String authors;
    String description;
    String edition;
    String format; 
    Integer pages; 
    Float rating; 
    Integer rating_count; 
    Integer review_count; 
    String genres; 
    String image_url;


    public String getAuthors() {
        return this.authors;
    }

    public void setAuthors(String authors) {
        this.authors = authors;
    }

    public String getBookId() {
        return this.getBookId();
    }

    public void setBookId(String bookId) {
        this.book_id = bookId;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getEdition() {
        return this.edition;
    }

    public void setEdition(String edition) {
        this.edition = edition;
    }

    public String getFormat() {
        return this.format;
    }

    public void setFormat(String format) {
        this.format = format;
    }

    public Integer getPages() {
        return this.pages;
    }

    public void setPages(Integer pages) {
        this.pages = pages;
    }

    public Float getRating() {
        return this.rating;
    }

    public void setRating(float f) {
        this.rating = f;
    }

    public Integer getRating_count() {
        return this.rating_count;
    }

    public void setRating_count(Integer rating_count) {
        this.rating_count = rating_count;
    }

    public Integer getReview_count() {
        return this.review_count;
    }

    public void setReview_count(Integer review_count) {
        this.review_count = review_count;
    }

    public String getGenres() {
        return this.genres;
    }

    public void setGenres(String genres) {
        this.genres = genres;
    }

    public String getImage_url() {
        return this.image_url;
    }

    public void setImage_url(String image_url) {
        this.image_url = image_url;
    }

    public static Details create(SqlRowSet rs) {
        Details bff = new Details();
        bff.setBookId(rs.getString("book_id"));
        bff.setTitle(rs.getString("title"));
        bff.setAuthors(rs.getString("authors"));
        bff.setDescription(rs.getString("description"));
        bff.setEdition(rs.getString("edition"));
        bff.setFormat(rs.getString("format"));
        bff.setPages(rs.getInt("pages"));
        bff.setRating(rs.getFloat("rating"));
        bff.setRating_count(rs.getInt("rating_count"));
        bff.setReview_count(rs.getInt("review_count"));
        bff.setGenres(rs.getString("genres"));
        bff.setImage_url(rs.getString("image_url"));


        return bff;
    }

    public JsonObject toJson() {
        return Json.createObjectBuilder()
            .add("book_id", book_id)
            .add("title", title)
            .add("authors", authors)
            .add("description", description)
            .add("edition", edition)
            .add("format", format)
            .add("pages", pages)
            .add("rating", rating)
            .add("rating_count", rating_count)
            .add("review_count", review_count)
            .add("genres", genres)
            .add("image_url", image_url)
            .build();
    }


    
}
