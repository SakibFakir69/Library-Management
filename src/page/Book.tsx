import React, { useState, useRef } from "react";
import {
  useGetAllbooksQuery,
  useDeleteBookMutation,
  useUpdateBookMutation,
} from "@/redux/api/allBookApi";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Function from "@/layouts/Function";

function Book() {
  const { data, isLoading } = useGetAllbooksQuery(null);
  const [deleteBook] = useDeleteBookMutation();
  const [updateBook, { isLoading: isUpdating }] = useUpdateBookMutation();

  const [selectedBook, setSelectedBook] = useState<any | null>(null);

  const modalToggleRef = useRef<HTMLInputElement>(null);

  if (isLoading) return <p>Loading...</p>;

  const books = data?.data || [];

  const handleDelete = async (id: string) => {
    try {
      await deleteBook(id).unwrap();
      console.log("Deleted successfully");
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  const handelUpdate = async () => {
    try {
      if (!selectedBook?._id) return;

      const { _id, ...fields } = selectedBook; 

      await updateBook({ id: _id, data: fields }).unwrap();

      console.log("Updated");

      // Close modal checkbox
      if (modalToggleRef.current) {
        modalToggleRef.current.checked = false;
      }
      setSelectedBook(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6">

      <div>
        <Function/>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Genre</TableHead>
            <TableHead>Available</TableHead>
            <TableHead>Copies</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {books.length > 0 ? (
            books.map((book: any) => (
              <TableRow key={book._id}>
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.genre}</TableCell>
                <TableCell>{book.available ? "Yes" : "No"}</TableCell>
                <TableCell>{book.copies}</TableCell>
                <TableCell className="flex items-center gap-2">
                  {/* Delete Button */}
                  <button onClick={() => handleDelete(book._id)}>
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/plasticine/100/filled-trash.png"
                      alt="Delete"
                    />
                  </button>
                  <img width="50" height="50" src="https://img.icons8.com/fluency/50/book.png" alt="book"/>

                  {/* Modal Trigger */}
                  <label
                    htmlFor="edit_modal"
                    className="cursor-pointer"
                    onClick={() => setSelectedBook(book)}
                  >
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/stencil/50/create-new.png"
                      alt="Edit"
                    />
                  </label>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-center">
                No books found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* DaisyUI Modal */}
      <input
        type="checkbox"
        id="edit_modal"
        ref={modalToggleRef}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit Book</h3>

          {selectedBook && (
            <div className="mt-4 space-y-2">
              <div>
                <label className="font-medium">Title:</label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={selectedBook.title}
                  onChange={(e) =>
                    setSelectedBook({ ...selectedBook, title: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="font-medium">Author:</label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={selectedBook.author}
                  onChange={(e) =>
                    setSelectedBook({ ...selectedBook, author: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="font-medium">Genre:</label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={selectedBook.genre}
                  onChange={(e) =>
                    setSelectedBook({ ...selectedBook, genre: e.target.value })
                  }
                />
              </div>
            </div>
          )}

          <div className="modal-action">
            <label htmlFor="edit_modal" className="btn">
              Close
            </label>
            <button className="btn btn-primary" onClick={handelUpdate}>
              {isUpdating ? " loading" : " Update"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
