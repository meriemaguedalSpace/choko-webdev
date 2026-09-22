// ==========================================
// EMAILJS CONFIGURATION
// ==========================================
const EMAILJS_SERVICE_ID = "service_viigdx8";   
const EMAILJS_TEMPLATE_ID = "template_dgago0f"; 
const EMAILJS_PUBLIC_KEY = "gkh8T1JRKyHsCPqf7";   

// Initialize EmailJS SDK
if (typeof emailjs !== "undefined" && EMAILJS_PUBLIC_KEY) {
    emailjs.init(EMAILJS_PUBLIC_KEY);
}
// ==========================================
// HERO SLIDER CONTROLLER
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('sliderTrack');
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    
    let currentIndex = 0;
    const totalSlides = slides.length;

    if (!track || totalSlides === 0) return;

    function updateSliderPosition() {
        track.style.transform = `translateX(${currentIndex * 100}%)`;
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSliderPosition();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSliderPosition();
        });
    }

    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSliderPosition();
    }, 5000);
});

// ==========================================
// MANUAL AUDIO ENGINE CONTROLLER
// ==========================================
function toggleManualAudio(audioId, buttonElement) {
    const targetAudio = document.getElementById(audioId);
    if (!targetAudio) return;

    document.querySelectorAll('.playlist-grid-box audio').forEach(audio => {
        if (audio !== targetAudio) {
            audio.pause();
            const otherBtn = audio.parentElement.querySelector('.chocolate-play-btn');
            if (otherBtn) otherBtn.textContent = '▶';
        }
    });

    if (targetAudio.paused) {
        targetAudio.play();
        buttonElement.textContent = '⏸';
    } else {
        targetAudio.pause();
        buttonElement.textContent = '▶';
    }
}

// ==========================================
// GUESTBOOK CONTROLLER
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.querySelector(".msg-submit-btn");
    const nameInput = document.querySelector(".msg-name-input");
    const textInput = document.querySelector(".msg-text-input");
    const messageStream = document.querySelector(".message-stream");

    if (submitBtn && nameInput && textInput && messageStream) {
        submitBtn.addEventListener("click", function () {
            const nameValue = nameInput.value.trim();
            const textValue = textInput.value.trim();

            if (nameValue === "" || textValue === "") {
                alert("رجاءً قم بملء اسمك ورسالتك أولاً! ♡");
                return;
            }

            const newPost = document.createElement("div");
            newPost.className = "guest-post";
            newPost.innerHTML = `
                <strong>${nameValue}</strong>
                <p>♡ ${textValue} ♡</p>
            `;

            messageStream.appendChild(newPost);
            messageStream.scrollTop = messageStream.scrollHeight;
            nameInput.value = "";
            textInput.value = "";
        });

        textInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                submitBtn.click();
            }
        });
    }
});

// ==========================================
// RETRO TV & DIRECT PRODUCTS SYSTEM
// ==========================================
const spacetoonProducts = [
    { name: " Rimy & Mateo sticker", price: " 350 DA", img: "assets/products/rimy & mateo.png" },
    { name: 'Hunter x hunter sticker', price: " 150 DA", img: "assets/products/hunter x hunter.png" },
    { name: 'نجمة الطبخ sticker', price: " 300 DA", img: "assets/products/cooking idol.png" },
    { name: 'نجمة الطبخ poster', price: " 700 DA", img: "assets/products/poster.png" },
    { name: 'نجمة الطبخ photocard', price: " 300 DA", img: "assets/products/photocard.png" },
    { name: 'Doramon sticker ', price: " 150 DA", img: "assets/products/doramon.png" },
    { name: 'Emily sticker', price: " 200 DA", img: "assets/products/emily.png" },
    { name: 'ايروكا sticker', price: " 200 DA", img: "assets/products/eroka.png" },
    { name: 'katties sticker', price: " 200DA", img: "assets/products/katties.png" },
    { name: 'البؤساء : كوزيت & ايبونينsticker', price: " 200 DA", img: "assets/products/cosette n ebonin.png" },
    { name: 'البؤساء : ازيلماsticker', price: " 150 DA", img: "assets/products/azelma.png" },
    { name: 'Strawberry shortcake sticker', price: " 200 DA", img: "assets/products/shortcake.png" },
    { name: 'مغامرات نغم sticker', price: " 200 DA", img: "assets/products/nagham.png" },
    { name: 'عهد الاصدقاء sticker', price: "200 DA", img: "assets/products/romeo.png" },
    { name: 'سالي sticker', price: " 200 DA", img: "assets/products/sally.png" },
    { name: 'sandy bell sticker', price: " 150 DA", img: "assets/products/sandybel.png" },
    { name: 'بائعة الكبريت sticker', price: " 150 DA", img: "assets/products/meskina.png" },
    { name: 'محققوا الحيوانات sticker sheet', price: " 350 DA", img: "assets/products/animal.png" },
    { name: 'دروبي مع دوريمي sticker sheet', price: " 350 DA", img: "assets/products/dorobi.png" },
    { name: 'Jewelpet twinkle Rinko & Akari sticker sheet', price: " 350 DA", img: "assets/products/pink.png" },
    { name: 'Jewelpet twinkle Aoi & Sara sticker sheet', price: " 350 DA", img: "assets/products/blue.png" },
    { name: 'Jewelpet twinkle Minami & Miria sticker sheet', price: " 350 DA", img: "assets/products/green.png" },
    { name: 'Detective Conan sticker sheet', price: " 350 DA", img: "assets/products/conan.png" },  
    { name: 'Inyusha sticker sheet', price: " 250 DA", img: "assets/products/inyusha.png" },
    { name: 'ينبوع الاحلام sticker sheet', price: " 250 DA", img: "assets/products/red.png" },
    { name: 'دريلاند sticker sheet', price: " 250 DA", img: "assets/products/dryland.png" },
    { name: 'همتارو sticker sheet', price: " 250 DA", img: "assets/products/hamtaro.png" },
    { name: 'BookMark Dryland: Dafina & Milo', price: "300 DA", img: "assets/products/Dafina & Milo.png" },
    { name: 'BookMark: Jewelpet Twinkle season 1', price: "300 DA", img: "assets/products/jewelpet friends.png" }
];

