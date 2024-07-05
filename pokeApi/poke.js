$(document).ready(function() {
    $('#pokemonForm').on('submit', function(event) {
        event.preventDefault();
        const pokemonName = $('#pokemonName').val().toLowerCase();
        fetchPokemonData(pokemonName);
    });

    function fetchPokemonData(name) {
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${name}`,
            method: 'GET',
            success: function(data) {
                displayPokemonInfo(data);
            },
            error: function() {
                $('#pokemonInfo').html('<p>Pokémon no encontrado</p>');
            }
        });
    }

    function displayPokemonInfo(pokemon) {
        const abilities = pokemon.abilities.map(ability => `<tr><td>${ability.ability.name}</td></tr>`).join('');

        const pokemonHTML = `
            <h2 class="mt-4">${pokemon.name}</h2>
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" class="img-fluid mb-4">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Habilidades</th>
                    </tr>
                </thead>
                <tbody>
                    ${abilities}
                </tbody>
            </table>
        `;

        $('#pokemonInfo').html(pokemonHTML);
    }
});
