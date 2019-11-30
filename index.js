// -enter items they need to purchase by entering text and hitting "Return" 
// or clicking the "Add item" button
// -check and uncheck items on the list by clicking the "Check" button
// -permanently remove items from the list

// -You must use a CDN-hosted version of jQuery
// -Put your application code in a file called index.js and link to it 
// in index.html
// -Be sure to put both script elements at the bottom of the <body> 
// element.
// -Do not alter index.html or main.css other than adding the links to 
// the external JavaScript inside index.html. Write JavaScript code that 
// works with the existing HTML and CSS to implement the required features.
// -Hint: you may find it helpful to read up on and use the following 
// jQuery methods: .submit(), preventDefault(), toggleClass(), and closest().

// input can be added by enter or clicking "add item"
function submitItem(){
    $('#js-shopping-list-form').on('submit',function(e){
        e.preventDefault();
        const input = $(e.currentTarget).find('#shopping-list-entry');
        const item = input.val();
        console.log(item);
        input.val('');
        // send to another function
        renderItem(item);        
    });
    $('button.submit').on('click',function(e){
        e.preventDefault();
        const input = $(e.currentTarget).find('#shopping-list-entry');
        const item = input.val();
        input.val('');
        // send to another function
        renderItem(item); 
    });

}
// render the itemin HTML. add whole new list item at end or beginning(prepend)
function renderItem(newItem){    
    $('.shopping-list').append(`<li>
    <span class="shopping-item">${newItem}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`);
}

// if check is clicked, change class to shopping-item__checked
// if item is already checked, and needs to be unchecked, get rid of 
// shopping-item__checked
function checkClicked(){ 
    $('ul').on('click','button.shopping-item-toggle',function(e){
        e.stopPropagation();
        const targetSpan = $(e.currentTarget).closest('li').find('.shopping-item');
        $(targetSpan).toggleClass('shopping-item__checked'); 
    });
    // delete any list item, old or new.
    $('ul').on('click','button.shopping-item-delete',function(e){
        e.stopPropagation();
        $(this).closest('li').remove();
    });
}

$(checkClicked)
$(submitItem)