const disneyProducts = [
    { name: "Miraculous Adrienette sticker", price: "200 DA", img: "assets/products/miraculous.png" },
    { name: "Miraculous Chatnoir sticker ", price: "200 DA", img: "assets/products/chatnoir.png" },
];

const nickelodeonProducts = [
    { name: "Sam & Cat", price: "300 DA", img: "assets/products/samandcat.png" }
];

document.addEventListener("DOMContentLoaded", () => {
    const layerPowerOff = document.getElementById("layerPowerOff");
    const layerChannels = document.getElementById("layerChannels");
    const layerSpacetoon = document.getElementById("layerSpacetoon");
    const layerDisney = document.getElementById("layerDisney");
    const layerNickelodeon = document.getElementById("layerNickelodeon");

    const tvPowerSwitchBtn = document.getElementById("tvPowerSwitchBtn");
    const spacetoonChannelBtn = document.querySelector('[data-channel="spacetoon"]');
    const disneyChannelBtn = document.querySelector('[data-channel="disney"]');
    const nickelodeonChannelBtn = document.querySelector('[data-channel="nickelodeon"]');
    
    const planetShowcaseDeck = document.getElementById("planetShowcaseDeck");
    const showcaseTitleText = document.getElementById("showcaseTitleText");
    const showcaseProductsDisplay = document.getElementById("showcaseProductsDisplay");

    const spacetoonDirectItems = document.getElementById("spacetoonDirectItems");
    const disneyDirectItems = document.getElementById("disneyDirectItems");
    const nickelodeonDirectItems = document.getElementById("nickelodeonDirectItems");

    let isTvPowered = false;

    const audioContainer = document.createElement("div");
    audioContainer.id = "tv-audio-vault";
    audioContainer.style.display = "none";
    document.body.appendChild(audioContainer);

    audioContainer.innerHTML = `
        <audio id="audio-spacetoon" src="assets/audio/spacetoon-intro.mp3" preload="auto"></audio>
        <audio id="audio-disney" src="assets/audio/disney-intro.mp3" preload="auto"></audio>
        <audio id="audio-nickelodeon" src="assets/audio/nickelodeon-intro.mp3" preload="auto"></audio>
    `;

    if (tvPowerSwitchBtn) {
        tvPowerSwitchBtn.addEventListener("click", () => {
            isTvPowered = !isTvPowered;

            if (isTvPowered) {
                hideAllTvLayers();
                layerChannels?.classList.add("active-layer");
            } else {
                document.querySelectorAll("#tv-audio-vault audio").forEach(track => {
                    track.pause();
                    track.currentTime = 0;
                });
                hideAllTvLayers();
                layerPowerOff?.classList.add("active-layer");
                if (planetShowcaseDeck) planetShowcaseDeck.classList.remove("show-deck");
            }
        });
    }

    document.querySelectorAll(".channel-card-btn").forEach(button => {
        button.addEventListener("mouseenter", () => {
            if (!isTvPowered || isChannelActive()) return;

            const channelKey = button.getAttribute("data-channel");
            const targetAudioElement = document.getElementById(`audio-${channelKey}`);

            if (targetAudioElement) {
                document.querySelectorAll("#tv-audio-vault audio").forEach(track => {
                    if (track !== targetAudioElement) {
                        track.pause();
                        track.currentTime = 0;
                    }
                });

                targetAudioElement.play().catch(err => {
                    console.log("Browser blocked hover play until user interaction.", err);
                });
            }
        });

        button.addEventListener("mouseleave", () => {
            if (!isChannelActive()) {
                document.querySelectorAll("#tv-audio-vault audio").forEach(track => {
                    track.pause();
                    track.currentTime = 0;
                });
            }
        });
    });

    function hideAllTvLayers() {
        layerPowerOff?.classList.remove("active-layer");
        layerChannels?.classList.remove("active-layer");
        layerSpacetoon?.classList.remove("active-layer");
        layerDisney?.classList.remove("active-layer");
        layerNickelodeon?.classList.remove("active-layer");
    }

    function isChannelActive() {
        return layerSpacetoon?.classList.contains("active-layer") ||
        layerDisney?.classList.contains("active-layer") ||
        layerNickelodeon?.classList.contains("active-layer");
    }

    function loadChannelProducts(productsList, channelTitle, tvGridElement) {
        if (tvGridElement) {
            tvGridElement.innerHTML = "";
            productsList.forEach(item => {
                tvGridElement.innerHTML += `
                    <div class="tv-item-card">
                        <img src="${item.img}" alt="${item.name}">
                        <span class="tv-item-title">${item.name}</span>
                        <span style="color:#ffdf7a; font-weight:bold; font-size:0.8rem;">${item.price}</span>
                    </div>
                `;
            });
        }

        if (showcaseProductsDisplay && planetShowcaseDeck) {
            if (showcaseTitleText) showcaseTitleText.innerText = channelTitle;
            showcaseProductsDisplay.innerHTML = "";
            
            productsList.forEach(item => {
                showcaseProductsDisplay.innerHTML += `
                    <div class="big-display-card">
                        <div style="width:120px; height:120px; background:rgba(0,0,0,0.3); border-radius:12px; margin-bottom:12px; display:flex; align-items:center; justify-content:center;">
                            <img src="${item.img}" style="max-width:85%; max-height:85%;" alt="${item.name}">
                        </div>
                        <h4 style="color:#fff; margin:0 0 6px 0; font-size:1rem;">${item.name}</h4>
                        <span style="color:#ffdf7a; font-weight:bold; font-size:1.1rem; margin-bottom:10px;">${item.price}</span>
                        <button style="background:#ffb6c1; border:none; width:100%; padding:8px; border-radius:8px; font-weight:bold; cursor:pointer;">إضافة للسلة 🛒</button>
                    </div>
                `;
            });

            planetShowcaseDeck.classList.add("show-deck");
            planetShowcaseDeck.scrollIntoView({ behavior: 'smooth' });
        }
    }

    if (spacetoonChannelBtn) {
        spacetoonChannelBtn.addEventListener('click', () => {
            if (!isTvPowered) return;
            hideAllTvLayers();
            layerSpacetoon?.classList.add('active-layer');
            loadChannelProducts(spacetoonProducts, "منتجات سبيستون ☄️", spacetoonDirectItems); 
        });
    }

    if (disneyChannelBtn) {
        disneyChannelBtn.addEventListener('click', () => {
            if (!isTvPowered) return;
            hideAllTvLayers();
            layerDisney?.classList.add('active-layer');
            loadChannelProducts(disneyProducts, "منتجات ديزني 🏰", disneyDirectItems); 
        });
    }

    if (nickelodeonChannelBtn) {
        nickelodeonChannelBtn.addEventListener('click', () => {
            if (!isTvPowered) return;
            hideAllTvLayers();
            layerNickelodeon?.classList.add('active-layer');
            loadChannelProducts(nickelodeonProducts, "منتجات نيكلوديون 🧡", nickelodeonDirectItems); 
        });
    }

    document.querySelectorAll(".channel-back-btn, #backToChannelsBtn").forEach(btn => {
        btn.addEventListener("click", () => {
            if (!isTvPowered) return;
            hideAllTvLayers();
            layerChannels?.classList.add("active-layer");
            
            document.querySelectorAll("#tv-audio-vault audio").forEach(track => {
                track.pause();
                track.currentTime = 0;
            });

            if (planetShowcaseDeck) planetShowcaseDeck.classList.remove("show-deck");
        });
    });
});

