package vtp.nus.iss.day36.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Repository;

import vtp.nus.iss.day36.model.Book;
import vtp.nus.iss.day36.model.Details;

import static vtp.nus.iss.day36.repositories.Queries.*;

import java.util.LinkedList;
import java.util.List;

@Repository
public class ReadsRepo {

    @Autowired
    private JdbcTemplate template;

    public List<Book> getBooks(Integer limit, Integer offset) {

        
        List<Book> books = new LinkedList<>();
        SqlRowSet rs = template.queryForRowSet(SQL_SELECT_BOOK_ID_TITLE, limit, offset);

        while (rs.next()) {
            Book book = Book.create(rs);
            books.add(book);            
        }
        return books;

    }

    public Details getDetails(String bookid) {

        
        Details books = new Details();
        SqlRowSet rs = template.queryForRowSet(SQL_SELECT_BOOK_DETAILS, bookid);

        while (rs.next()) {
            books = Details.create(rs);
        }
        return books;

    }


    
}
