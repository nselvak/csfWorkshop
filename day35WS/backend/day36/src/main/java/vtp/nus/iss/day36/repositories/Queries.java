package vtp.nus.iss.day36.repositories;

public class Queries {

    public static final String SQL_SELECT_BOOK_ID_TITLE =
        "select book_id, title from book2018 order by title asc limit ? offset ?";
    

    public static final String SQL_SELECT_BOOK_DETAILS =
        "select book_id, title, authors, description, edition, format, pages, rating, rating_count, review_count, genres, image_url  from book2018 where book_id = ?";

}
