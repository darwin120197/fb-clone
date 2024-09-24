// ================== Image upload ==================
const uploadPhotoVideo = document.querySelector(".post-photo"),
  whatsOnYourMind = document.querySelector(".whats-on-your-mind"),
  createPostContainer = document.querySelector(".create-post"),
  closeBtn = document.querySelector(".create-post .title-button i");
const leftSideContent = document.querySelector(".main .sidebar-left");
const mainContent = document.querySelector(".main-content");
const rightSideContent = document.querySelector(".main .side-content");

if (uploadPhotoVideo) {
  uploadPhotoVideo.addEventListener("click", () => {
    createPostContainer.classList.add("display-block");

    customizeOpacity();
  });
}

if (whatsOnYourMind) {
  whatsOnYourMind.addEventListener("click", () => {
    createPostContainer.classList.add("display-block");

    customizeOpacity();
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    createPostContainer.classList.remove("display-block");

    defaultOpacity();
  });
}

const imageUpload = document.getElementById("imageupload");
const preview = document.getElementById("preview");
const label = document.querySelector(".custom-upload-label"),
  postInput = document.getElementById("post-input"),
  postBtn = document.getElementById("post-button");

imageUpload.addEventListener("change", (event) => {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    //When the image is loaded, set the preview source
    reader.onload = function (e) {
      preview.src = e.target.result;
    };

    //Read the image files as a date URL
    reader.readAsDataURL(file);

    label.style.display = "none";

    preview.style.aspectRatio = "4/3";
    preview.style.marginTop = "0.1rem";
  }

  updateNextBtn();
});

postInput.addEventListener("input", () => {
  updateNextBtn();
});

//Next button
const nextBtn = document.getElementById("next-button"),
  postToContainer = document.querySelector(".post-to"),
  postToBack = document.getElementById("postto-back"),
  postToClose = document.getElementById("postto-close"),
  checkBox = document.querySelectorAll(".checkbox");

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    postToContainer.classList.add("display-block");
    createPostContainer.classList.remove("display-block");
  });
} else {
  console.error("next button not found!");
}

if (postToBack && postToClose) {
  postToBack.addEventListener("click", () => {
    createPostContainer.classList.add("display-block");
    postToContainer.classList.remove("display-block");
  });

  postToClose.addEventListener("click", () => {
    postToContainer.classList.remove("display-block");

    defaultOpacity();
  });
}

const parentContainer = document.querySelector(".main-content");

// ----- Checkboxes -----
checkBox.forEach((e) => {
  e.addEventListener("change", postAndUpdateBtn);
});

// ----- Post Button -----
function postAndUpdateBtn() {
  let checkboxes = document.querySelectorAll(".checkbox");
  let isChecked = false;

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      isChecked = true;
    }
  });

  postBtn.removeEventListener("click", handlePost);

  if (isChecked) {
    postBtn.style.backgroundColor = "#1877f2";
    postBtn.style.color = "#fff";
    postBtn.style.opacity = "1";

    postBtn.addEventListener("click", handlePost);
  } else {
    postBtn.style.backgroundColor = "";
    postBtn.style.color = "";
    postBtn.style.opacity = "";
  }
}

