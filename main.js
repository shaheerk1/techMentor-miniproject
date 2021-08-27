function selectFunc() {
  const selectorValue = document.getElementById('colorSelector').value
  console.log(selectorValue)

  if (selectorValue == 'After A/L') {
    document.getElementById('digiMark').classList.toggle('hideMe')
    document.getElementById('seo').classList.toggle('hideMe')
    document.getElementById('uiux').classList.remove('hideMe')
    document.getElementById('mobile').classList.remove('hideMe')
    document.getElementById('web').classList.remove('hideMe')
  } else if (selectorValue == 'After O/L') {
    document.getElementById('digiMark').classList.remove('hideMe')
    document.getElementById('seo').classList.remove('hideMe')
    document.getElementById('uiux').classList.toggle('hideMe')
    document.getElementById('mobile').classList.toggle('hideMe')
    document.getElementById('web').classList.toggle('hideMe')
  } else {
    document.getElementById('digiMark').classList.remove('hideMe')
    document.getElementById('seo').classList.remove('hideMe')
    document.getElementById('uiux').classList.remove('hideMe')
    document.getElementById('mobile').classList.remove('hideMe')
    document.getElementById('web').classList.remove('hideMe')
  }
}

function rangeFunc() {
  const rangeValue = parseInt(document.getElementById('rangeSelector').value)

  console.log('price range = ', rangeValue)
  if (rangeValue > 140 && rangeValue < 200) {
    document.getElementById('digiMark').classList.remove('hideMe')
    document.getElementById('seo').classList.remove('hideMe')
    document.getElementById('uiux').classList.remove('hideMe')
    document.getElementById('mobile').classList.remove('hideMe')
    document.getElementById('web').classList.remove('hideMe')
  } else if (rangeValue > 100 && rangeValue < 140) {
    document.getElementById('digiMark').classList.remove('hideMe')
    document.getElementById('seo').classList.toggle('hideMe')
    document.getElementById('uiux').classList.remove('hideMe')
    document.getElementById('mobile').classList.remove('hideMe')
    document.getElementById('web').classList.remove('hideMe')
  } else if (rangeValue > 0 && rangeValue < 100) {
    //     if (document.getElementById('digiMark').classList.contains('hideMe')) {
    //       document.getElementById('digiMark').classList.remove('hideMe')
    //       document.getElementById('digiMark').classList.toggle('hideMe')
    //     } else {
    //       document.getElementById('digiMark').classList.toggle('hideMe')
    //     }

    document.getElementById('digiMark').classList.toggle('hideMe')
    document.getElementById('seo').classList.toggle('hideMe')
    document.getElementById('uiux').classList.remove('hideMe')
    document.getElementById('mobile').classList.toggle('hideMe')
    document.getElementById('web').classList.toggle('hideMe')
  }
}
