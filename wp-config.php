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
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ctxknights' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

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
define( 'AUTH_KEY',         'py&PK9{rkXcdZ&EkPa*:bV{>SVja)9UyRq1gQ;y@<C9}q#Y1AhC#yQ31mkGsuKcI' );
define( 'SECURE_AUTH_KEY',  'c|VZF%B |K5~NFE3zEv)QhTJX`B@x+U+T^*!GY)N=Tar&yx/*e[:Z*.&1~v{VsBI' );
define( 'LOGGED_IN_KEY',    'TY*r2|)VaGN5]V .wJ#A;D;~}#cLW&vZX{]jaOl7{jG/1Pk+<Q+zQN1/Q_p,t=%(' );
define( 'NONCE_KEY',        'P/&zkR=rITnRj~I39h)ecvb62om0-(,Aj~(1+vuO-zPn]Rdt/a2]%7uJK/E_i7O[' );
define( 'AUTH_SALT',        'OsL*AV&#Nt17n~f$%Ck,kBVtL7<XqXHFv[iV=7f/f}.=fep]|deYrPqAC`vrc8*I' );
define( 'SECURE_AUTH_SALT', '.z1FFkYqb{_s*!nOy5IvqIIqMS6aV~0S*8K!$>`|k9bc96T`|7Wy0L5+saD$w%Lg' );
define( 'LOGGED_IN_SALT',   ',E.W#,d>1m4 CgaMMvS_X#l-|=FmyN^Y;GX[1bzRRT*g7:LT+T/r~r/G_{a@hPq%' );
define( 'NONCE_SALT',       'zBVQ~9@)]l1*PP?rWF2?KWVwh#>^Og!w@JK-}4<a,KvugD+%D8]zqg( &.>*$yW)' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'cn_';

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
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
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
