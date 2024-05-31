<?php

/**
 * Pays
 * Version 1.0.0
 */
/*
    Plugin name: Pays
    Version: 1.0.0
    Description: Permet d'afficher les destinations qui répondent à certains critères
*/
function tt_pays_enqueue()
{
    // filemtime retourne en milliseconde le temps de la dernière modification
    // plugin_dir_path retourne le chemin du répertoire du plugin
    // __FILE__ le fichier en train de s'exécuter
    // wp_enqueue_style() intègre le link:css dans la page
    // wp_enqueue_script() intègre le script dans la page
    // wp_enqueue_scripts le hook

    $version_css = filemtime(plugin_dir_path(__FILE__) . "style.css");
    $version_js = filemtime(plugin_dir_path(__FILE__) . "js/pays.js");
    wp_enqueue_style(
        'tt_plugin_pays_css',
        plugin_dir_url(__FILE__) . "style.css",
        array(),
        $version_css
    );

    wp_enqueue_script(
        'tt_plugin_pays_js',
        plugin_dir_url(__FILE__) . "js/pays.js",
        array(),
        $version_js,
        true
    );
}
add_action('wp_enqueue_scripts', 'tt_pays_enqueue');

function creation_destination()
{
    $contenu = '
        <div class="button_pays">
            <button class="bouton_categorie">France</button>
            <button class="bouton_categorie">États-Unis</button>
            <button class="bouton_categorie">Canada</button>
            <button class="bouton_categorie">Argentine</button>
            <button class="bouton_categorie">Chili</button>
            <button class="bouton_categorie">Belgique</button>
            <button class="bouton_categorie">Maroc</button>
            <button class="bouton_categorie">Mexique</button>
            <button class="bouton_categorie">Japon</button>
            <button class="bouton_categorie">Italie</button>
            <button class="bouton_categorie">Islande</button>
            <button class="bouton_categorie">Chine</button>
            <button class="bouton_categorie">Grèce</button>
            <button class="bouton_categorie">Suise</button>
        </div>
        <div class="contenu__restapi">
        </div>
    ';
    return $contenu;
}

add_shortcode('tt_pays', 'creation_destination');
