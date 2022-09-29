package vtp.nus.iss.day36.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.json.Json;
import jakarta.json.JsonArrayBuilder;
import vtp.nus.iss.day36.model.Book;
import vtp.nus.iss.day36.model.Details;
import vtp.nus.iss.day36.service.BookService;

import java.util.List;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;


@RestController
@RequestMapping(path="/api/books", produces=MediaType.APPLICATION_JSON_VALUE)
public class BookRESTController {

    private Logger logger = Logger.getLogger(BookRESTController.class.getName());

    @Autowired
    private BookService svc;


    @GetMapping
    public ResponseEntity<String> getBooks(@RequestParam(defaultValue = "20") Integer limit, 
    @RequestParam(defaultValue = "0") Integer offset) {

        List<Book> books = svc.search(limit, offset);
        
        JsonArrayBuilder arr = Json.createArrayBuilder();
        for (Book book: books) 
            arr.add(book.toJson());
        return ResponseEntity.ok(arr.build().toString());
    }

    @GetMapping("{id}")
    public ResponseEntity<String> getDetails(@PathVariable String id) {

        Details book = svc.getBookDetails(id);
        
        JsonArrayBuilder arr = Json.createArrayBuilder();
        arr.add(book.toJson());
        return ResponseEntity.ok(arr.build().toString());
    }


    
}
