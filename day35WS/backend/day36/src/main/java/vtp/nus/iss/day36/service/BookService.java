package vtp.nus.iss.day36.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import vtp.nus.iss.day36.model.Book;
import vtp.nus.iss.day36.model.Details;
import vtp.nus.iss.day36.repositories.ReadsRepo;

@Service
public class BookService {

    @Autowired
    private ReadsRepo repo;
    // @Tracnsaction for insert, update, delete
    public List<Book> search(Integer limit, Integer offset) {
        return repo.getBooks(limit, offset);
    }

    public Details getBookDetails(String bookid) {
        return repo.getDetails(bookid);
    }
    
}
