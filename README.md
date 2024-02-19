# shopwithaffindi 

This project is built upon Affinidi Capstone as its foundation. It integrates Affinidi's login system and data retrieval from the Affinidi vault. The application features five main components, relying on various Affinidi products such as Affinidi Portal, Affinidi Vault, and a custom PEX file for user authentication.

Within the shopping website, Next.js framework is utilized for a smooth and reliable user experience. The project encompasses three primary features:

Add to Cart Button: This button enables users to add items to their shopping cart.
Remove from Cart Button: Users can utilize this button to remove items from their cart.
View Button: This feature allows users to access a comprehensive view of a product along with its description.
Additionally, the Checkout button in the cart menu is a crucial feature. It seamlessly integrates user credentials from the Affinidi vault, enabling users to proceed with the checkout process.



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
