import { BrowserRouter, Route, Routes } from "react-router-dom"



import Header from "../components/header"
import Footer from "../components/footer"

import Home from "../pages/home"
import Author from "../pages/authors"
import AuthorPosts from "../pages/authorposts"
import CategoryPosts from "../pages/categoryposts"
import CreatePosts from "../pages/createposts"
import Dashboard from "../pages/dashboard"
import DeletePosts from "../pages/deletePosts"
import EditPosts from "../pages/edit"
import ErrorPage from "../pages/error"
import LoginPage from "../pages/login"
import LogoutPage from "../pages/logout"
import PostDetail from "../pages/postdetail"
import Register from "../pages/register"
import UserProfile from "../pages/userProfile"


export default function Router() {
  return (
    <>
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/authors" element={<Author />} />
            <Route path="/posts/user/:id" element={<AuthorPosts />} />
            <Route path="/posts/categories/:category" element={<CategoryPosts />} />
            <Route path="/create" element={<CreatePosts />} />
            <Route path="/myposts/:id" element={<Dashboard />} />
            <Route path="/posts/:id/delete" element={<DeletePosts />} />
            <Route path="/posts/:id/edit" element={<EditPosts />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<LogoutPage />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile/:id" element={<UserProfile />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
    </BrowserRouter>
    </>
  )
}