//Function to handle the post
function handlePost() {
  const yourPost = document.createElement("div");
  yourPost.classList.add("newsfeed-post", "your-post-content");

  // Get current date and format it
  const now = new Date();
  const options = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = now.toLocaleDateString("en-US", options);

  //Trim the post input to avoid any whitespace-only values
  const caption = postInput.value.trim();

  if (imageUpload.files && imageUpload.files[0]) {
    const reader = new FileReader();

    // When the image is loaded, this function will be triggered
    reader.onload = function (e) {
      // Now that the image is loaded, create the post
      yourPost.innerHTML = `
          <div class="user-post-details">
            <div class="user-details-flex">
              <div class="user-profile">
                <img
                  src="../assets/images/images-main/my-profile.jpg"
                  alt="my-profile"
                />
              </div>
              <div class="user-name-date-posted">
                <h6 class="user-name">Darwin Lopez</h6>
                <p class="date-posted">
                  ${formattedDate} <i class="fa-solid fa-earth-americas"></i>
                </p>
              </div>
            </div>

            <div class="option-button">
              <div><i class="ri-more-fill"></i></div>
              <div><i class="ri-close-large-line"></i></div>
            </div>
          </div>

          <div class="about-post">
            <p class="post-caption">
              ${caption}
            </p>
            <strong class="seemore-caption">See more</strong>
          </div>

          <div class="post-image-video">
            <img
              src="${e.target.result}"
              alt="user uploaded image"
            />
          </div>

          <div class="post-actions-buttons">
            <div class="react-comment">
              <div class="reaction-area">
                <div class="reaction">
                  <i class="fa-solid fa-thumbs-up"></i>
                  <i class="fa-solid fa-heart"></i>
                  <i class="fa-solid fa-face-sad-tear"></i>
                  <a href="#">302</a>
                </div>
              </div>
              <div class="comment-share">
                <a href="#"> 1 comment</a>
                <a href="#"> 4 shares</a>
              </div>
            </div>

            <div class="action-buttons">
              <ul class="button-product">
                <li class="button-list">
                  <a href="#" class="button-item">
                    <i class="fa-regular fa-thumbs-up"></i> <span>Like</span>
                  </a>
                </li>
                <li class="button-list">
                  <a href="#" class="button-item comment">
                    <i class="fa-regular fa-comment"></i> <span>Comment</span>
                  </a>
                </li>
                <li class="button-list">
                  <a href="#" class="button-item">
                    <i class="fa-solid fa-share"></i> <span>Share</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="comment-area">
            <div class="comment-type">
              <select name="comment" id="" class="comment-select">
                <option value="1">Most relevant</option>
                <option value="2">Newest</option>
                <option value="3">All comments</option>
              </select>
            </div>

            <div class="comments-content">
              <ul class="comment-product">
                <li class="comment-list">
                  <img
                    src="../assets/images/comment/bryan-panahon.jpg"
                    alt="bryan"
                  />
                  <a href="" class="comment-item">
                    <div class="user-comment-details">
                      <div class="name-follow">
                        <strong>Bryan Garcia Panahon</strong>
                        <p class="follow">follow</p>
                      </div>
                      <p class="comment">Hahaha</p>
                    </div>
                    <div class="interactions-react">
                      <div class="interactions">
                        <p class="time">2d</p>
                        <p class="action-like">Like</p>
                        <p class="action-reply">Reply</p>
                      </div>
                      <i class="fa-solid fa-thumbs-up"></i>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="comment-as">
            <div class="your-comment-input">
              <img
                src="../assets/images/images-main/my-profile.jpg"
                alt="my-profile"
              />
              <input type="text" placeholder="Comment as Darwin Lopez" />
            </div>
          </div> `;

      // Find the child node at index [2] (or the end if fewer children exist)
      const children = parentContainer.children;
      const insertBeforeNode = children.length > 2 ? children[2] : null;

      // Insert the post at index [2]
      parentContainer.insertBefore(yourPost, insertBeforeNode);

      // Reset post input and image preview
      postInput.value = "";
      preview.src = "";
    };

    // Read the uploaded image file as a Data URL
    reader.readAsDataURL(imageUpload.files[0]);
  } else {
    // If no image is uploaded, just create a post without an image
    yourPost.innerHTML = `
        <div class="user-post-details">
          <div class="user-details-flex">
            <div class="user-profile">
              <img
                src="../assets/images/images-main/my-profile.jpg"
                alt="traversy-media-profile"
              />
            </div>
            <div class="user-name-date-posted">
              <h6 class="user-name">Traversy Media</h6>
              <p class="date-posted">
                5 December 5,2023 <i class="fa-solid fa-earth-americas"></i>
              </p>
            </div>
          </div>

          <div class="option-button">
            <div><i class="ri-more-fill"></i></div>
            <div><i class="ri-close-large-line"></i></div>
          </div>
        </div>

        <div class="about-post">
          <p class="post-caption">
            ${postInput.value}
          </p>
          <strong class="seemore-caption">See more</strong>
        </div>

        <div class="post-actions-buttons">
          <div class="react-comment">
            <div class="reaction-area">
              <div class="reaction">
                <i class="fa-solid fa-thumbs-up"></i>
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-face-sad-tear"></i>
                <a href="#">302</a>
              </div>
            </div>
            <div class="comment-share">
              <a href="#"> 1 comment</a>
              <a href="#"> 4 shares</a>
            </div>
          </div>

          <div class="action-buttons">
            <ul class="button-product">
              <li class="button-list">
                <a href="#" class="button-item">
                  <i class="fa-regular fa-thumbs-up"></i> <span>Like</span>
                </a>
              </li>
              <li class="button-list">
                <a href="#" class="button-item comment">
                  <i class="fa-regular fa-comment"></i> <span>Comment</span>
                </a>
              </li>
              <li class="button-list">
                <a href="#" class="button-item">
                  <i class="fa-solid fa-share"></i> <span>Share</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="comment-as">
          <div class="your-comment-input">
            <img
              src="../assets/images/images-main/my-profile.jpg"
              alt="my-profile"
            />
            <input type="text" placeholder="Comment as Darwin Lopez" />
          </div>
        </div>`;

    // Append the post to the parent container if no image is uploaded
    parentContainer.appendChild(yourPost);
  }

  // Reset post creation modal and body styles
  createPostContainer.classList.remove("display-block");
  document.body.style.overflow = "";
  leftSideContent.style.opacity = "";
  rightSideContent.style.opacity = "";

  let mainContentChildren = mainContent.children;
  for (let i = 0; i < mainContentChildren.length; i++) {
    let child = mainContentChildren[i];
    if (child !== createPostContainer) {
      child.style.opacity = "";
    }
  }

  // Reset post input and image upload
  postInput.value = "";
  imageUpload.value = ""; // reset file input
  preview.src = ""; // reset the image preview

  postToContainer.classList.remove("display-block");
}

postAndUpdateBtn();

// ============ REAUSABLE FUNCTIONS ============
// Function to change the style of next button if the image file or the post input value is not empty
function updateNextBtn() {
  if (imageUpload.files.length > 0 || postInput.value.trim() !== "") {
    nextBtn.style.backgroundColor = "#1877f2";
    nextBtn.style.color = "#fff";
    nextBtn.style.opacity = "1";
  } else {
    nextBtn.style.backgroundColor = "";
    nextBtn.style.color = "";
    nextBtn.style.opacity = "";
  }
}

// Function to customize opacity of elements
function customizeOpacity() {
  document.body.style.overflow = "hidden";
  leftSideContent.style.opacity = ".3";
  rightSideContent.style.opacity = ".3";

  let mainContentChildren = mainContent.children;
  for (let i = 0; i < mainContentChildren.length; i++) {
    let child = mainContentChildren[i];
    if (child !== createPostContainer && child !== postToContainer) {
      child.style.opacity = ".3";
    }
  }
}

// Function to set the default opacity of elements
function defaultOpacity() {
  document.body.style.overflow = "";
  leftSideContent.style.opacity = "";
  rightSideContent.style.opacity = "";

  let mainContentChildren = mainContent.children;
  for (let i = 0; i < mainContentChildren.length; i++) {
    let child = mainContentChildren[i];

    if (child !== createPostContainer && child !== postToContainer) {
      child.style.opacity = "";
    }
  }
}