// ==========================================
// SHOPPING CART & CHECKOUT SYSTEM
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // Load persisted cart or initialize empty array
    let cart = JSON.parse(localStorage.getItem('chokoCart')) || [];
    let currentSelectedProduct = null;

    const productModal = document.getElementById("productModal");
    const modalProductView = document.getElementById("modalProductView");
    const modalCheckoutForm = document.getElementById("modalCheckoutForm");
    const closeModalBtn = document.getElementById("closeModalBtn");

    const modalProductImg = document.getElementById("modalProductImg");
    const modalProductName = document.getElementById("modalProductName");
    const modalProductPrice = document.getElementById("modalProductPrice");
    const qtyInput = document.getElementById("qtyInput");

    const cartDrawer = document.getElementById("cartDrawer");
    const closeCartBtn = document.getElementById("closeCartBtn");
    const cartItemsContainer = document.getElementById("cartItemsContainer");
    const cartTotalPrice = document.getElementById("cartTotalPrice");
    const cartCheckoutBtn = document.getElementById("cartCheckoutBtn");

    function saveCart() {
        localStorage.setItem('chokoCart', JSON.stringify(cart));
    }

    function parsePrice(priceInput) {
        if (!priceInput) return 0;
        const cleaned = priceInput.toString()
            .replace(/[٠١٢٣٤٥٦٧٨٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d))
            .replace(/[^0-9]/g, '');
        return cleaned ? parseInt(cleaned, 10) : 0;
    }

    function openCartDrawer() {
        if (cartDrawer) {
            cartDrawer.classList.add("active", "active-cart");
        }
    }

    function closeCartDrawer() {
        if (cartDrawer) {
            cartDrawer.classList.remove("active", "active-cart");
        }
    }

    window.yourExistingAddToCartFunction = function(item) {
        const numericPrice = item.numericPrice || parsePrice(item.price);
        
        cart.push({
            name: item.name,
            price: `${numericPrice} DA`,
            numericPrice: numericPrice,
            img: item.img || "",
            qty: item.qty || 1,
            isJewelry: item.isJewelry || false,
            detailsHTML: item.detailsHTML || ""
        });

        saveCart();
        renderCart();
        openCartDrawer();
    };

    function renderCart() {
        let totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
        let totalPrice = 0;

        if (cartItemsContainer) {
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = `<p class="empty-cart-msg">السلة فارغة حالياً 🌸</p>`;
            } else {
                cartItemsContainer.innerHTML = "";
                cart.forEach((item, index) => {
                    const itemTotal = item.numericPrice * item.qty;
                    totalPrice += itemTotal;

                    const row = document.createElement("div");
                    row.className = "cart-item-row";

                    if (item.isJewelry) {
                        row.innerHTML = `
                            <div class="cart-item-info" style="width: 85%;">
                                <div class="cart-item-title" style="font-weight: bold; color: #ffb7c5;">✨ ${item.name}</div>
                                <div class="cart-item-price"> ${item.qty}x  ${item.numericPrice}DA </div>
                                <div class="jewelry-details-preview" style="margin-top: 6px; padding: 6px; background: rgba(255,255,255,0.05); border-radius: 4px; font-size: 0.8rem;">
                                    ${item.detailsHTML}
                                </div>
                            </div>
                            <button type="button" class="cart-item-remove" data-index="${index}">&times;</button>
                        `;
                    } else {
                        row.innerHTML = `
                            <img src="${item.img}" alt="${item.name}">
                            <div class="cart-item-info">
                                <div class="cart-item-title">${item.name}</div>
                                <div class="cart-item-price">${item.numericPrice}DA  × ${item.qty}</div>
                            </div>
                            <button type="button" class="cart-item-remove" data-index="${index}">&times;</button>
                        `;
                    }
                    cartItemsContainer.appendChild(row);
                });
            }
        } else {
            totalPrice = cart.reduce((sum, item) => sum + (item.numericPrice * item.qty), 0);
        }

        // Update badge counters on all pages
        document.querySelectorAll(".cart-count, #cartCounter").forEach(el => {
            el.innerText = totalItems;
        });

        if (cartTotalPrice) cartTotalPrice.innerText = `${totalPrice} DA`;

        document.querySelectorAll(".cart-item-remove").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const idx = parseInt(e.target.getAttribute("data-index"), 10);
                cart.splice(idx, 1);
                saveCart();
                renderCart();
            });
        });
    }

    // Initial render on page load
    renderCart();

    // Attach click event directly to header cart buttons
    document.querySelectorAll(".cart-btn, #cartBtn, .cart-icon").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            openCartDrawer();
        });
    });

    closeCartBtn?.addEventListener("click", () => {
        closeCartDrawer();
    });

    cartDrawer?.addEventListener("click", (e) => {
        if (e.target === cartDrawer) {
            closeCartDrawer();
        }
    });

    // Quantity selectors
    const rawQtyPlus = document.getElementById("qtyPlus");
    const rawQtyMinus = document.getElementById("qtyMinus");

    if (rawQtyPlus && rawQtyMinus) {
        const qtyPlus = rawQtyPlus.cloneNode(true);
        const qtyMinus = rawQtyMinus.cloneNode(true);

        rawQtyPlus.parentNode.replaceChild(qtyPlus, rawQtyPlus);
        rawQtyMinus.parentNode.replaceChild(qtyMinus, rawQtyMinus);

        qtyPlus.addEventListener("click", () => {
            if (qtyInput) {
                const currentQty = parseInt(qtyInput.value || 1, 10);
                qtyInput.value = currentQty + 1;
            }
        });

        qtyMinus.addEventListener("click", () => {
            if (qtyInput) {
                const currentQty = parseInt(qtyInput.value || 1, 10);
                if (currentQty > 1) {
                    qtyInput.value = currentQty - 1;
                }
            }
        });
    }

    function openProductModal(item) {
        currentSelectedProduct = item;
        const currentQtyInput = document.getElementById("qtyInput");
        if (currentQtyInput) currentQtyInput.value = 1;

        if (modalProductImg) modalProductImg.src = item.img || "";
        if (modalProductName) modalProductName.innerText = item.name;
        
        const cleanPrice = parsePrice(item.price);
        if (modalProductPrice) modalProductPrice.innerText = `${cleanPrice} DA`;

        if (modalProductView) modalProductView.style.display = "block";
        if (modalCheckoutForm) modalCheckoutForm.style.display = "none";

        productModal?.classList.add("active-modal", "active");
    }

    document.addEventListener("click", (e) => {
        const card = e.target.closest(".tv-item-card, .big-display-card, .product-card");
        if (card && !e.target.closest("#productModal") && !e.target.closest("#cartDrawer") && !e.target.closest("#builder-drawer")) {
            const title = card.querySelector(".tv-item-title, h4, .product-title")?.innerText.trim() || "";
            const img = card.querySelector("img")?.src || "";

            let productData = typeof spacetoonProducts !== "undefined"
                ? spacetoonProducts.find(p => p.name.trim().toLowerCase() === title.toLowerCase())
                : null;

            if (!productData) {
                const cardText = card.innerText || "";
                const parsedNum = parsePrice(cardText);
                const rawPrice = parsedNum > 0 ? `${parsedNum} DA` : "300 DA";
                productData = { name: title || "منتج", price: rawPrice, img: img };
            }

            openProductModal(productData);
        }
    });

    closeModalBtn?.addEventListener("click", () => {
        productModal?.classList.remove("active-modal", "active");
    });

    productModal?.addEventListener("click", (e) => {
        if (e.target === productModal) {
            productModal.classList.remove("active-modal", "active");
        }
    });

    document.getElementById("addToCartBtn")?.addEventListener("click", () => {
        if (!currentSelectedProduct) return;

        const currentQtyInput = document.getElementById("qtyInput");
        const qty = parseInt(currentQtyInput?.value || 1, 10);
        const numericPrice = parsePrice(currentSelectedProduct.price);

        const existingItem = cart.find(item => item.name.trim() === currentSelectedProduct.name.trim());
        if (existingItem) {
            existingItem.qty += qty;
        } else {
            cart.push({
                name: currentSelectedProduct.name.trim(),
                price: `${numericPrice} DA`,
                numericPrice: numericPrice,
                img: currentSelectedProduct.img,
                qty: qty
            });
        }

        saveCart();
        renderCart();
        productModal?.classList.remove("active-modal", "active");
        openCartDrawer();
    });

    document.getElementById("directBuyBtn")?.addEventListener("click", () => {
        if (modalProductView) modalProductView.style.display = "none";
        if (modalCheckoutForm) modalCheckoutForm.style.display = "block";
    });

    cartCheckoutBtn?.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("سلتك فارغة! قم بإضافة منتجات أولاً ♡");
            return;
        }
        closeCartDrawer();

        currentSelectedProduct = {
            name: cart.map(i => `${i.name} (x${i.qty})`).join(" + "),
            price: cartTotalPrice?.innerText || "0 DA",
            img: cart[0]?.img || ""
        };

        if (modalProductName) modalProductName.innerText = currentSelectedProduct.name;
        if (modalProductPrice) modalProductPrice.innerText = currentSelectedProduct.price;

        if (modalProductView) modalProductView.style.display = "none";
        if (modalCheckoutForm) modalCheckoutForm.style.display = "block";
        productModal?.classList.add("active-modal", "active");
    });

    document.getElementById("backToProductBtn")?.addEventListener("click", () => {
        if (modalCheckoutForm) modalCheckoutForm.style.display = "none";
        if (modalProductView) modalProductView.style.display = "block";
    });

   modalCheckoutForm?.addEventListener("submit", (e) => {
        e.preventDefault();

        // Récupération des informations saisies par le client
        const fullName = document.getElementById("custName")?.value || "";
        const phone = document.getElementById("custPhone")?.value || "";
        const wilaya = document.getElementById("custWilaya")?.value || "";
        const commune = document.getElementById("custCommune")?.value || "";
        const address = document.getElementById("custAddress")?.value || "";
        const instagram = document.getElementById("custInstagram")?.value || "N/A";
        const notes = document.getElementById("custNotes")?.value || "Aucune";

        // Construction du résumé de la commande
        let orderSummary = "";
        let calculatedTotal = 0;

        if (cart && cart.length > 0) {
            orderSummary = cart.map(item => {
                const itemTotal = item.numericPrice * item.qty;
                calculatedTotal += itemTotal;
                if (item.isJewelry) {
                    return `• ${item.name} (Qté: ${item.qty}) - ${itemTotal} DA\n  Détails: ${item.detailsHTML.replace(/<br>/g, ', ').replace(/<\/?strong>/g, '')}`;
                }
                return `• ${item.name} (Qté: ${item.qty}) - ${itemTotal} DA`;
            }).join("\n");
        } else if (currentSelectedProduct) {
            orderSummary = `• ${currentSelectedProduct.name} - ${currentSelectedProduct.price}`;
            calculatedTotal = parsePrice(currentSelectedProduct.price);
        }

        const totalPrice = calculatedTotal > 0 ? `${calculatedTotal} DA` : (currentSelectedProduct?.price || "0 DA");

        // Paramètres mappés sur le modèle EmailJS (Supporte les 2 nomenclatures de clés)
        const templateParams = {
            // Nouveaux identifiants
            fullName: fullName,
            orderSummary: orderSummary,
            
            // Anciens identifiants standard (compatibilité modèle)
            customer_name: fullName,
            customer_phone: phone,
            customer_wilaya: wilaya,
            customer_commune: commune,
            customer_address: address,
            customer_instagram: instagram,
            customer_notes: notes,
            order_details: orderSummary,
            total_price: totalPrice,
            
            // Champs génériques EmailJS
            to_name: "Admin",
            phone: phone,
            wilaya: wilaya,
            commune: commune,
            address: address,
            instagram: instagram,
            notes: notes,
            totalPrice: totalPrice
        };

        // Envoi de la notification de commande via EmailJS
        if (typeof emailjs !== "undefined" && EMAILJS_SERVICE_ID) {
            emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
                .then(() => {
                    alert(`شكراً لك ${fullName || ''}! تم استلام طلبك بنجاح ✨`);
                    cart = [];
                    saveCart();
                    renderCart();
                    modalCheckoutForm.reset();
                    productModal?.classList.remove("active-modal", "active");
                })
                .catch((error) => {
                    // Affichage précis de l'erreur pour le débogage
                    console.error("Erreur EmailJS détaillée :", error);
                    alert("Erreur EmailJS (" + error.status + ") : " + JSON.stringify(error.text || error));
                });
        } else {
            alert(`شكراً لك ${fullName || ''}! تم استلام طلبك بنجاح ✨`);
            cart = [];
            saveCart();
            renderCart();
            modalCheckoutForm.reset();
            productModal?.classList.remove("active-modal", "active");
        }
    });
});

