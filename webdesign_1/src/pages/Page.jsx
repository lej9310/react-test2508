import { Route, Routes } from "react-router-dom";

export default function Page({ title }) {
    return (
        <div style={{ padding: "40px", height: "10vh" }}>
            <h2>{title}</h2>
            <Routes>
                <Route path="sub1" element={<p>{title} - SubPage 1</p>} />
                <Route path="sub2" element={<p>{title} - SubPage 2</p>} />
                <Route path="sub3" element={<p>{title} - SubPage 3</p>} />
            </Routes>
        </div>
    );
}