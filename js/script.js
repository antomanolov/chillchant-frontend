// sidebar
// todo find a way to match mediaqueries in js with window
// and make default font style for mobile/tablets the smallest one

const menuItems = document.querySelectorAll('.menu-item');
const messagesNotif = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const msg = document.querySelectorAll('.msg');
const msgSearch = document.querySelector('#message-search');

const style = document.querySelector('#theme')
const styleModal = document.querySelector('.customize-style')
const fontSize = document.querySelectorAll('.choose-size span')
var root = document.querySelector(':root')

const fontColor = document.querySelectorAll('.choose-color span')

const bg1 = document.querySelector('.bg-1')
const bg2 = document.querySelector('.bg-2')
const bg3 = document.querySelector('.bg-3')


const changeActive = () => {
    menuItems.forEach(item => {
        item.classList.remove('active')
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActive();
        item.classList.add('active');
        if (item.id != 'notifications') {
            document.querySelector('.notification-popup').style.display = 'none';
        } else {
            document.querySelector('.notification-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';

        }
    })
})

messagesNotif.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)'
    messagesNotif.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none'
    }, 2000);
})

// modal customize

const openStyleModal = () => {
    styleModal.style.display = 'grid'
}

const closeStyleModal = (e) => {
    if (e.target.classList.contains('customize-style')) {
        styleModal.style.display = 'none'
    }
}

styleModal.addEventListener('click', closeStyleModal);

style.addEventListener('click', openStyleModal);

const removeActiveFontSize = () => {
    fontSize.forEach(span => {
        span.classList.remove('active')
    })
}

const removeActiveFontColor = () => {
    fontColor.forEach(span => {
        span.classList.remove('active')
    })
}

fontSize.forEach(span => {
    span.addEventListener('click', () => {
        removeActiveFontSize()
        let fontSizes;
        span.classList.toggle('active')
        if (span.classList.contains('font-size-1')) {
            fontSizes = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        } else if (span.classList.contains('font-size-2')) {
            fontSizes = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
        } else if (span.classList.contains('font-size-3')) {
            fontSizes = '16px';
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
        } else if (span.classList.contains('font-size-4')) {
            fontSizes = '19px';
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        } else if (span.classList.contains('font-size-5')) {
            fontSizes = '22px';
            root.style.setProperty('--sticky-top-left', '-10rem');
            root.style.setProperty('--sticky-top-right', '-33rem');
        }
        document.querySelector('html').style.fontSize = fontSizes
    });
})

fontColor.forEach(color => {
    color.addEventListener('click', () => {
        removeActiveFontColor()
        let primaryHue;
        if (color.classList.contains('color-1')) {
            primaryHue = 252;
        } else if (color.classList.contains('color-2')) {
            primaryHue = 52;
        } else if (color.classList.contains('color-3')) {
            primaryHue = 352;
        } else if (color.classList.contains('color-4')) {
            primaryHue = 152;
        } else if (color.classList.contains('color-5')) {
            primaryHue = 202;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})

let lightThemeLightness;
let whiteThemeLightness;
let darkThemeLigthness;

const changeBg = () => {
    root.style.setProperty('--light-theme-lightness', lightThemeLightness)
    root.style.setProperty('--white-theme-lightness', whiteThemeLightness)
    root.style.setProperty('--dark-theme-lightness', darkThemeLigthness)
}

bg1.addEventListener('click', () => {
    bg1.classList.add('active');

    bg2.classList.remove('active')
    bg3.classList.remove('active')
    window.location.reload();
})


bg2.addEventListener('click', () => {
    darkThemeLigthness = '95%';
    whiteThemeLightness = '20%';
    lightThemeLightness = '15%';

    bg2.classList.add('active');

    bg1.classList.remove('active')
    bg3.classList.remove('active')
    changeBg();
})

bg3.addEventListener('click', () => {
    darkThemeLigthness = '95%';
    whiteThemeLightness = '10%';
    lightThemeLightness = '0%';

    bg3.classList.add('active');

    bg1.classList.remove('active')
    bg2.classList.remove('active')
    changeBg();
})

