// Create the Vue application and connect it to the #app element.
let webstore = new Vue({
    el: '#app',
    data: {
        // Reactive state shared by the lesson list, cart, and checkout views.
        currentView: 'main', // Active screen: lesson catalogue, cart, or checkout.
        sitename: 'After School Hub',
        // Customer and delivery information bound to the checkout form.
        // firstName and lastName are derived from name by the watcher below.
        order: {
            name: '',
            phone: '',
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            country: '',
            zip: '',
            method: 'Home',
            sendGift: 'Send as gift',
            dontsendGift: 'Do not send as gift',
            gift: 'Do not send as gift'
        },
        // Country codes used as select values; their labels are shown to the customer.
        country: {
            ENG: 'England',
            SCT: 'Scotland',
            WLS: 'Wales',
            NIR: 'Northern Ireland'
        },
        products: products, // Product catalogue loaded from assets/products.js.
        cart: [], // Stores one product ID per space; repeated IDs represent quantities.
        sortAttribute: 'title', // Selected attribute to sort by: 'title', 'price', 'spaces', 'subject', 'location', 'instructor'
        sortOrder: 'asc', // Selected order: 'asc' (Alphabetic / Ascending) or 'desc' (Reverse / Descending)
        selectedSubject: 'all', // Filter: 'all' or specific subject name
        selectedLocation: 'all', // Filter: 'all' or specific location name
        selectedInstructor: 'all' // Filter: 'all' or specific instructor name
    },
    // Keep firstName and lastName in sync when the full name changes.
    watch: {
        'order.name': function(val) {
            if (!val) {
                this.order.firstName = '';
                this.order.lastName = '';
                return;
            }
            // Treat the first word as the first name and the remaining words as the last name.
            let parts = val.trim().split(/\s+/);
            this.order.firstName = parts[0] || '';
            this.order.lastName = parts.slice(1).join(' ') || '';
        }
    },
    // Event handlers invoked by buttons in the HTML template.
    methods: {
        // Open the cart from the catalogue when it is non-empty; otherwise return to the catalogue.
        toggleCart: function() {
            if (this.currentView === 'main') {
                if (this.cart.length > 0) {
                    this.currentView = 'cart';
                }
            } else {
                this.currentView = 'main';
            }
        },
        // Retained helper that delegates to the cart toggle behaviour.
        showCheckout: function() {
            this.toggleCart();
        },
        // Add one instance of a product only when inventory permits it.
        addToCart: function(product) {
            if (this.canAddToCart(product)) {
                this.cart.push(product.id);
            }
        },
        // Remove a single occurrence of this product ID from the cart.
        removeFromCart: function(product) {
            let index = this.cart.indexOf(product.id);
            if (index !== -1) {
                this.cart.splice(index, 1);
            }
            if (this.cart.length === 0) {
                this.currentView = 'cart';
            }
        },
        // Remove every occurrence of this product ID, regardless of its quantity.
        removeAllFromCart: function(product) {
            this.cart = this.cart.filter(function(id) {
                return id !== product.id;
            });
            if (this.cart.length === 0) {
                this.currentView = 'cart';
            }
        },
        // Prevent the cart quantity from exceeding the product's available inventory.
        canAddToCart: function(product) {
            return product.availableInventory > this.cartCount(product.id);
        },
        // Count how many spaces for a particular product are currently in the cart.
        cartCount: function(id) {
            let count = 0;
            for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i] === id) {
                    count++;
                }
            }
            return count;
        },
        // Validate the order, show a confirmation, and reset the local demo state.
        submitForm: function() {
            if (this.isOrderValid) {
                alert('Order submitted successfully! Thank you for your purchase.');
                this.cart = [];
                this.order.name = '';
                this.order.phone = '';
                this.order.firstName = '';
                this.order.lastName = '';
                this.order.address = '';
                this.order.city = '';
                this.order.country = '';
                this.order.zip = '';
                this.order.gift = 'Do not send as gift';
                this.order.method = 'Home';
                this.currentView = 'main';
            }
        },
        // Reset all catalogue filter dropdowns to show all lessons.
        resetFilters: function() {
            this.selectedSubject = 'all';
            this.selectedLocation = 'all';
            this.selectedInstructor = 'all';
        }
    },
    // Derived values are recalculated by Vue when their reactive dependencies change.
    computed: {
        // Compatibility helper: true selects the catalogue, false selects the cart.
        showProduct: {
            get: function() {
                return this.currentView === 'main';
            },
            set: function(val) {
                this.currentView = val ? 'main' : 'cart';
            }
        },
        // Count spaces in the cart, including repeated product IDs.
        cartItemCount: function() {
            return this.cart.length;
        },
        // Build one display row per product, with its quantity and line subtotal.
        cartItems: function() {
            let items = [];
            // Track product IDs already converted into a display row.
            let seen = {};
            for (let i = 0; i < this.cart.length; i++) {
                let id = this.cart[i];
                if (!seen[id]) {
                    seen[id] = true;
                    let product = this.products.find(function(p) {
                        return p.id === id;
                    });
                    if (product) {
                        let qty = this.cartCount(id);
                        items.push({
                            product: product,
                            quantity: qty,
                            subtotal: product.price * qty
                        });
                    }
                }
            }
            return items;
        },
        // Add the price once for every cart entry, so quantities are included in the total.
        cartTotalPrice: function() {
            let total = 0;
            for (let i = 0; i < this.cart.length; i++) {
                let id = this.cart[i];
                let product = this.products.find(function(p) {
                    return p.id === id;
                });
                if (product) {
                    total += product.price;
                }
            }
            return total;
        },
        // Accept alphabetic English letters and spaces; punctuation and digits are rejected.
        isNameValid: function() {
            return /^[A-Za-z\s]+$/.test((this.order.name || '').trim());
        },
        // Accept digits only; this is a format check, not a check that the number exists.
        isPhoneValid: function() {
            return /^[0-9]+$/.test((this.order.phone || '').trim());
        },
        // An order can be placed only with a valid name, valid phone number, and at least one cart entry.
        isOrderValid: function() {
            return this.isNameValid && this.isPhoneValid && this.cart.length > 0;
        },
        // Unique subjects derived reactively from products catalogue
        uniqueSubjects: function() {
            let subjects = [];
            for (let i = 0; i < this.products.length; i++) {
                let s = this.products[i].subject;
                if (s && subjects.indexOf(s) === -1) {
                    subjects.push(s);
                }
            }
            return subjects.sort();
        },
        // Unique locations derived reactively from products catalogue
        uniqueLocations: function() {
            let locations = [];
            for (let i = 0; i < this.products.length; i++) {
                let loc = this.products[i].location;
                if (loc && locations.indexOf(loc) === -1) {
                    locations.push(loc);
                }
            }
            return locations.sort();
        },
        // Unique instructors derived reactively from products catalogue
        uniqueInstructors: function() {
            let instructors = [];
            for (let i = 0; i < this.products.length; i++) {
                let inst = this.products[i].instructor || this.products[i].Instructor;
                if (inst && instructors.indexOf(inst) === -1) {
                    instructors.push(inst);
                }
            }
            return instructors.sort();
        },
        // Check if any filter is currently active
        isFiltered: function() {
            return this.selectedSubject !== 'all' ||
                   this.selectedLocation !== 'all' ||
                   this.selectedInstructor !== 'all';
        },
        // Filter and sort the lessons reactively according to active criteria
        sortedProducts: function() {
            let productsArray = this.products.slice(0);

            // Filter: display only the selected subject
            if (this.selectedSubject !== 'all') {
                productsArray = productsArray.filter(p => p.subject === this.selectedSubject);
            }

            // Filter: display only the selected location
            if (this.selectedLocation !== 'all') {
                productsArray = productsArray.filter(p => p.location === this.selectedLocation);
            }

            // Filter: display only the selected instructor
            if (this.selectedInstructor !== 'all') {
                productsArray = productsArray.filter(p => {
                    let inst = p.instructor || p.Instructor;
                    return inst === this.selectedInstructor;
                });
            }

            // Sort the filtered list
            let attribute = this.sortAttribute;
            let order = this.sortOrder === 'desc' ? -1 : 1;

            return productsArray.sort((a, b) => {
                let aVal, bVal;

                if (attribute === 'spaces') {
                    aVal = a.availableInventory - this.cartCount(a.id);
                    bVal = b.availableInventory - this.cartCount(b.id);
                } else if (attribute === 'instructor') {
                    aVal = a.instructor || a.Instructor || '';
                    bVal = b.instructor || b.Instructor || '';
                } else {
                    aVal = a[attribute];
                    bVal = b[attribute];
                }

                // Alphabetic / string comparison (case-insensitive)
                if (typeof aVal === 'string' && typeof bVal === 'string') {
                    let result = aVal.localeCompare(bVal, undefined, { sensitivity: 'base' });
                    if (result !== 0) return result * order;
                } else {
                    // Numeric comparison (price, spaces, etc.)
                    if (aVal < bVal) return -1 * order;
                    if (aVal > bVal) return 1 * order;
                }

                // Secondary tie-breaker by title
                let aTitle = a.title || '';
                let bTitle = b.title || '';
                return aTitle.localeCompare(bTitle) * order;
            });
        }
    }
});