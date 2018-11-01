const legoCreation = {
  id: 1,
  creator: "Per Sun",
  color: "Black",
  shape: "Animal",
  creation: "Black Cow"
}

let saveBtn = document.querySelector(".lego__save")

saveBtn.addEventListener("click", e => {
  const creator = document.querySelector("#lego__creator").value
  const color = document.querySelector("#lego__color").value
  const shape = document.querySelector("#lego__shape").value
  const creation = document.querySelector("#lego__creation").value

  const legoToSave = {
    creator: creator,
    color: color,
    shape: shape,
    creation: creation
  }

  fetch("http://localhost:8088/legos", { 
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(legoToSave)
  })
})
