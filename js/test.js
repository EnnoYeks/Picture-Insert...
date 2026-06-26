import { supabase } from "./supabaseClient.js";

async function loadPosts() {
    const { data, error } = await supabase
        .from("posts")
        .select("*");

    if (error) {
        document.getElementById("status").innerHTML =
            `<h2 style="color:red;">❌ Error</h2><pre>${error.message}</pre>`;
        return;
    }

    document.getElementById("status").innerHTML =
        `<h2 style="color:green;">✅ Connected to Supabase!</h2>`;

    const container = document.getElementById("posts");

    if (data.length === 0) {
        container.innerHTML = "<p>No posts found.</p>";
        return;
    }

    container.innerHTML = data.map(post => `
        <div style="border:1px solid #ddd;padding:20px;margin:20px;border-radius:10px;">
            <h2>${post.title}</h2>
            <p>${post.description}</p>

            ${
                post.media_type === "video"
                    ? `<video width="500" controls>
                        <source src="${post.video_url}" type="video/mp4">
                       </video>`
                    : `<img src="${post.video_url}" width="500">`
            }

            <p><b>Category:</b> ${post.category}</p>
            <p>❤️ ${post.likes_count}</p>
            <p>👁️ ${post.views_count}</p>
        </div>
    `).join("");
}

loadPosts();
