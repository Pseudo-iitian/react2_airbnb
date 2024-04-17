import Heart from '../assets/icons8-red-heart-48.png'

function Cards() {
  return (
    <>
      <div class="card-container">
        <div class="cards">
          <div class="card-image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh3x_xBRwh0l8ZdRrrbuzMRW8GwiB8S5gu0_ahdq7o2g&s"
              alt="" />
          </div>

          <div class="card-text">
            <div class="likes">
              <img src={Heart} alt="" />
              <p>5.0 <span class="card-country">(6)-USA</span></p>
            </div>
            <p class="card-desc">Life lessons with Katie Zaferes</p>
            <p><span class="card-price">From $136</span> / person</p>
          </div>
        </div>

        <div class="cards">
          <div class="card-image">
            <img
              src="https://www.wwe.com/f/styles/gallery_img_l/public/all/2022/06/001__PB52410--54bfc778a1fec1b09eac2e301be8589b.jpg"
              alt="" />
          </div>
          <div class="card-text">
            <div class="likes">
              <img src={Heart} alt="" />
              <p>5.0 <span class="card-country">(6)-USA</span></p>
            </div>
            <p class="card-desc">Life lessons with Katie Zaferes</p>
            <p><span class="card-price">From $136</span> / person</p>
          </div>
        </div>

        <div class="cards">
          <div class="card-image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh3x_xBRwh0l8ZdRrrbuzMRW8GwiB8S5gu0_ahdq7o2g&s"
              alt="" />
          </div>
          <div class="card-text">
            <div class="likes">
              <img src={Heart} alt="" />
              <p>5.0 <span class="card-country">(6)-USA</span></p>
            </div>
            <p class="card-desc">Life lessons with Katie Zaferes</p>
            <p><span class="card-price">From $136</span> / person</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards;