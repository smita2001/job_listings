
  // body...
  document.addEventListener("click",function manage(e){
  let tag = e.target.textContent;
  if (e.target.classList.contains('button')) {
    
    // if filter text is already exist in the filter box, then return nothing
      const filterTexts = Array.from(document.querySelectorAll('.filter-txt'));
      const fil = filterTexts.map(text => text.textContent);
      
      if(fil.indexOf(tag) !== -1) return;
      
     // add filter tag to filter box
     filterTag(e.target.textContent);
    
    // filtering job list
    
      realFuncFiltering();
     }

  // click button delete
    
    if (e.target.classList.contains('btn-delete')) {
      e.target.parentElement.remove();
      // remove filter box from the display when its no filter tag
      const filterTags = document.querySelectorAll('.filter-tag');
      if (filterTags.length === 0) filterBox.classList.remove('show');
      // filtering list
      backlist();
    }
    // click button clear
    if (e.target.classList.contains('clear')) {
      document.querySelectorAll('.filter-tag').forEach(tag => tag.remove());
      // remove filter box from the display
      setTimeout(() => filterBox.classList.remove('show'));
    // return all lists to display
    const lists = document.querySelectorAll('.element');
    for(let list of lists) list.style.display = "";
    
    }

  });


const filterBox = document.querySelector('.search-bar');
function filterTag(tag) {
  
  filterBox.classList.add('show');
  // create tag codes
  let filterTagCodes = `
            <h3 class="filter-txt">${tag}</h3>
            <img src="images/ico-remove.png" alt="" class="btn-delete">`;
  // create element div tag
  const div = document.createElement('div');
  div.classList.add('filter-tag');
  div.innerHTML = filterTagCodes;
  
  document.querySelector('.selected_items').append(div);
}

function realFuncFiltering() {
  
  const filterLists = document.querySelectorAll('.skills');
  const arrFilterTEXTS = Array.from(document.querySelectorAll('.filter-txt'));
  const TEXTS = arrFilterTEXTS.map(text => text.innerHTML);
  
  let listArr = [];
  
  filterLists.forEach((list) => {
    
    
    const txt = Array.from(list.children);
    const newTxt = txt.map(t => t.innerHTML);
  
    listArr.push(newTxt);
  
  });
  
  const lists = document.querySelectorAll('.element');
  
  TEXTS.forEach(text => {
  
    listArr.forEach((list, i) => {
      
      if (!list.includes(text)) {
        let index = listArr.indexOf(list);
        lists[i].style.display = 'none';
      }
        
    });
  
  });
}

function backlist() {
  
  const filterLists = document.querySelectorAll('.skills');
  const filterTexts = Array.from(document.querySelectorAll('.filter-txt'));
  let filterTextsArr = filterTexts.map(text => text.innerHTML);
  
  let listArr = [];
  
  filterLists.forEach((list) => {
  
    const txt = Array.from(list.children);
    const newTxt = txt.map(t => t.innerHTML);
  
    listArr.push(newTxt);
  
  });
  const lists = document.querySelectorAll('.element');
  
  filterTextsArr.forEach(text => {
  
    listArr.forEach((list, i) => {
      if (list.includes(text)) {
        lists[i].style.display = '';
      }
  
    });
  
  });
  
  if(filterTextsArr.length === 0) {
    for(let list of lists) list.style.display = '';
  }
  
}
