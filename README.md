# shopwithaffindi 

/**
 * DrawerComponent is a React component that renders a drawer with the user's
 * shopping cart items.
 *
 * It displays the cart items, total price, and a checkout modal if the user
 * is authenticated. It handles updating the total price when the cart changes,
 * retrieving user info on mount, and updating user info on input change.
 *
 * The checkout modal gathers shipping address and other info before proceeding
 * to payment.
 */
 
 /**
 * Products component displays a grid of product cards.
 * It fetches mock products data and filters based on search term.
 * Shows loading state while data is fetching.
 * Allows navigating to next page via handleNextPage.
 * Products are displayed in a SimpleGrid layout.
 */
 
 /**
 * SingleProduct component displays the details of a single product.
 *
 * Props:
 * - id: Product ID
 * - image: Product image URL
 * - title: Product title
 * - description: Product description
 * - price: Product price
 * - addToCart: Callback function to add product to cart
 */
 
 /**
 * CartItemInDrawer component renders a cart item.
 * It displays the item image, title, price and a button to remove the item.
 * It uses the ShoppingCartContext to get cart data and remove items.
 */
 
 /**
 * Layout component that renders the header navigation and wraps
 * the page content in a main tag.
 * Accepts children props to render page content.
 */
 
 /**
 * Header component that renders site branding, search bar, cart icon,
 * and user authentication. Includes responsive drawer component for cart.
 */
 
/**
 * ShoppingCartContext provides cart state and actions like
 * add/remove items, get quantities, clear cart etc.
 * Uses localStorage to persist cart items.
 */
 
 /**
 * ProductView displays the details for a single product.
 * It gets the product ID from the router, finds the matching product
 * from the mock products data, and displays the product details.
 * Allows going back to the product listing.
 */
 
 /**
 * MyApp is the root component that wraps the entire app.
 * It provides global state management and theming via providers.
 * Renders the Layout component and passes props to nested routes.
 */
 
 /**
 * SignInPage component renders a simple sign in form.
 * Allows users to sign in with email/password or with Affinidi.
 */
 /**
 * Environment variables for the frontend and backend.
 * 
 * NEXT_PUBLIC_HOST: Base URL for the frontend.
 * 
 * LOG_LEVEL: Logging level for the backend.
 * 
 * NEXTAUTH_*: NextAuth settings for authentication.
 * 
 * PROVIDER_*: Credentials for the Affinidi OAuth provider.
 */