// ==========================================
// JEWELRY BUILDER CONTROLLER
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
    let activeMode = 1;
    let currentHolder = 1;
    let targetChainIndex = 0;
    let chainBeads = [[], [], []];

    const triggerBtn = document.getElementById("toggle-builder-btn");
    const drawer = document.getElementById("builder-drawer");
    const modeTabs = document.querySelectorAll(".tab-btn");
    const controlsRow = document.getElementById("controls-row");
    const chainsContainer = document.getElementById("chains-container");
    const totalPriceDisplay = document.getElementById("total-price");
    const beadItems = document.querySelectorAll(".bead-item");
    const confirmBtn = document.getElementById("confirm-btn") || document.getElementById("confirm-design-btn");
    const resetBtn = document.getElementById("reset-btn");
    const holderSelect = document.getElementById('holder-select');
    const holderContainer = document.querySelector('.holder-container');

    triggerBtn?.addEventListener("click", function () {
        drawer.classList.toggle("open");
        if (drawer.classList.contains("open")) {
            triggerBtn.textContent = "✨ Close Jewelry Builder ↑";
        } else {
            triggerBtn.textContent = "✨ Build Custom Jewelry ↓";
        }
    });

    modeTabs.forEach(tab => {
        tab.addEventListener("click", function () {
            modeTabs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");
            activeMode = parseInt(this.dataset.mode);
            targetChainIndex = 0;

            if (holderContainer) {
                holderContainer.style.display = activeMode === 3 ? "block" : "none";
            }

            renderBuilderLayout();
        });
    });

    if (holderSelect) {
        holderSelect.addEventListener("change", function () {
            currentHolder = parseInt(this.value, 10);
            updatePrice();
        });
    }

    function renderBuilderLayout() {
        if (!chainsContainer) return;
        chainsContainer.className = `chains-container mode-${activeMode}`;
        if (controlsRow) controlsRow.innerHTML = "";

        if (activeMode === 2 || activeMode === 3) {
            if (controlsRow) {
                controlsRow.innerHTML = `
                    <button id="target-toggle-btn" class="action-chip-btn">Add to: Left Chain</button>
                `;
                document.getElementById("target-toggle-btn")?.addEventListener("click", cycleTargetChain);
                updateTargetButtonText();
            }
        }

        renderChains();
        updatePrice();
    }

    function cycleTargetChain() {
        if (activeMode === 2) {
            targetChainIndex = targetChainIndex === 0 ? 2 : 0;
        } else if (activeMode === 3) {
            targetChainIndex = (targetChainIndex + 1) % 3;
        }
        updateTargetButtonText();
    }

    function updateTargetButtonText() {
        const btn = document.getElementById("target-toggle-btn");
        if (!btn) return;
        const labels = ["Left Chain", "Middle Chain", "Right Chain"];
        btn.textContent = "Add to: " + labels[targetChainIndex];
    }

    function renderChains() {
        if (!chainsContainer) return;
        chainsContainer.innerHTML = "";

        let activeChainIndices = [0];
        let labels = ["My Chain"];

        if (activeMode === 2) {
            activeChainIndices = [0, 2];
            labels = ["Left Chain", "Right Chain"];
        } else if (activeMode === 3) {
            activeChainIndices = [0, 1, 2];
            labels = ["Left Chain", "Middle Chain", "Right Chain"];
        }

        activeChainIndices.forEach((chainIdx, positionIndex) => {
            const chainBox = document.createElement("div");
            chainBox.className = "chain-box";

            const title = document.createElement("div");
            title.className = "chain-title";
            title.textContent = labels[positionIndex];

            const itemsContainer = document.createElement("div");
            itemsContainer.className = "chain-items";

            const beads = chainBeads[chainIdx];
            if (beads.length === 0) {
                itemsContainer.innerHTML = `<p class="empty-text">No charms added</p>`;
            } else {
                beads.forEach(bead => {
                    const tag = document.createElement("div");
                    tag.className = "charm-tag";
                    tag.innerHTML = `
                        <span>${bead.name}</span>
                        <button class="remove-btn">✖</button>
                    `;
                    tag.querySelector(".remove-btn").addEventListener("click", () => {
                        removeCharm(chainIdx, bead.id);
                    });
                    itemsContainer.appendChild(tag);
                });
            }

            chainBox.appendChild(title);
            chainBox.appendChild(itemsContainer);
            chainsContainer.appendChild(chainBox);
        });
    }

    function addCharm(name, price) {
        const charmObj = { id: Date.now() + Math.random(), name, price };
        chainBeads[targetChainIndex].push(charmObj);
        renderChains();
        updatePrice();
    }

    function removeCharm(chainIdx, charmId) {
        chainBeads[chainIdx] = chainBeads[chainIdx].filter(b => b.id !== charmId);
        renderChains();
        updatePrice();
    }

    beadItems.forEach(item => {
        item.addEventListener("click", function () {
            addCharm(this.dataset.name, Number(this.dataset.price));
        });
    });

    function getTotalPrice() {
        const beadsTotal = chainBeads
            .flat()
            .reduce((sum, bead) => sum + bead.price, 0);

        let labourPrice = 0;
        if (activeMode === 1) labourPrice = 150;
        else if (activeMode === 2) labourPrice = 300;
        else if (activeMode === 3) labourPrice = 600;

        return beadsTotal + labourPrice;
    }

    function updatePrice() {
        if (totalPriceDisplay) {
            totalPriceDisplay.textContent = `${getTotalPrice()} DA`;
        }
    }

    resetBtn?.addEventListener("click", function () {
        chainBeads = [[], [], []];
        renderChains();
        updatePrice();
    });

    confirmBtn?.addEventListener("click", function () {
        const totalCharms = chainBeads.flat().length;
        if (totalCharms === 0) {
            alert("رجاءً قم بإضافة بضعة تعليقات إلى سلسلتك أولاً! ✨");
            return;
        }

        let modeName = "Single Chain Necklace";
        if (activeMode === 2) modeName = "Double Layered Necklace";
        if (activeMode === 3) modeName = "Triple Layered Necklace";

        let detailsArr = [];
        const activeChainIndices = activeMode === 1 ? [0] : activeMode === 2 ? [0, 2] : [0, 1, 2];
        const labels = activeMode === 1 ? ["Chain"] : activeMode === 2 ? ["Left", "Right"] : ["Left", "Middle", "Right"];

        activeChainIndices.forEach((chainIdx, idx) => {
            const charmsList = chainBeads[chainIdx].map(b => b.name).join(", ");
            detailsArr.push(`<strong>${labels[idx]}:</strong> ${charmsList || "Empty"}`);
        });

        const customJewelryItem = {
            name: `Custom ${modeName}`,
            numericPrice: getTotalPrice(),
            price: `${getTotalPrice()} DA`,
            qty: 1,
            isJewelry: true,
            detailsHTML: detailsArr.join("<br>")
        };

        if (typeof window.yourExistingAddToCartFunction === "function") {
            window.yourExistingAddToCartFunction(customJewelryItem);
            drawer?.classList.remove("open");
            if (triggerBtn) triggerBtn.textContent = "✨ Build Custom Jewelry ↓";
        } else {
            alert("تم إرسال تصميمك بنجاح! ✨");
        }
    });

    renderBuilderLayout();
});

