const $ = (element) => {
  let e, obj = {

    elements(element) {
      return e ? e : (document.querySelector(element) !== null || document.querySelectorAll(element).length > 0 ? [...document.querySelectorAll(element)] : undefined)
    },

    // Fade-in/out function for the DOM-selector
    fade(typeAs, time = 200) {
      e.forEach((el) => {
        let opacityAs = typeAs === 'in' ? 0 : 1;

        el.style.opacity = opacityAs;
        typeAs === 'in' ? (el.style.display = 'inline') : null

        let timer = setInterval(() => {
          el.style.opacity < 0 || el.style.opacity > 1 ? clearInterval(timer) : timer;

          typeAs === 'in' ? el.style.opacity -= -(50 / time) : el.style.opacity -= (50 / time);

          el.style.opacity < 0 ? el.style.display = 'none' : null;
        }, 50);

      })
      return this
    },

    // Wait for x ms then run the function
    wait4(time, callback) {
      setTimeout(() => { callback() }, time)
      return this
    },

    // Add css to style the element
    css(property_or_Style, value) {
      e.forEach((el) => {

        if (typeof property_or_Style === 'object') {
          for (const prop in property_or_Style) {
            el.style[prop] = property_or_Style[prop]
          }

          return this
        }

        el.style[property_or_Style] = value
      });

      return this
    },

    // Add 'innerText' and 'innerHTML' in one prototype function
    text_html(what, value) {
      e.forEach((el) => { what === 'text' ? el.innerText = value : el.innerHTML = value; })
      return this
    },

    // Add 'setAttribute' as a prototype function
    attr(property_or_Attribute, value) {
      e.forEach((el) => {

        if (typeof property_or_Attribute === 'object') {
          for (const prop in property_or_Attribute) {
            el.setAttribute(prop, property_or_Attribute[prop])
          }

          return this
        }

        el.setAttribute(property_or_Attribute, value)
      });

      return this
    },

    // Add 'removeAttribute' with multiple attributes separated by 'space'
    removeAttr(attributes) {
      e.forEach((el) => {

        attributes.split(" ").forEach((attribute) => {
          el.removeAttribute(attribute)
        })

      })

      return this
    },

    // Add multiple classes with 'addClass'
    addClass(classes) {
      e.forEach((el) => {

        classes.split(" ").forEach((a_class) => {
          el.classList.add(a_class)
        })

      })

      return this
    },

    // Add 'removeClass' to remove multiple classes
    removeClass(classes) {
      e.forEach((el) => {
        classes.split(" ").forEach((a_class) => {
          el.classList.remove(a_class)
        })
      })

      return this
    }, 

    // Delete the element
    del() {
      e.forEach((el) => {
        el.remove()
      })

      return this
    },

    click(funct) {
      e.forEach(el => {
        el.addEventListener('click', el => { return funct(el) })
      })

      return this
    },
    
    val(value) {
      e.forEach(el => el.value = value)

      return this
    },

    append(element) {
      e.forEach(el => element instanceof HTMLElement ? el.appendChild(element) : console.log(`${element} is not a HTML-Element`))

      return this
    }
  };

  e = obj.elements(element)

  return obj
}
