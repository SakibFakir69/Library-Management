
import { type PostTypes } from "@/types/postTypes";

import { useForm } from "react-hook-form";
import { usePostBooksMutation } from "@/redux/api/allBookApi";
import { Input } from "@/components/ui/input";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

function Function() {

  // loading , modal , ui , ux , logic , . Borrow Book , /borrow-summary


  const [postBooks, ] = usePostBooksMutation();

  // Correct ref type for <dialog>
  const useModalRef = useRef<HTMLDialogElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostTypes>();

  const onSubmit = async (data: PostTypes) => {
 

     const finalData = {
    ...data,
    available: true, 
  };

    try {
      await postBooks(finalData).unwrap();
      toast.success("Add successfully");

      // Close modal after successful submit
      useModalRef.current?.close();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-10 ">
      <section className="flex justify-between">
        <div className="md:text-4xl text-xl font-semibold"> Library Books</div>

        <div className="flex justify-between gap-x-10">
          <Input placeholder="🔎 Search your books" />

          {/* Use ref to open modal */}
          <button
            className="btn "
            onClick={() => useModalRef.current?.showModal()}
          >
            Add Book
          </button>
 <Toaster/>
          <dialog ref={useModalRef} id="my_modal_1" className="modal">
            <div className="modal-box">
              <div className="modal-action p-2 ">

                <div className="flex flex-col justify-center items-center w-full ">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex justify-center items-center flex-col gap-y-3 w-full"
                  >
                    <input
                      className="md:w-2/3 border py-2"
                      {...register("title", { required: "Title is required" })}
                      placeholder="Enter your book title"
                    />
                    {errors.title && (
                      <p className="text-red-500">{errors.title.message}</p>
                    )}

                    <input
                      className="md:w-2/3 px-10 border py-2"
                      {...register("author", { required: "Author is required" })}
                      placeholder="Enter Author"
                    />
                    {errors.author && (
                      <p className="text-red-500">{errors.author.message}</p>
                    )}

                    <input
                      className="md:w-2/3 px-10 border py-2"
                      {...register("isbn", {
                        required: "ISBN is required",
                      })}
                      placeholder="Enter isbn"
                    />
                    {errors.isbn && (
                      <p className="text-red-500">{errors.isbn.message}</p>
                    )}

                    <textarea
                      className="md:w-2/3 px-10 border py-6"
                      {...register("description", {
                        required: "Description is required",
                      })}
                      placeholder="Enter your description"
                    />
                    {errors.description && (
                      <p className="text-red-500">{errors.description.message}</p>
                    )}

                    <fieldset className="fieldset md:w-2/3 border">
                      <select
                        {...register("genre", { required: "Genre is required" })}
                        defaultValue=""
                        className="select w-full"
                      >
                        <option value="" disabled>
                          Pick
                        </option>
                        <option value="FICTION">FICTION</option>
                        <option value="NON_FICTION">NON_FICTION</option>
                        <option value="SCIENCE">SCIENCE</option>
                        <option value="HISTORY">HISTORY</option>
                        <option value="BIOGRAPHY">BIOGRAPHY</option>
                        <option value="FANTASY">FANTASY</option>
                      </select>
                    </fieldset>
                    {errors.genre && (
                      <p className="text-red-500">{errors.genre.message}</p>
                    )}

                    <input
                      className="w-2/3 px-10 border py-2"
                      {...register("copies", {
                        required: "Copies is required",
                        valueAsNumber: true,
                      })}
                      placeholder="Enter copies"
                    />
                    {errors.copies && (
                      <p className="text-red-500">{errors.copies.message}</p>
                    )}

                    <div className="flex gap-2">
                      <input className="btn" type="submit" />

                      <button
                        type="button"
                        className="btn"
                        onClick={() => useModalRef.current?.close()}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </dialog>
        </div>
      </section>
    </div>
  );
}

export default Function;
