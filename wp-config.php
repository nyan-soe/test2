<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'kelvink1_wp692' );

/** Database username */
define( 'DB_USER', 'kelvink1_wp692' );

/** Database password */
define( 'DB_PASSWORD', 'S6Cp2S7c!@' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'd67yahdrcrp3fi8gxnfhduux6hyezsqhgelmvuusnibhrkrzdqlljfzhefg5hx6e' );
define( 'SECURE_AUTH_KEY',  'q5fxhjhxdkgbk7me59bspdkarahfculrp1fw8rwksnqkmm0weuq2iuivdvylvhed' );
define( 'LOGGED_IN_KEY',    'rnagffhvccuutgrsuqarullfiuqcxql2dauy5kkpd4mna6bmqyzoqelvpowto67a' );
define( 'NONCE_KEY',        'b2nmryjos01ybrdinm7rzu6cb70bi3l83jkcqdsope0ae68b8d6nra5iy3po4uye' );
define( 'AUTH_SALT',        '6gnlsezd5aixg0asmdgh2tgrtgkw1zkji96nzemsle60sn3u0p4qheqxz1jtupph' );
define( 'SECURE_AUTH_SALT', 'iq5alyoxcgrjwjay1cv021ubvxiqthd4n2zdiwya8h8mnbychktogybodeck7a9k' );
define( 'LOGGED_IN_SALT',   'yim1ghwq3nvtbioquolsdcwi3izpvm9eb4bedurzt3ctzpusduqo45stwtvad7om' );
define( 'NONCE_SALT',       'u3cemt6fqintpreljosexrcceopaqaw8kmbisv9nf6lyyqir2fpaavr5r0eberyv' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wppl_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
