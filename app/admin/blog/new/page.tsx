"use client";
import React, { useState, useEffect } from "react";
import { createPost, getCategories, addCategory } from "@/lib/blogService";
import type { Category } from "@/lib/blogService";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";
import localFont from "next/font/local";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { app } from "@/lib/firebase";
import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import cloudinary from "@/lib/cloudinary";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  collection,
  query,
  where,
  getDocs,
  writeBatch,
  deleteField,
  doc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import BlogManagementSheet from "@/components/BlogManagementSheet";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor").then((mod) => mod.default),
  { ssr: false }
);

const clashDisplay = localFont({
  src: [
    {
      path: "../../../../app/fonts/ClashDisplay-Medium.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
  display: "swap",
});

const CustomSelect = ({
  categories,
  selectedCategory,
  onSelect,
  onDelete,
}: {
  categories: Category[];
  selectedCategory: string;
  onSelect: (id: string) => void;
  onDelete: (id: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative'>
      <button
        type='button'
        onClick={() => setIsOpen(!isOpen)}
        className='w-full p-4 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl focus:ring-2 focus:ring-[#F56E0F] focus:border-transparent transition duration-200 text-left flex justify-between items-center dark:text-gray-200'>
        <span>
          {selectedCategory
            ? categories.find((c) => c.id === selectedCategory)?.name ||
              "Select category"
            : "Select category"}
        </span>
        <svg
          className='fill-current h-4 w-4'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'>
          <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
        </svg>
      </button>

      {isOpen && (
        <div className='absolute z-10 w-full mt-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-lg'>
          <div className='py-2'>
            {categories.map((category) => (
              <div
                key={category.id}
                className='flex items-center justify-between px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer dark:text-gray-200'>
                <div
                  onClick={() => {
                    onSelect(category.id);
                    setIsOpen(false);
                  }}
                  className='flex-grow'>
                  {category.name}
                </div>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className='p-2 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-4 w-4'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                        />
                      </svg>
                    </button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className='dark:bg-gray-800'>
                    <AlertDialogHeader>
                      <AlertDialogTitle className='dark:text-gray-100'>
                        Delete Category
                      </AlertDialogTitle>
                      <AlertDialogDescription className='dark:text-gray-400'>
                        Are you sure you want to delete this category? All posts
                        in this category will be moved to "Unknown".
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className='dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600'>
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => onDelete(category.id)}
                        className='bg-red-500 hover:bg-red-600 text-white'>
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function NewBlogPost() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState<string | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const { toast } = useToast();
  const [isAddingCategory, setIsAddingCategory] = useState(false);

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Fetch categories when component mounts
    const fetchCategories = async () => {
      const cats = await getCategories();
      setCategories(cats);
    };
    fetchCategories();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    setIsLoggingIn(true);
    try {
      const auth = getAuth(app);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      setAuthError(error.message);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const processContent = async (content: string) => {
    const processedContent = await remark()
      .use(html)
      .use(remarkGfm)
      .process(content);
    return processedContent.toString();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const contentHtml = await processContent(content);

      const postData = {
        title,
        content,
        contentHtml,
        date: new Date().toISOString(),
        categoryId: selectedCategory,
        ...(imageUrl && { image: imageUrl }),
      };

      const id = await createPost(postData);

      toast({
        title: "Success",
        description: "Blog post published successfully!",
        className: `${clashDisplay.className} bg-green-500 text-white`,
        action: (
          <ToastAction
            altText='View post'
            className='text-white hover:text-green-100'>
            View post
          </ToastAction>
        ),
      });

      router.push(`/blog/${id}`);
    } catch (error) {
      console.error("Error creating post:", error);
      toast({
        title: "Error",
        description: "Failed to publish post. Please try again.",
        className: `${clashDisplay.className} bg-red-500 text-white`,
        action: (
          <ToastAction
            altText='Try again'
            className='text-white hover:text-red-100'>
            Try again
          </ToastAction>
        ),
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    const auth = getAuth(app);
    try {
      await signOut(auth);
      router.push("/blog");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleImageUpload = async (file: File) => {
    try {
      setUploadError(null);
      setUploadingImage(true);

      const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
      const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

      if (!cloudName || !uploadPreset) {
        throw new Error(
          `Cloudinary configuration is missing: ${
            !cloudName ? "CLOUD_NAME " : ""
          }${!uploadPreset ? "UPLOAD_PRESET" : ""}`
        );
      }

      // Create form data
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", uploadPreset);

      // Upload to Cloudinary
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`);
      }

      const data = await response.json();

      if (data.secure_url) {
        setImageUrl(data.secure_url);
      } else {
        throw new Error("No URL received from Cloudinary");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      setUploadError((error as Error).message);
      setImageUrl(""); // Clear any previous image
    } finally {
      setUploadingImage(false);
    }
  };

  const handleAddCategory = async () => {
    if (!newCategory.trim()) return;

    setIsAddingCategory(true);
    try {
      const newCategoryId = await addCategory(newCategory);
      const updatedCategories = await getCategories();
      setCategories(updatedCategories);
      setNewCategory("");
      setShowAddCategory(false);
      setSelectedCategory(newCategoryId);

      toast({
        title: "Success",
        description: "Category created successfully!",
        className: `${clashDisplay.className} bg-green-500 text-white`,
        action: (
          <ToastAction
            altText='Close'
            className='text-white hover:text-green-100'>
            Close
          </ToastAction>
        ),
      });
    } catch (error) {
      console.error("Error adding category:", error);
      toast({
        title: "Error",
        description: "Failed to create category. Please try again.",
        className: `${clashDisplay.className} bg-red-500 text-white`,
        action: (
          <ToastAction
            altText='Try again'
            className='text-white hover:text-red-100'>
            Try again
          </ToastAction>
        ),
      });
    } finally {
      setIsAddingCategory(false);
    }
  };

  const handleDeleteCategory = async (categoryId: string) => {
    try {
      // Update posts with this category to 'Unknown'
      const postsRef = collection(db, "posts");
      const q = query(postsRef, where("categoryId", "==", categoryId));
      const querySnapshot = await getDocs(q);

      // Batch update for better performance
      const batch = writeBatch(db);
      querySnapshot.docs.forEach((doc) => {
        batch.update(doc.ref, {
          categoryId: "unknown",
          categoryName: "Unknown",
        });
      });

      // Delete the category
      batch.delete(doc(db, "categories", categoryId));
      await batch.commit();

      // Refresh categories list
      const updatedCategories = await getCategories();
      setCategories(updatedCategories);

      // Reset selected category if it was deleted
      if (selectedCategory === categoryId) {
        setSelectedCategory("");
      }
    } catch (error) {
      console.error("Error deleting category:", error);
      alert("Failed to delete category");
    }
  };

  return (
    <div
      className={`${clashDisplay.className} min-h-screen bg-white dark:bg-gray-900 p-4 md:p-8`}>
      {!isAuthenticated ? (
        <form
          onSubmit={handleLogin}
          className='max-w-md mx-auto mt-20 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg'>
          <h2 className='text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100'>
            Login to continue
          </h2>
          <div className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
                Email
              </label>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full p-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[#F56E0F] focus:border-transparent dark:bg-gray-700 dark:text-gray-100'
                required
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
                Password
              </label>
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full p-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[#F56E0F] focus:border-transparent dark:bg-gray-700 dark:text-gray-100'
                required
              />
            </div>
            {authError && <p className='text-red-500 text-sm'>{authError}</p>}
            <button
              type='submit'
              disabled={isLoggingIn}
              className='w-full bg-[#F56E0F] text-white p-3 rounded-xl hover:bg-[#E55D00] transition duration-200 disabled:opacity-50'>
              {isLoggingIn ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      ) : (
        <div className='max-w-4xl mx-auto'>
          <div className='flex justify-between items-center mb-8'>
            <h1 className='text-3xl font-bold text-gray-900 dark:text-gray-100'>
              New Blog Post
            </h1>
            <div className='flex items-center space-x-4'>
              <BlogManagementSheet />
              <button
                onClick={handleLogout}
                className='p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
                  />
                </svg>
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
                Title
              </label>
              <input
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className='w-full p-4 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl focus:ring-2 focus:ring-[#F56E0F] focus:border-transparent dark:text-gray-100'
                required
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
                Category
              </label>
              <div className='flex items-center space-x-4'>
                <CustomSelect
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onSelect={setSelectedCategory}
                  onDelete={handleDeleteCategory}
                />
                <button
                  type='button'
                  onClick={() => setShowAddCategory(true)}
                  className='p-4 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 text-gray-600 dark:text-gray-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 4v16m8-8H4'
                    />
                  </svg>
                </button>
              </div>
            </div>

            {showAddCategory && (
              <div className='flex items-center space-x-4'>
                <input
                  type='text'
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  placeholder='New category name'
                  className='flex-1 p-4 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl focus:ring-2 focus:ring-[#F56E0F] focus:border-transparent dark:text-gray-100'
                />
                <button
                  type='button'
                  onClick={handleAddCategory}
                  disabled={isAddingCategory}
                  className='p-4 bg-[#F56E0F] text-white rounded-2xl hover:bg-[#E55D00] transition duration-200 disabled:opacity-50'>
                  {isAddingCategory ? "Adding..." : "Add"}
                </button>
                <button
                  type='button'
                  onClick={() => {
                    setShowAddCategory(false);
                    setNewCategory("");
                  }}
                  className='p-4 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-200'>
                  Cancel
                </button>
              </div>
            )}

            <div>
              <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
                Content
              </label>
              <div data-color-mode='dark'>
                <MDEditor
                  value={content}
                  onChange={(value) => setContent(value || "")}
                  className='dark:bg-gray-800'
                  height={400}
                />
              </div>
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
                Featured Image
              </label>
              <div className='space-y-4'>
                <input
                  type='file'
                  accept='image/*'
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      handleImageUpload(file);
                    }
                  }}
                  className='w-full p-4 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl focus:ring-2 focus:ring-[#F56E0F] focus:border-transparent dark:text-gray-100'
                />
                {uploadError && (
                  <p className='text-red-500 text-sm'>{uploadError}</p>
                )}
                {imageUrl && (
                  <div className='relative w-full h-48'>
                    <Image
                      src={imageUrl}
                      alt='Featured image'
                      fill
                      className='rounded-2xl object-cover'
                    />
                  </div>
                )}
              </div>
            </div>

            <div className='flex justify-end'>
              <button
                type='submit'
                disabled={loading || uploadingImage}
                className='bg-[#F56E0F] text-white px-8 py-4 rounded-2xl hover:bg-[#E55D00] transition duration-200 disabled:opacity-50'>
                {loading ? "Publishing..." : "Publish Post"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