// ==========================================
// PROFILE & AUTHENTICATION CONTROLLER
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Profile Page Navigation Tabs
    const menuButtons = document.querySelectorAll(".menu-btn[data-target]");
    const profileSections = document.querySelectorAll(".profile-section");

    menuButtons.forEach(btn => {
        btn.addEventListener("click", function() {
            const targetId = this.getAttribute("data-target");
            menuButtons.forEach(b => b.classList.remove("active"));
            this.classList.add("active");

            profileSections.forEach(section => {
                section.classList.remove("active");
                if (section.id === targetId) {
                    section.classList.add("active");
                }
            });
        });
    });

    // 2. Dynamic Navigation Bar Updates (Runs on every page)
    function updateHeaderNavigation() {
        const loginLink = document.getElementById("nav-login-link");
        const profileLink = document.getElementById("nav-profile-link");
        const currentUser = localStorage.getItem("currentUser");

        if (currentUser) {
            // User is logged in -> Hide Login link, Show Profile link
            if (loginLink) loginLink.style.display = "none";
            if (profileLink) profileLink.style.display = "inline-block";
        } else {
            // User is logged out -> Show Login link, Hide Profile link
            if (loginLink) loginLink.style.display = "inline-block";
            if (profileLink) profileLink.style.display = "none";
        }
    }

    // 3. Load Profile Info on profile.html
    function loadUserProfile() {
        const storedUser = localStorage.getItem("currentUser");
        if (!storedUser) return;

        const currentUser = JSON.parse(storedUser);

        const nameDisplay = document.getElementById("userNameDisplay");
        const emailDisplay = document.getElementById("userEmailDisplay");
        const avatarDisplay = document.getElementById("userAvatar");
        const avatarImg = document.getElementById("userAvatarImg");

        if (nameDisplay) nameDisplay.innerText = currentUser.fullName || "مستخدم";
        if (emailDisplay) emailDisplay.innerText = currentUser.email || "";
        
        if (currentUser.avatarPic) {
            if (avatarImg) {
                avatarImg.src = currentUser.avatarPic;
                avatarImg.classList.remove("hidden");
            }
            if (avatarDisplay) avatarDisplay.classList.add("hidden");
        } else {
            if (avatarDisplay) {
                const initial = (currentUser.fullName && currentUser.fullName[0]) ? currentUser.fullName[0].toUpperCase() : "أ";
                avatarDisplay.innerText = initial;
                avatarDisplay.classList.remove("hidden");
            }
            if (avatarImg) avatarImg.classList.add("hidden");
        }

        const fullNameInput = document.getElementById("profFullName");
        if (fullNameInput) fullNameInput.value = currentUser.fullName || "";

        const phoneInput = document.getElementById("profPhone");
        if (phoneInput) phoneInput.value = currentUser.phone || "";

        const instaInput = document.getElementById("profInstagram");
        if (instaInput) instaInput.value = currentUser.instagram || "";

        const wilayaInput = document.getElementById("profWilaya");
        if (wilayaInput) wilayaInput.value = currentUser.wilaya || "";

        const communeInput = document.getElementById("profCommune");
        if (communeInput) communeInput.value = currentUser.commune || "";

        const addressInput = document.getElementById("profAddress");
        if (addressInput) addressInput.value = currentUser.address || "";
    }

    // 4. Handle Form Submissions on login.html and exisacc.html
    const loginForms = document.querySelectorAll(".login-form");
    loginForms.forEach(form => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const usernameInput = form.querySelector('input[type="text"]')?.value || "ChokoFan";
            const emailInput = form.querySelector('input[type="email"]')?.value || "choko@example.com";

            const existingUser = JSON.parse(localStorage.getItem("currentUser")) || {};

            const newUserData = {
                ...existingUser,
                fullName: usernameInput,
                email: emailInput
            };

            localStorage.setItem("currentUser", JSON.stringify(newUserData));
            window.location.href = "profile.html";
        });
    });

    // 5. Avatar Upload Handler
    const avatarInput = document.getElementById("avatarInput");
    avatarInput?.addEventListener("change", function(e) {
        const file = e.target.files[0];
        if (!file) return;

        if (!file.type.startsWith("image/")) {
            alert("يرجى اختيار صورة صحيحة 📷");
            return;
        }

        const reader = new FileReader();
        reader.onload = function(event) {
            const base64Image = event.target.result;
            const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
            currentUser.avatarPic = base64Image;
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
            loadUserProfile();
        };

        reader.readAsDataURL(file);
    });

    // 6. Save Profile Information Form
    const profileForm = document.getElementById("profileInfoForm");
    profileForm?.addEventListener("submit", (e) => {
        e.preventDefault();

        const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};

        const updatedUser = {
            ...currentUser,
            fullName: document.getElementById("profFullName").value,
            phone: document.getElementById("profPhone").value,
            instagram: document.getElementById("profInstagram").value,
            wilaya: document.getElementById("profWilaya").value,
            commune: document.getElementById("profCommune").value,
            address: document.getElementById("profAddress").value
        };

        localStorage.setItem("currentUser", JSON.stringify(updatedUser));
        alert("تم حفظ التغييرات بنجاح! ✨");
        loadUserProfile();
    });

    // 7. Logout Button
    document.getElementById("logoutBtn")?.addEventListener("click", () => {
        if (confirm("هل أنت تأكد من رغبتك في تسجيل الخروج؟")) {
            localStorage.removeItem("currentUser");
            window.location.href = "login.html";
        }
    });

    // Run initial checks
    updateHeaderNavigation();
    loadUserProfile();
});

function switchTab(tabName, event) {
    // Hide all profile sections
    const sections = document.querySelectorAll('.profile-section');
    sections.forEach(sec => sec.classList.remove('active'));

    // Remove active style from menu buttons
    const buttons = document.querySelectorAll('.profile-menu .menu-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Show target section
    const targetSection = document.getElementById(tabName + '-section');
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // Highlight active button
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}

// Avatar Image Upload Preview
document.addEventListener('DOMContentLoaded', () => {
    const avatarInput = document.getElementById('avatarInput');
    if (avatarInput) {
        avatarInput.addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (evt) {
                    const img = document.getElementById('avatarImage');
                    const circle = document.querySelector('.avatar-circle');
                    if (img) {
                        img.src = evt.target.result;
                        img.classList.remove('hidden');
                    }
                    if (circle) {
                        circle.style.display = 'none';
                    }
                };
                reader.readAsDataURL(file);
            }
        });
    }
});

// Automatically remove loader when page assets finish loading
window.addEventListener("load", () => {
    const loader = document.getElementById("blog-loader");
    if (loader) {
        setTimeout(() => {
            loader.classList.add("fade-out");
        }, 400);
    }
});