const newsfeedContainer = document.querySelectorAll(".newsfeed-post");
newsfeedContainer.forEach((container) => {
  const inputArea = container.querySelector(
    ".comment-as .your-comment-input input"
  );
  const commentCountElement = container.querySelector(".comment-share a");
  const commentContainer = container.querySelector(
    ".comment-area .comments-content .comment-product"
  );

  inputArea.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && inputArea.value.trim() !== "") {
      //Create a new comment element
      const newComment = document.createElement("li");
      newComment.classList.add("comment-list", "my-comment");

      //Create the structure for the new comment
      newComment.innerHTML = `
      <img src="../assets/images/images-main/my-profile.jpg" alt="my-profile" />
        <a href="#" class="comment-item">
          <div class="user-comment-details">
            <div class="name-follow">
              <strong>Darwin Lopez</strong>
            </div>
            <p class="comment">${inputArea.value}</p>
          </div>
          <div class="interactions-react">
            <div class="interactions">
              <p class="time">Just now</p>
              <p class="action-like">Like</p>
              <p class="action-reply">Reply</p>
            </div>
            <i class="fa-solid fa-thumbs-up"></i>
          </div>
        </a>
        `;

      commentContainer.appendChild(newComment);

      inputArea.value = "";

      const currentCommentCount = commentContainer.children.length;
      commentCountElement.textContent = `${currentCommentCount} comments`;
    }
  });
});
