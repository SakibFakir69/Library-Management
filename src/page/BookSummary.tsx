import React from "react";
import { useGetborrowBooksQuery } from "@/redux/api/borrowBooksApi";

import {
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Table,
} from "@/components/ui/table";

function BookSummary() {
  const { data, isError, error, isLoading } = useGetborrowBooksQuery(null);
  console.log(data);

  const borrowData = data?.data || [];

  return (
    <div className="text-black bg-[#FFFFFF] md:p-10 border borde border-stone-200">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Book Title</TableHead>
            <TableHead>ISBN</TableHead>
            <TableHead>Total Quantity </TableHead>
          </TableRow>
        </TableHeader>

        {isLoading ? <div className="w-full flex justify-center items-center">Loading...</div> : ""}

        <TableBody className="">
          {borrowData?.map((borrow: any, key: number) => (
            <TableRow
              key={key}
              className="bg-[#F9FAFB]  border border-stone-300"
            >
              <TableCell>{borrow.book.title}</TableCell>
              <TableCell>{borrow.book.isbn}</TableCell>
              <TableCell>{borrow.totalQuantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default BookSummary;
