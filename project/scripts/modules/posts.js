export function setupPostHover() {
    const posts = document.querySelectorAll(".post");

    posts.forEach(post => {
        const postText = post.querySelector(".post-title");

        post.addEventListener("mouseover", () => {
            postText.style.textDecoration = "underline";
        });

        post.addEventListener("mouseout", () => {
            postText.style.textDecoration = "none";
        });
    });
}