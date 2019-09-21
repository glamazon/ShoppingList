function removeItems() {
  $('.shopping-list').on('click', '.shopping-item-delete', function (event) {
    $(this)
      .closest('li')
      .remove()
  })
}

function checkItems() {
  $('.shopping-list').on('click', '.shopping-item-toggle', function (event) {
    $(this)
      .closest('li')
      .find('.shopping-item')
      .toggleClass('shopping-item__checked')
  })
}

function addItems() {
  $('#js-shopping-list-form').on('submit', function (event) {
    event.preventDefault()

    const value = $('#shopping-list-entry').val()
    $('.shopping-list').append(
      `<li>
                <span class="shopping-item">${value}</span>
                <div class="shopping-item-controls">
                    <button class="shopping-item-toggle">
                        <span class="button-label">check</span>
                    </button>
                    <button class="shopping-item-delete">
                        <span class="button-label">delete</span>
                    </button>
                </div>
            </li>`
    )

    // clear out add item textbox
    $('#shopping-list-entry').val('')
  })
}

$(function () {
  removeItems()
  checkItems()
  addItems()
})