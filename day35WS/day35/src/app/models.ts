export interface BookSummary {
    book_id: string
    title: string
}

export interface Details {
    book_id: string;
    title: string
    authors: string
    description: string
    edition: string
    format : string
    pages: number; 
    rating : number; 
    rating_count : number; 
    review_count : number; 
    genres : string; 
    image_url : string;
}